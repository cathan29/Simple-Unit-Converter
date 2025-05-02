document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('input-value');
    const conversionType = document.getElementById('conversion-type');
    const convertBtn = document.getElementById('convert-btn');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('reset-btn');

    // Conversion logic
    const convertUnits = () => {
        const value = parseFloat(inputValue.value);
        const type = conversionType.value;

        if (isNaN(value)) {
            result.textContent = 'Please enter a valid number.';
            return;
        }

        let convertedValue;

        switch (type) {
            case 'c-to-f':
                convertedValue = (value * 9/5) + 32;
                result.textContent = `${value}°C = ${convertedValue.toFixed(2)}°F`;
                break;
            case 'f-to-c':
                convertedValue = (value - 32) * 5/9;
                result.textContent = `${value}°F = ${convertedValue.toFixed(2)}°C`;
                break;
            case 'km-to-mi':
                convertedValue = value * 0.621371;
                result.textContent = `${value} km = ${convertedValue.toFixed(2)} miles`;
                break;
            case 'mi-to-km':
                convertedValue = value / 0.621371;
                result.textContent = `${value} miles = ${convertedValue.toFixed(2)} km`;
                break;
            case 'kg-to-lb':
                convertedValue = value * 2.20462;
                result.textContent = `${value} kg = ${convertedValue.toFixed(2)} lbs`;
                break;
            case 'lb-to-kg':
                convertedValue = value / 2.20462;
                result.textContent = `${value} lbs = ${convertedValue.toFixed(2)} kg`;
                break;
            default:
                result.textContent = 'Invalid conversion type.';
        }
    };

    // Event listener for Convert button
    convertBtn.addEventListener('click', convertUnits);

    // Reset button clears input and result
    resetBtn.addEventListener('click', () => {
        result.textContent = '--';
    });
});