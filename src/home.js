import { createDiv} from './domfunctions.js';
import { createP} from './domfunctions.js';
import { createH1} from './domfunctions.js';
import { createUL} from './domfunctions.js';

const functionHome= () => {

    const content = document.querySelector('.mainContent');

    const mainContent = createDiv("mainContent",'');


    mainContent.appendChild(createH1("heading","We're the Best!"));
    mainContent.appendChild(createP("textContent","Come here for good vibes, pretty good food, and the world's best Chef's Kisses!"));
    mainContent.appendChild(createH1("heading","Hours!"));
    mainContent.appendChild(createP("textContent","1 to 2"));
    mainContent.appendChild(createUL("menu",["first","second","third"]));
    

    
    content.parentNode.replaceChild(mainContent,content);

}


export { functionHome };