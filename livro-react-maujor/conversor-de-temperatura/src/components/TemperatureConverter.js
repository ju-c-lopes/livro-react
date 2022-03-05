import React, { useState } from "react";

const TemperatureConverter = () => {
  let [temperature, setTemperature] = useState("");
  const userSelect = document.querySelector("#user-choice");
  const teclas = document.querySelectorAll(".tecla");
  const resultados = document.querySelectorAll(".result");

  const handleTemperature = (valorTecla) => {
    // Impede entrada de mais de um ponto decimal
    console.log(temperature);
    if (valorTecla === "." && temperature.includes(".")) {
      return false;
    }
    // Permite entrada do sinal negativo somente no início do campo
    if (valorTecla === "-" && temperature === "") {
      setTemperature(valorTecla);
      return true;
    }
    if (valorTecla === "." && (temperature === "" || temperature ==="-")) {
      setTemperature(temperature +"0.");
      return true;
    }
    // Se valor for sinal negativo, não deixa entrar valor
    if (valorTecla !== "-") {
      setTemperature(temperature + valorTecla);
      return true;
    }
  }

  // Quando a tecla backspace é apertada
  const handleBackSpace = () => {
    temperature = temperature.slice(0, -1);
    setTemperature(temperature);
  }

  const exibition = (convertions) => {
    const resultCelsius = document.querySelector("#celsius-temp");
    const resultFahreinheit = document.querySelector("#fahrenheit-temp");
    const resultKelvin = document.querySelector("#kelvin-temp");

    resultCelsius.insertAdjacentHTML("afterbegin", convertions.celsiusTemperature);
    resultFahreinheit.insertAdjacentHTML("afterbegin", convertions.fahrenheitTemperature);
    resultKelvin.insertAdjacentHTML("afterbegin", convertions.kelvinTemperature);
  };

  // Quando o botão converter é clicado
  const handleConverter = () => {
    // Se usuário entrar -0 corrige para 0
    if (temperature === "-0") {
      setTemperature("0");
    }

    temperature = Number(temperature);
    const fromTemp = document.querySelector("#user-choice")
      .options[document.querySelector("#user-choice")
      .selectedIndex].value;
    
    const temps = {};
    switch(fromTemp) {
      case "C":        
        temps.celsiusTemperature = temperature.toFixed(2);
        temps.fahrenheitTemperature = ((temperature * 9) / 5 + 32).toFixed(2);
        temps.kelvinTemperature = (temperature + 273.15).toFixed(2);        
        exibition(temps);
        break;
      case "F":
        temps.fahrenheitTemperature = temperature.toFixed(2);
        temps.celsiusTemperature = ((temperature - 32) * 5 / 9).toFixed(2);
        temps.kelvinTemperature = ((temperature - 32) * 5 / 9 + 273.15).toFixed(2);
        exibition(temps);
        break;
      case "K":
        temps.kelvinTemperature = temperature.toFixed(2);
        temps.celsiusTemperature = (temperature - 273.15).toFixed(2);
        temps.fahrenheitTemperature = ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);
        exibition(temps);
        break;
      default:
        window.alert("Algo Anormal!");
    }

    // Desabilita as teclas (exceto "Nova Conversão") após conversão
    [].map.call(teclas, (el) => {
      return el.setAttribute("disabled", true);
    });
  }

  const handleReset = () => {
    // Habilita teclas
    [].map.call(teclas, (el) => { // Método JS call em https://mzl.la/2Ix7Wcm
      return el.removeAttribute("disabled");
    });

    // Remove resultados da conversão
    [].map.call(resultados, (el) => {
      if (el.hasChildNodes()) {
        return el.removeChild(el.firstChild);
      }
    });

    // Habilita campo de seleção de unidade de medida da temperatura
    userSelect.removeAttribute("disabled");
    setTemperature("");
  };

  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={ temperature } />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>

        {/* Div para exibição Celsius */}
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>

        {/* Div para exibição Fahrenheit */}
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>

        {/* Div para exibição Kelvin */}
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>

        <button className="tecla" id="converter" onClick={() => handleConverter()}>
          Converter
        </button>
      </aside>

      <aside className="areaTeclas">
        <button className="n1 tecla" onClick={() => handleTemperature("1")}>1</button>
        <button className="n2 tecla" onClick={() => handleTemperature("2")}>2</button>
        <button className="n3 tecla" onClick={() => handleTemperature("3")}>3</button>
        <button className="n4 tecla" onClick={() => handleTemperature("4")}>4</button>
        <button className="n5 tecla" onClick={() => handleTemperature("5")}>5</button>
        <button className="n6 tecla" onClick={() => handleTemperature("6")}>6</button>
        <button className="n7 tecla" onClick={() => handleTemperature("7")}>7</button>
        <button className="n8 tecla" onClick={() => handleTemperature("8")}>8</button>
        <button className="n9 tecla" onClick={() => handleTemperature("9")}>9</button>
        <button className="n0 tecla" onClick={() => handleTemperature("0")}>0</button>
        <button className="virgula tecla" onClick={() => handleTemperature(".")}>,</button>
        <button className="limpa tecla" onClick={() => handleBackSpace()}><img src="../../backspace.svg" alt="Voltar" /></button>
        <button className="negativo tecla" onClick={() => handleTemperature("-")}>-</button>
        <div className="reset tecla" onClick={() => handleReset()}>Nova conversão</div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
