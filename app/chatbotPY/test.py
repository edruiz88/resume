# import asyncio
# import websockets

# async def hello():
#     async with websockets.connect("ws://127.0.0.1:3000") as websocket:
#         await websocket.send("Hello world!")
#         await websocket.recv()

# asyncio.run(hello())





# import socket
# import json

# host = '127.0.0.1'
# port = 3000

# sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# sock.connect((host, port))

# msg = json.dumps({"ping": "hello"}).encode('UTF-8')
# sock.send(msg)
# sock.send(b"\r\n")

# while True:
#     data = sock.recv(4096)
#     print(data.decode('UTF-8'))




from aiohttp import web
import socketio

sio = socketio.AsyncServer(cors_allowed_origins='*')
app = web.Application()
sio.attach(app)

# async def index(request):
#     """Serve the client-side application."""
#     with open('index.html') as f:
#         return web.Response(text=f.read(), content_type='text/html')

@sio.on('connect', namespace='/chat')
def connect(sid, environ):
    print("connect", sid)

@sio.on('cool')
async def cool(sid, environ):
    print("cooooollll", environ)
    await sio.emit('reply', 'culolaaass')

@sio.on('chat message', namespace='/chat')
async def message(sid, data):
    print("server received message!", data)
    await sio.emit('reply', data)
    await sio.send(data)

@sio.on('disconnect', namespace='/chat')
def disconnect(sid):
    print('disconnect', sid)

# app.router.add_static('/static', 'static')
# app.router.add_get('/', index)

if __name__ == '__main__':
    web.run_app(app, host='127.0.0.1', port=3000)




# import socketio

# standard Python
# sio = socketio.Client()

# @sio.event
# def connect():
#     print("I'm connected!")
#     sio.emit('login', {'userKey': 'streaming_api_key'})

# @sio.event
# def connect_error():
#     print("The connection failed!")

# @sio.event
# def message(data):
#     print('I received a message!')

# @sio.on('handshake')
# def on_message(data):
#     print('HandShake', data)
#     sio.emit('symbolSub', {'symbol': 'USDJPY'})
#     sio.emit('symbolSub', {'symbol': 'GBPUSD'})
#     sio.emit('symbolSub', {'symbol': 'EURUSD'})

# @sio.on('price')
# def on_message(data):
#     print('Price Data ', data)


# sio.connect('127.0.0.1:3000')





# import socketio
# sio = socketio.Server()

# @sio.event
# def connect():
#     print("I'm connected!")
#     #print('my sid is', sio.sid)
#     sio.emit("**", 'gfgfgfgg')
# @sio.event
# def connect_error():
#     print("The connection failed!")
# @sio.event
# def disconnect():
#     print("I'm disconnected!")  

# sio.connect('http://127.0.0.1:3000')
# sio.wait()