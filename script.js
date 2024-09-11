const container = document.getElementById('slideshow-container');

const jacky = [
  ['https://instagram.com/jacky_du77?igshid=YzcxN2Q2NzY0OA==', 'Instagram de Jacky', 'images/jacky.jpeg'],
  ['https://instagram.com/jacky_du77?igshid=YzcxN2Q2NzY0OA==', 'Instagram de Jacky', 'images/jacky-tete.png'],
  ['https://www.instagram.com/p/Cuag-QOIXh4/?igshid=YzcxN2Q2NzY0OA==', 'Jacky Célèbre', 'images/jacky-celebre.jpeg'],
  ['https://www.instagram.com/p/CucxUk9r02B/?igshid=YzcxN2Q2NzY0OA==', 'Jacky Flic', 'images/jacky-flic.jpeg'],
  ['https://www.instagram.com/p/CuenVOtorZs/?igshid=YzcxN2Q2NzY0OA==', 'Jacky Boxeur', 'images/jacky-boxeur.jpeg'],
  ['https://www.instagram.com/p/Cuj35_VIhun/?igshid=YmM0MjE2YWMzOA==', 'Jacky Sparrow', 'images/jacky-pirate.jpeg'],
  ['https://www.instagram.com/p/CuuefRDNZMo/?igshid=MzRlODBiNWFlZA==', 'Jacky au McDo', 'images/jacky-mcdo.jpeg'],
  ['https://www.instagram.com/p/CvKWbyKKZCU/?igshid=MzRlODBiNWFlZA==', 'Jacky Soldat', 'images/jacky-soldat.jpeg'],
  ['', 'Jacky Militaire', 'images/jacky-militaire.jpeg'],
  ['', 'Jacky Noël', 'images/jacky-noel.jpeg'],
  ['', 'Jacky Fan de l\'OM', 'images/jacky-om.jpeg'],
  ['', 'Jacky Pompier', 'images/jacky-pompier.jpeg'],
  ['', 'Jacky Rebelle', 'images/jacky-rebelle.jpeg'],
  ['', 'Jacky Rockeur', 'images/jacky-rockeur.jpeg'],
  ['', 'Jacky Vampire', 'images/jacky-vampire.jpeg'],
  ['', 'Maître Jacky', 'images/maitre-jacky.jpeg']
];

function print(jacky) {
  for (let i = 0; i < jacky.length; i++) {
    const div = document.createElement('div');
    div.className = 'mySlides';

    const h3 = document.createElement('h3');
    h3.className = 'insta';

    const a = document.createElement('a');
    a.href = jacky[i][0];
    a.target = '_blank';
    a.textContent = jacky[i][1];

    h3.appendChild(a);

    const img = document.createElement('img');
    img.className = 'border';
    img.src = jacky[i][2];
    img.alt = jacky[i][1];

    div.appendChild(h3);
    div.appendChild(img);

    container.appendChild(div);
  }
}

print(jacky);

const slides = document.getElementsByClassName('mySlides');
let slideIndex = 0;

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

showSlides(slideIndex);

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex--;
  showSlides(slideIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  slideIndex++;
  showSlides(slideIndex);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    slideIndex--;
    showSlides(slideIndex);
  } else if (event.key === 'ArrowRight') {
    slideIndex++;
    showSlides(slideIndex);
  }
});