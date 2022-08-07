import { createDiv} from './domfunctions.js';
import { createP} from './domfunctions.js';
import { createH1} from './domfunctions.js';
import { createUL} from './domfunctions.js';
import { createMenuItem } from './domfunctions.js';

const functionMenu= () => {
    const content = document.querySelector('.mainContent');
    const mainContent = createDiv("mainContent",'');
    const menuDiv = createDiv("menu","");
    const item1 = createMenuItem("Hamburger","Made with Ham and Burger","$89.00","images/Chef-s-Kiss.jpg")
    
    mainContent.appendChild(menuDiv);
    menuDiv.appendChild(item1);

    
    content.parentNode.replaceChild(mainContent,content);

}

export { functionMenu };