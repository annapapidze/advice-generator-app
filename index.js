"use strict";

const numberAdvice = document.getElementById('number');
const fewAdvice = document.getElementById('advice');
const btn = document.getElementById('btn');
const apiLink = "https://api.adviceslip.com/advice";

const newAdvice = async () => {
    const response = await fetch(apiLink);
    const advice = await response.json();
    return advice;
};

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    numberAdvice.textContent = `ADVICE #${id}`;
    fewAdvice.textContent = advice;
};

const generateNewAdvice = async () => {
    const data = await newAdvice();
    const advice = data.slip;

    renderAdvice(advice);

};

window.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', generateNewAdvice)
});

