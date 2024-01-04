//Ejercicio 1

const h1 = document.querySelector('h1');
const newSpan = document.createElement('span');
newSpan.innerText = ' | Temática elegida: Cultura Japonesa';
h1.appendChild(newSpan);

//Ejercicio 3

const colors = ['gold', 'yellow', 'brown', 'green'];

const select = document.querySelector('select');
const colorOptions = [];

//funcion para cargar los colores en el array de options
const createOption = () => {
    for (let i = 0; i < colors.length ; i++) {
        const newOption = document.createElement('option');
        newOption.value = colors[i];
        newOption.innerText = colors[i]
        colorOptions.push(newOption);
    }
}
createOption();

for (i = 0; i < colorOptions.length; i++) {
    select.appendChild(colorOptions[i])
}

//Ejercicio 5

const circles = document.querySelector('.circles__circle-container').children;
const checkbox = document.querySelector('input');


for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', () => {
        if (checkbox.checked) {
            for (let j = circles.length - 1; j >= i; j--) {
                circles[j].style = `background-color: var(--color-${select.value});`
            } 
        } else {
                circles[i].style = `background-color: var(--color-${select.value});`
        }
    })
}

//Ejercicio 6

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', () => {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style = 'background-color: white;'
    }
})