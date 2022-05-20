import "./App.css";
import React, { useState } from "react";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  let initialState = JSON.parse(localStorage.getItem("historial")) || [];
  const [historial, sethistorial] = useState(initialState);

  function allClear() {
    setNumber1("");
    setNumber2("");
    setCurrentOperation("");
    setResult(0);
  }

  const deleteNumber = () => {
    if (currentOperation === "") {
      setNumber1(number1.toString().slice(0, -1));
    } else {
      setNumber2(number2.toString().slice(0, -1));
    }
  };

  function clickNumber(val) {
    if (currentOperation === "") {
      setNumber1(number1 + val);
    } else {
      setNumber2(number2 + val);
    }
  }

  function clickOperation(val) {
    setCurrentOperation(val);
  }

  function getResult(val) {
    let resultado = 0;
    switch (currentOperation) {
      case "+":
        resultado = Number(number1) + Number(number2);
        break;
      case "-":
        resultado = Number(number1) - Number(number2);
        break;
      case "*":
        resultado = Number(number1) * Number(number2);
        break;
      case "/":
        resultado = Number(number1) / Number(number2);
        break;
      default:
        break;
    }

    setResult(resultado);
    const coleccion = {
      n1: number1,
      ope: currentOperation,
      n2: number2,
      res: resultado,
    };
    console.log({ resultado });
    console.log({ coleccion });
    const nuevoArray = [...historial, coleccion];
    sethistorial([...nuevoArray]);
    localStorage.setItem("historial", JSON.stringify(nuevoArray));
  }
  const borrarHistorial =()=>{
    sethistorial([])
    localStorage.setItem("historial", JSON.stringify([]));
  }

  return (
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {currentOperation ? number1 + currentOperation : ""}
          </div>
          <div className="current-operand">
            {result ? result : !currentOperation ? number1 : number2}
          </div>
        </div>
        <button onClick={allClear} className="span-two">
          AC
        </button>

        <button onClick={deleteNumber}>DEL</button>
        <button
          onClick={() => {
            clickOperation("/");
          }}
          className="com"
        >
          /
        </button>
        <button
          onClick={() => {
            clickNumber(7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            clickNumber(8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            clickNumber(9);
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            clickOperation("*");
          }}
          className="com"
        >
          *
        </button>
        <button
          onClick={() => {
            clickNumber(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            clickNumber(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            clickNumber(6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            clickOperation("+");
          }}
          className="com"
        >
          +
        </button>
        <button
          onClick={() => {
            clickNumber(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            clickNumber(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            clickNumber(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            clickOperation("-");
          }}
          className="com"
        >
          -
        </button>
        <button
          onClick={() => {
            clickNumber(".");
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            clickNumber(0);
          }}
        >
          0
        </button>
        <button onClick={getResult} className="span-two">
          =
        </button>
      </div>
      {/* Boton de guardar */}
      <span className="col">
        <h3>Historial</h3>
        <br />
        <br />
        {historial.length === 0 && "Áun no hay Historial"}
        {historial.length !== 0 && (
          <ol>
            <br />
            <br />
            <br />
            {historial.map((item, index) => {
              return (
                <li key={index}>
                  {item.n1}
                  {item.ope}
                  {item.n2}={item.res}
                </li>
              );
            })}
             <button onClick={borrarHistorial} style={{whith:"50%"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
           <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
           </svg></button>
          </ol>
        )}
      </span>
    </div>
  );
}

export default App;