const createDiv = (className,content) => {
    const div = document.createElement('div');
    div.classList.add(className);
    div.textContent = content;
    return div;
}

const createH1 = (className,content) => {
    const h1 = document.createElement('h1');
    h1.classList.add(className);
    h1.textContent = content;
    return h1;

}

const createP = (className,content) => {
    const p = document.createElement('p');
    p.classList.add(className);
    p.textContent = content;
    return p;
}

const createSpan = (className,content) => {
    const span = document.createElement('span');
    span.classList.add(className);
    span.textContent = content;
    return span;
}
const createUL = (className,content) => {
    const ul = document.createElement('ul');
    ul.classList.add(className);
    content.forEach(element => {
        console.log(element);
        const li = document.createElement('li');
        li.setAttribute('id',element.replace(/\s/g, ''));
        li.textContent = element;
        ul.appendChild(li);
    });
    
    return ul;
}

const createMenuItem = (title,description,price,imagePath) =>{
    const div = document.createElement('div');
    div.classList.add("menuItem");
   
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = title;
   
    const menuDescription = document.createElement('p');
    menuDescription.classList.add("menuDescription");
    menuDescription.textContent = description;

    const menuPrice = document.createElement('p');
    menuPrice.classList.add("menuPrice");
    menuPrice.textContent = price;

    const img = document.createElement("img");
    img.src = imagePath;
    img.classList.add("menuImg");
    div.appendChild(img);        
    div.appendChild(menuTitle);
    div.appendChild(menuPrice);
    div.appendChild(menuDescription);
    return div;
}


export { createDiv };
export { createP };
export { createH1 };
export { createUL };
export { createMenuItem};
export { createSpan};