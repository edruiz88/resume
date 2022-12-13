import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';

import ToastContext from './context';
import Toast from './Toast';

// Create a random ID
function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);

  return first + second;
}

function toastProvider(Component) {
  function ToastProvider(props) {
    const [toasts, setToasts] = useState([]);

    const add = data => {
      const id = generateUEID();
      const type = data.type;
      const content = data.msg;

      setToasts([...toasts, { id, type, content }]);
    };
    const remove = id => {setToasts(toasts.filter(t => t.id !== id))};
    const providerValue = useMemo(() => { return { add, remove } }, [toasts]);

    return (
      <ToastContext.Provider value={ providerValue }>
        <Component {...props} />

        { createPortal(
            <div className="tst-area">
              { toasts.map(t => (
                  <Toast key={t.id} type={t.type} remove={() => remove(t.id)}>
                    {t.content}
                  </Toast>
              )) }
            </div>,
            document.body
        ) }
      </ToastContext.Provider>
    );
  }

  return ToastProvider;
}

export default toastProvider;