function convertTemperature() {
    const temp = document.getElementById("temperature").value;
    const unitFrom = document.getElementById("unit-from").value;
    const unitTo = document.getElementById("unit-to").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(temp)) {
        resultDiv.innerText = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temp);
    let convertedTemperature;

    const unitSymbols = {
        Celsius: "°C",
        Fahrenheit: "°F",
        Kelvin: "K"
    };
    
    if (unitFrom === unitTo) {
        convertedTemperature = temperature;
    } else if (unitFrom === "Celsius" && unitTo === "Fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
    } else if (unitFrom === "Celsius" && unitTo === "Kelvin") {
        convertedTemperature = temperature + 273.15;
    } else if (unitFrom === "Fahrenheit" && unitTo === "Celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
    } else if (unitFrom === "Fahrenheit" && unitTo === "Kelvin") {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    } else if (unitFrom === "Kelvin" && unitTo === "Celsius") {
        convertedTemperature = temperature - 273.15;
    } else if (unitFrom === "Kelvin" && unitTo === "Fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    }

    resultDiv.innerText = `Result\n ${convertedTemperature.toFixed(2)} ${unitSymbols[unitTo]}`;
}
