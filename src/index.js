import { functionMenu } from './menu.js';
import { functionHome } from './home.js';
import { functionContactUs } from './contactus.js';
import { createDiv} from './domfunctions.js';
import { createP} from './domfunctions.js';
import { createH1} from './domfunctions.js';
import { createUL} from './domfunctions.js';



const content = document.querySelector('#content');

const container = createDiv("container","");
const header = createDiv("header","");
const h1 = createH1("heading","Welcome to Chef's Kiss");
const main = createDiv("main","");
const buttonContainer = createDiv("buttonContainer","");

const menuList = document.createElement('ul');
menuList.classList.add('menuList');

const menuHome = document.createElement('li');
menuHome.textContent = "Home";

const menuMenu = document.createElement('li');
menuMenu.textContent = "Menu";

const menuContactUs = document.createElement('li');
menuContactUs.textContent = "Contact Us";

const mainContent = document.createElement('div')
mainContent.classList.add('mainContent');

const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerHTML = '&copy; 2022 Dustin Meredith | &nbsp;<a href="https://github.com/dusmer/">GitHub</a></i></a>';

content.appendChild(container);
container.appendChild(header);
header.appendChild(h1);
container.appendChild(main);
main.appendChild(buttonContainer);
buttonContainer.appendChild(menuList);
menuList.appendChild(menuHome);
menuList.appendChild(menuMenu);
menuList.appendChild(menuContactUs);

menuHome.addEventListener('click', () => {
    functionHome();
});

menuMenu.addEventListener('click', () => {
    functionMenu();
});

menuContactUs.addEventListener('click', () => {
    functionContactUs();
});
main.appendChild(mainContent);
container.appendChild(footer);

functionHome();