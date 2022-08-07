import { createDiv} from './domfunctions.js';
import { createP} from './domfunctions.js';
import { createH1} from './domfunctions.js';
import { createUL} from './domfunctions.js';

const functionContactUs = () => {
    const content = document.querySelector('.mainContent');
    const main = document.createElement('div');
    main.classList.add('mainContent');
    main.textContent = "Contact Us";
    
    content.parentNode.replaceChild(main,content);

}
export { functionContactUs };