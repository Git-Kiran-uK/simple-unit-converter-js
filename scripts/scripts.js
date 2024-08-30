const unitEl = document.getElementById('input-value');
const submitEl = document.getElementById('submit-el');
const lengthEl = document.getElementById('length-el');
const volumeEl = document.getElementById('volume-el');
const massEl = document.getElementById('mass-el');

let lengthMeter = undefined;
let lengthFeet = undefined;
let volumeLiter = undefined;
let volumeGallons = undefined;
let massKilo = undefined;
let massPound = undefined;

function unitConverter(convertValue){
    lengthMeter = (convertValue * 0.3048).toFixed(2);
    lengthMeter = lengthMeter > 1 ? `${lengthMeter} meters` : `${lengthMeter} meter`;

    lengthFeet = (convertValue * 3.28084).toFixed(2);
    lengthFeet = lengthFeet > 1 ? `${lengthFeet} feet` : `${lengthFeet} foot`;

    volumeLiter = (convertValue * 3.785412).toFixed(2);
    volumeLiter = volumeLiter > 1 ? `${volumeLiter} liters` : `${volumeLiter} liter`;

    volumeGallons = (convertValue * 0.264172).toFixed(2);
    volumeGallons = volumeGallons > 1 ? `${volumeGallons} gallons` : `${volumeGallons} gallon`;

    massKilo = (convertValue * 0.45359237).toFixed(2);
    massKilo = massKilo > 1 ? `${massKilo} kilos` : `${massKilo} kilo`;

    massPound = (convertValue * 2.20462262).toFixed(2);
    massPound = massPound > 1 ? `${massPound} pounds` : `${massPound} pound`;
}

submitEl.addEventListener('click', () => {
    let inputValue = Number(unitEl.textContent);

    if (isNaN(inputValue) || inputValue <= 0) {
        alert('Please enter a valid number greater than 0');
        return;
    }
    unitConverter(inputValue);
    lengthEl.textContent = inputValue > 1 ? `${inputValue} meters = ${lengthFeet} | ${inputValue} feet = ${lengthMeter}` : `${inputValue} meter = ${lengthFeet} | ${inputValue} foot = ${lengthMeter}`;
    volumeEl.textContent = inputValue > 1 ? `${inputValue} liters = ${volumeGallons} | ${inputValue} gallons = ${volumeLiter}` : `${inputValue} liter = ${volumeGallons} | ${inputValue} gallon = ${volumeLiter}`;
    massEl.textContent = inputValue > 1 ? `${inputValue} kilos = ${massPound} | ${inputValue} pounds = ${massKilo}` : `${inputValue} kilo = ${massPound} | ${inputValue} pound = ${massKilo}`;
});