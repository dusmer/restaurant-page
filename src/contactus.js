import { createDiv} from './domfunctions.js';
import { createP} from './domfunctions.js';
import { createH1} from './domfunctions.js';
import { createUL} from './domfunctions.js';

const functionContactUs = () => {
    const content = document.querySelector('.mainContent');
    const mainContent = createDiv("mainContent",'');
    const contactDiv = createDiv("contact","");
    const contactHead = createH1("about","Get in Touch!");
    const contactInfo = createP("contactInfo","1-234-567-8910");
    const contactEmail = createP("contactInfo","chefskiss@fakeemail.com");
    
    const map = document.createElement('p');


    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356888.2239937116!2d-42.698555652322696!3d81.7078780541406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x51324d51d5c5f2b9%3A0xda1a7714d9d98964!2sNorth%20Pole%2C%20AK%2099705%2C%20USA!5e0!3m2!1sen!2sca!4v1660501819124!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    mainContent.appendChild(contactDiv);
    contactDiv.appendChild(contactHead);
    contactDiv.appendChild(contactInfo);
    contactDiv.appendChild(contactEmail);
    contactDiv.appendChild(map);    
    content.parentNode.replaceChild(mainContent,content);

}
export { functionContactUs };