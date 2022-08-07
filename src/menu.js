import { createDiv} from './domfunctions.js';
import { createP} from './domfunctions.js';
import { createH1} from './domfunctions.js';
import { createUL} from './domfunctions.js';

const functionMenu= () => {
    const content = document.querySelector('.mainContent');
    const main = document.createElement('div');
    main.classList.add('mainContent');
    main.textContent = "Menu";
    
    content.parentNode.replaceChild(main,content);

}

export { functionMenu };