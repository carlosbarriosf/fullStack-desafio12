


const colors = [];
class Color {
    constructor (colorName, colorHexOrKeyWord) {
        this.colorName = colorName;
        this.colorHexOrKeyWord = colorHexOrKeyWord;
    }
}



const colorGold = new Color('gold', '#c98700');
const colorYellow = new Color('yellow', '#f3c53c');
const colorBrown = new Color('brown', '#633a36');
const colorGreen = new Color('green', '#4c8802');

colors.push(colorGold);
colors.push(colorYellow);
colors.push(colorBrown);
colors.push(colorGreen);

const select = document.querySelector('select');
const colorOptions = [];

//funcion para cargar los colores en el array de options
const createOption = () => {
    const storedColors = JSON.parse(localStorage.getItem('updatedColors'));
    if (storedColors) {
        for(let i = 0; i < storedColors.length; i++) {
            const newOption = document.createElement('option');
            newOption.value = storedColors[i].colorHexOrKeyWord;
            newOption.innerText = storedColors[i].colorName;
            colorOptions.push(newOption);
        } 
    }   else {
        for (let i = 0; i < colors.length ; i++) {
                const newOption = document.createElement('option');
                newOption.value = colors[i].colorHexOrKeyWord;
                newOption.innerText = colors[i].colorName;
                colorOptions.push(newOption);
        }
    }
    for (i = 0; i < colorOptions.length; i++) {
        select.appendChild(colorOptions[i])
    }
}


document.addEventListener('DOMContentLoaded', createOption());


const circles = document.querySelector('.circles__circle-container').children;
const checkbox = document.querySelector('[data-checkbox]');


for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', () => {
        if (checkbox.checked) {
            for (let j = circles.length - 1; j >= i; j--) {
                circles[j].style = `background-color: ${select.value}; transition: background-color 0.5s`
            } 
        } else {
                circles[i].style = `background-color: ${select.value}; transition: background-color 0.5s`
        }
    })
}

const resetButton = document.querySelector('[data-reset-btn]');
resetButton.addEventListener('click', () => {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style = 'background-color: white; transition: background-color 0.5s'
    }
})

//

const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelector('[data-open-modal]');
const closeModalBtn = document.querySelector('[data-close-modal]');
openModalBtn.addEventListener('click', () => {
    modal.showModal();
    while (colorsList.firstChild) {
        colorsList.removeChild(colorsList.lastChild)
    }
    for (let i = 1; i < select.children.length; i++) {
        fillList(select.children[i]);
    }
})
closeModalBtn.addEventListener('click', () => {
    modal.close();
})


const colorsList = document.querySelector('[data-color-list]');

//funcion para cargar la lista de colores del modal

const fillList = (option) => {
    const listItem = document.createElement('li');

    const divElement = document.createElement('div');
    divElement.classList.add("modal__colors-display")

    const label = document.createElement('label');
    label.innerText = option.value;
    label.setAttribute('data-color-values', 'true');

    const button = document.createElement('button');
    button.innerHTML = '&times;';
    button.classList.add("modal__btns");
    button.setAttribute('data-remove-btns', 'true');
    button.addEventListener('click', () => {
        const listItem = button.parentNode.parentNode;
        listItem.parentNode.removeChild(listItem);
    })

    divElement.appendChild(label);
    divElement.appendChild(button);

    listItem.appendChild(divElement);

    colorsList.appendChild(listItem);
}

const addColorBtn = document.querySelector('[data-add-color]');
addColorBtn.addEventListener('click', () => {
    const newColorInput = document.querySelector('[data-color-input]');
    const colorLabels = document.querySelectorAll('[data-color-values]');
    let colorExists = false;
    for (let i = 0; i < colorLabels.length; i++) {
        if (newColorInput.value.toLowerCase() === colorLabels[i].innerText) {
           colorExists = true;
        }
    }
    if (newColorInput.value.length < 3 || !containsNonSpaceCharacters(newColorInput.value)) {
        alert("Por favor ingrese un color válido");
    } else if (colorExists) {
        alert("El color ya fue añadido");
        newColorInput.value = "";
    } else {
        fillList(newColorInput);
        newColorInput.value = "";
    }
})

const containsNonSpaceCharacters = (str) => {
    var regex = /\S/;
    return regex.test(str);
}


const confirmBtn = document.querySelector('[data-confirm-btn]');

confirmBtn.addEventListener('click', () => {
    const colorLabels = document.querySelectorAll('[data-color-values]');
    colors.splice(0);
    for (let i = 0; i < colorLabels.length; i++) {
        const newColor = new Color(`${colorLabels[i].innerText}`, `${colorLabels[i].innerText}`);
        if (newColor !== null) {
            colors.push(newColor);
        }
    }
    localStorage.setItem('updatedColors', JSON.stringify(colors));
    console.log(JSON.parse(localStorage.getItem('updatedColors')));
})

//Ejercicio 5) Código para cambiar la cantidad de círculos concéntricos.

const circleNumberSelect = document.querySelector('[data-circles-number]');
circleNumberSelect.addEventListener('change', () => {
    const circleStyle = document.querySelector('[data-circles-stylesheet]');
    console.log(circleStyle)
    console.log(circleNumberSelect.value)
    switch (circleNumberSelect.value) {
        case '1':
            circleStyle.setAttribute('href', 'styles/circles-1.css');
            break;
        case '2':
            circleStyle.setAttribute('href', 'styles/circles-2.css');
            break;
        case '3':
            circleStyle.setAttribute('href', 'styles/circles-3.css');
            break;
        case '4':
            circleStyle.setAttribute('href', 'styles/circles-4.css');
            break;
        case '5':
            circleStyle.setAttribute('href', 'styles/circles-5.css');
            break;
        case '6':
            circleStyle.setAttribute('href', 'styles/circles-6.css');
            break;
        case '7':
            circleStyle.setAttribute('href', 'styles/circles-7.css');
            break;
        case '8':
            circleStyle.setAttribute('href', 'styles/circles-8.css');
            break;
    }
})

