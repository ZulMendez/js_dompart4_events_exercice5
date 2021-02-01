// 1
let inp = document.querySelectorAll('input')[0];

document.addEventListener('focus', function() {
    inp.style.backgroundColor = 'blue'
}, true);

// 2
let inp2 = document.querySelectorAll('input')[1];

document.addEventListener('focus', function() {
    inp2.style.backgroundColor = 'blue'
}, true);

document.addEventListener('focusout', function() {
    inp2.style.backgroundColor = 'white'
}, true);

// 3
let para = document.getElementsByClassName('premierParagraphe')[0];
console.log(para);
let para2 = document.getElementsByClassName('secondParagraphe')[0];
console.log(para2);
let para3 = document.getElementsByClassName('dernierParagraphe')[0];
console.log(para3);
let butt = document.getElementsByClassName('buttonExo btn btn-primary')[0];
console.log(butt);

butt.addEventListener("click", () => {
    para.textContent = para2.textContent;
    para3.textContent = para2.textContent;
});

// 4
let input = document.querySelectorAll('input')[2];
let recupBut = document.getElementsByClassName('buttonExo')[1];
let text = document.querySelector('#exo4');

recupBut.addEventListener('click', () => {
    text.innerText = input.value;
});

// 5
let btn3 = document.getElementsByClassName("btn")[2];
let img1 = document.getElementsByClassName("img-responsive")[0];
let exo5P = document.getElementsByTagName("p")[4].innerText;

btn3.addEventListener("click", () => {
  // Récupère l'index du point dans la chaine de caractère "Chemin : ./src/image/tartine.png" et stock cet index dans la variable indexPoint
  let indexPoint = exo5P.indexOf(".");
  // On ce sert de la methode slice sur la chaine de caractère "Chemin : ./src/image/tartine.png" pour ne garder que le texte a partir de l'index contenu dans la variable indexPoint
  let cheminExo5P = exo5P.slice(indexPoint);

  img1.src = cheminExo5P;
});

//6
let imgSecond = document.querySelectorAll("img")[1];
let imgthird = document.querySelectorAll("img")[2];
let stock = "";

let stockimg = () => {
  stock = imgSecond.attributes[1].value;
};
let remplaceimg = () => {
  imgthird.attributes[1].value = stock;
};

imgSecond.addEventListener("click", stockimg);
imgthird.addEventListener("click", remplaceimg);

// Exo 7
let exo7Button = document.querySelectorAll("button.btn")[3];
let exo7P1 = exo7Button.previousElementSibling;
let exo7P2 = exo7Button.nextElementSibling;
let exo7Temp = "";

let interChange = () => {
  exo7Temp = exo7P1.innerText;
  exo7P1.innerText = exo7P2.innerText;
  exo7P2.innerText = exo7Temp;
};

exo7Button.addEventListener("click", interChange);