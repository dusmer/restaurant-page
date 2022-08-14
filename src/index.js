import { functionMenu } from './menu.js';
import { functionHome } from './home.js';
import { functionContactUs } from './contactus.js';
import { createDiv} from './domfunctions.js';
import { createP} from './domfunctions.js';
import { createH1} from './domfunctions.js';
import { createUL} from './domfunctions.js';
import { createSpan } from './domfunctions.js';
//import './style.css';
//import Icon from './Chef-s-Kiss.jpg';



const content = document.querySelector('#content');
const container = createDiv("container","");
const header = createDiv("header","");
const divSymbol = createDiv("innerContainer","");
const spanSymbol = createSpan("material-symbols-outlined","lunch_dining");
const divTitle = createDiv("innerContainer","");
const spanTitle = createSpan("title","The Chef's Kiss");

content.appendChild(container);
container.appendChild(header);
header.appendChild(divSymbol);
divSymbol.appendChild(spanSymbol);
header.appendChild(divTitle);
divTitle.appendChild(spanTitle);

const main = createDiv("main","");
const navRow = createDiv("navRow","");
const menuUL = createUL("menuList", ["Home","Menu","Contact Us"]);

container.appendChild(main);
main.appendChild(navRow);
navRow.appendChild(menuUL);



const menuList = document.createElement('ul');
menuList.classList.add('menuList');



const mainContent = document.createElement('div')
mainContent.classList.add('mainContent');

const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerHTML = '&copy; 2022 Dustin Meredith | &nbsp;<a href="https://github.com/dusmer/">GitHub</a></i></a>';


const menuHome =  document.querySelector('#Home');
menuHome.addEventListener('click', () => {
    functionHome();
});

const menuMenu =  document.querySelector('#Menu');
menuMenu.addEventListener('click', () => {
    functionMenu();
});

const menuContactUs =  document.querySelector('#ContactUs');
menuContactUs.addEventListener('click', () => {
    functionContactUs();
});
main.appendChild(mainContent);
functionHome();
container.appendChild(footer);

