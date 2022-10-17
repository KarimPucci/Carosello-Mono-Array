/*Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

const imagesArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
];

let imagesTags = "";

//SELEZIONE CONTENITORE CHE CONTERRà I TAG IMG
const slider = document.querySelector("items-wrapper");

//CICLO L'ARRAY E CREO UNA STRINGA HTML DA AGGIUNGIERE ALLE SLIDER
for(let i = 0; i < imagesArray.lenght; i++){
  
  imagesTags += `
  <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}"
  `;
}

let counterImages = 0;

const next = document.querySelector(".right");
const prev = document.querySelector(".left");
console.log(next);

//AGGIUNGO I TAG GENERATI DINAMICAMENTE ALLO SLIDER
slider.innerHTML += imagesTags;

//SALVO TUTTI GLI ELEMENTI CON CLASSE ITEM IN UNA HTMLCollection (UN ARRAY DI ELEMENTI HTML)
items[counterImages].classList.add("active");

next.addEventListener("click",function(){
  items[counterImages].classList.remove("active");
  items[++counterImages].classList.add("active");
  
});
prev.addEventListener("click",function(){
  items[counterImages].classList.remove("active");
  items[--counterImages].classList.add("active");
  console.log("prev");
});