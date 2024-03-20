import './App.css';
import React, {useState} from 'react';

function IMC() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [classification, setClassification] = useState(null);

  const calculateIMC = () => {
    const heightMeters = height / 100 ; //dividido por 100 = resultado em metros
    const IMC = weight / (heightMeters * heightMeters) // calculo IMC

    setResult(IMC.toFixed(2)) // toFixed(2) diminui as casas decimais para duas

    if (IMC < 18.5) {
      setClassification('Abaixo do peso ideal');

    } else if (IMC >= 18.5 && IMC <= 24.9) {
      setClassification('Peso saudável');

    } else if (IMC >= 25 && IMC <= 29.9) {
      setClassification('Sobrepeso');

    } else if (IMC >= 30 && IMC <= 34.9) {
      setClassification('Obesidade grau 1');

    } else if (IMC >= 35 && IMC <= 39.9) {
      setClassification('Obesidade grau 2');

    } else if (IMC >= 40) {
      setClassification('Obesidade mórbida');
    } else {
      setClassification(null);
    }
  };

  return (
    <div className="App">

      <h1>Calculadora de IMC</h1>
      <div className="input-container">

        <label className="label">
          Peso (kg):
        </label>

        <input
          type="number"
          className="input-field"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          />

        <label className="label">
          Altura (cm):
        </label>

        <input
          type="number"
          className="input-field"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />

      </div>

      <button
        className="calculate-button"
        onClick={calculateIMC}
      >
        Calcular IMC
      </button>
      
      { result &&
        <p className='result'> Seu IMC é: <b>{result}</b></p>
      }

      { classification &&
        <p className='classification'>Classificação: <b>{classification}</b></p>
      }
    </div>
  )
}

export default IMC;