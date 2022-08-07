import { createDiv} from './domfunctions.js';
import { createP} from './domfunctions.js';
import { createH1} from './domfunctions.js';
import { createUL} from './domfunctions.js';

const functionHome= () => {

    const content = document.querySelector('.mainContent');

    const mainContent = createDiv("mainContent",'');
    const aboutContent = createDiv("aboutContent","");
    const aboutContentH1 = createH1("about","About Us");
    const aboutP = createP("aboutP","The Chef's Kiss makes dang good burgers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ligula, euismod sed facilisis nec, consequat sed quam. Nullam eleifend ultrices purus, ac pharetra tellus malesuada sed. Sed posuere mi vitae elit aliquet ultricies. Sed quis tristique felis, in efficitur tellus. Mauris ornare justo sed facilisis blandit. Ut posuere, ex eu dictum egestas, felis risus porta sem, bibendum interdum sapien tellus a libero. Proin mattis, eros non molestie vehicula, lorem magna gravida turpis, et consequat enim sapien eu massa. In convallis turpis vel nibh condimentum, at aliquam quam laoreet.");
    const hoursContent = createDiv("hoursContent","");
    const hoursH1 = createH1("about","Hours");
    const hoursPm = createP("hoursP","Monday: 8:00am to 8:00pm");
    const hoursPt = createP("hoursP","Tuesday: 8:00am to 8:00pm");
    const hoursPw = createP("hoursP","Wednesday: 8:00am to 8:00pm");
    const hoursPth = createP("hoursP","Thursday: 8:00am to 8:00pm");
    const hoursPf = createP("hoursP","Friday: 8:00am to 8:00pm");
    const hoursPsa = createP("hoursP","Saturday: 8:00am to 8:00pm");
    const hoursPs = createP("hoursP","Sunday: 8:00am to 8:00pm");
    
    mainContent.appendChild(aboutContent);
    aboutContent.appendChild(aboutContentH1);
    aboutContent.appendChild(aboutP);
    mainContent.appendChild(hoursContent);
    hoursContent.appendChild(hoursH1);
    hoursContent.appendChild(hoursPm);
    hoursContent.appendChild(hoursPt);
    hoursContent.appendChild(hoursPw);
    hoursContent.appendChild(hoursPth);
    hoursContent.appendChild(hoursPf);
    hoursContent.appendChild(hoursPsa);
    hoursContent.appendChild(hoursPs);
    
    
    /*
    mainContent.appendChild(createH1("heading","We're the Best!"));
    mainContent.appendChild(createP("textContent","Come here for good vibes, pretty good food, and the world's best Chef's Kisses!"));
    mainContent.appendChild(createH1("heading","Hours!"));
    mainContent.appendChild(createP("textContent","1 to 2"));
    mainContent.appendChild(createUL("menu",["first","second","third"]));*/
    


    
    
    content.parentNode.replaceChild(mainContent,content);

}


export { functionHome };