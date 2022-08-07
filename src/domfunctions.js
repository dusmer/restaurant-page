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

const createUL = (className,content) => {
    const ul = document.createElement('ul');
    ul.classList.add(className);
    content.forEach(element => {
        console.log(element);
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
    
    return ul;
}


export { createDiv };
export { createP };
export { createH1 };
export { createUL };