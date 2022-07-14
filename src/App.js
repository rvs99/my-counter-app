import './App.css';
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './components/Button'

function App() {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const toastId = 100;
  const notify = () => toastId.current = toast.warning("Sorry! You cannot decrease more than Zero!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: true,
    theme: 'dark',
    toastId: toastId
  });
  const dismiss = () => toast.dismiss(toastId);

  const incrementCounter = () => {
    if (counter >= 0) {
      dismiss();
      setCounter(counter + 1);
      setErrorMessage("");
    }
  }

  const decrementCounter = () => {
    if (counter <= 0) {
      setErrorMessage("Sorry! You cannot decrease more than Zero!");
      if (toastId != null)
        dismiss();

      notify();
    }
    else {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="app">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div class="buttons">
          <Button title=" + " action={incrementCounter} style={{ backgroundColor: 'green', color: 'white' }} />
        </div>

        <div class="count">
          <h3>Count:</h3>
          <h1>{counter}</h1>
        </div>

        <div class="buttons">
          <Button title=" - " action={decrementCounter} style={{ backgroundColor: 'red', color: 'white' }} />
        </div>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {errorMessage && <div> {errorMessage} </div>}
      </div>

    </div>
  );
}

export default App;
