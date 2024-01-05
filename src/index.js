import './styles/main.scss';
import TestingClass from './modules/TestingClass';
import astro from './assets/astro.png';

console.log('index.js loaded properly!');
const tester = new TestingClass();
tester.testLogger();

const image = document.getElementById('myimage');
image.src = astro;
