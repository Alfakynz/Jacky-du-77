const slides = document.getElementsById("mySlides");
const jacky = [
  [''],
  []
];

function print(jacky) {
  for(let i = 0; i < jacky[i]; i++) {
    const h3 = document.createElement('h3');
    h3.className = 'insta';

    // Créer la balise a
    const a = document.createElement('a');
    a.href = './image.png';
    a.target = '_blank';
    a.textContent = 'Texte';

    // Ajouter la balise a à h3
    h3.appendChild(a);

    // Créer la balise img
    const img = document.createElement('img');
    img.className = 'border';
    img.src = './image.png';
    img.alt = '';

    // Ajouter les éléments créés au div mySlides
    const mySlides = document.getElementById('mySlides');
    mySlides.appendChild(h3);
    mySlides.appendChild(img);
  }
}

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlides(slideIndex);
});

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlides(slideIndex);
});