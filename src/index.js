import generateJoke from './generateJoke';
import './styles/main.scss';
import logo from './assets/_DSC8932.png';

const logoImg = document.getElementById('logoImg');
logoImg.src = logo;

console.log(generateJoke())