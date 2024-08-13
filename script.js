document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputTemperature)) {
        document.getElementById('output').textContent = 'Please enter a valid temperature.';
        return;
    }

    let result = '';

    switch (inputUnit) {
        case 'celsius':
            result += `${inputTemperature} °C = ${(inputTemperature * 9/5 + 32).toFixed(2)} °F<br>`;
            result += `${inputTemperature} °C = ${(inputTemperature + 273.15).toFixed(2)} K`;
            break;
        case 'fahrenheit':
            result += `${inputTemperature} °F = ${((inputTemperature - 32) * 5/9).toFixed(2)} °C<br>`;
            result += `${inputTemperature} °F = ${(((inputTemperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
            break;
        case 'kelvin':
            result += `${inputTemperature} K = ${(inputTemperature - 273.15).toFixed(2)} °C<br>`;
            result += `${inputTemperature} K = ${((inputTemperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            result = 'Invalid unit selected';
    }

    document.getElementById('output').innerHTML = result;
}
