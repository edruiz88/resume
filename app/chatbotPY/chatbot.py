from aiohttp import web
import socketio
import random
import os
import json
import pickle
import numpy as np
import importlib
import nltk
from nltk.stem import WordNetLemmatizer

from tensorflow.keras.models import load_model

sio = socketio.AsyncServer(cors_allowed_origins='*')
app = web.Application()
sio.attach(app)

@sio.on('connect', namespace='/bot')
async def connect(sid, environ):
    print("connect", sid)
    await sio.emit('is_connected', 'GO! Bot is running!', namespace='/bot')

@sio.on('disconnect', namespace='/bot')
def disconnect(sid):
    print('disconnect', sid)

# *** start chatbot ***
lemmatizer = WordNetLemmatizer()

dir_path = os.path.dirname(os.path.realpath(__file__))
intents = json.loads(open(dir_path+ '/' +'intents.json').read())

words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))
model = load_model('chatbotmodel.h5')

def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    bag = [0] *len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentece):
    bow = bag_of_words(sentece)
    res = model.predict(np.array([bow]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({'intent': classes[r[0]], 'probability': str(r[1])})
    return return_list

def get_response(intents_list, intents_json):
    tag = intents_list[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result

print("GO! Bot is running!")

@sio.on('send_res', namespace='/bot')
async def send_res(sid, msg):
    print(msg)
    ints = predict_class(msg)
    res = get_response(ints, intents)
    await sio.emit('bot_reply', res, namespace='/bot')

if __name__ == '__main__':
    web.run_app(app, host='192.168.0.183', port=3000)