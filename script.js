const container = document.getElementById('slideshow-container');
const jacky = [
  ['https://instagram.com/jacky_du77?igshid=YzcxN2Q2NzY0OA==', 'Instagram de Jacky', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky.jpeg?v=1720706981820'],
  ['https://instagram.com/jacky_du77?igshid=YzcxN2Q2NzY0OA==', 'Instagram de Jacky', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-tete.png?v=1720706978194'],
  ['https://www.instagram.com/p/Cuag-QOIXh4/?igshid=YzcxN2Q2NzY0OA==', 'Jacky Célèbre', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-celebre.jpeg?v=1720706951866'],
  ['https://www.instagram.com/p/CucxUk9r02B/?igshid=YzcxN2Q2NzY0OA==', 'Jacky Flic', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-flic.jpeg?v=1720706953088'],
  ['https://www.instagram.com/p/CuenVOtorZs/?igshid=YzcxN2Q2NzY0OA==', 'Jacky Boxeur', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-boxeur.jpeg?v=1720706887608'],
  ['https://www.instagram.com/p/Cuj35_VIhun/?igshid=YmM0MjE2YWMzOA==', 'Jacky Sparrow', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-pirate.jpeg?v=1720706958281'],
  ['https://www.instagram.com/p/CuuefRDNZMo/?igshid=MzRlODBiNWFlZA==', 'Jacky au McDo', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-mcdo.jpeg?v=1720706954031'],
  ['https://www.instagram.com/p/CvKWbyKKZCU/?igshid=MzRlODBiNWFlZA==', 'Jacky Soldat', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-soldat.jpeg?v=1720706962328'],
  ['', 'Jacky Militaire', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-militaire.jpeg?v=1720706955079'],
  ['', 'Jacky Noël', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-noel.jpeg?v=1720706956199'],
  ['', 'Jacky Fan de l\'OM', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-om.jpeg?v=1720706957445'],
  ['', 'Jacky Pompier', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-pompier.jpeg?v=1720706959347'],
  ['', 'Jacky Rebelle', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-rebelle.jpeg?v=1720706960647'],
  ['', 'Jacky Rockeur', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-rockeur.jpeg?v=1720706961449'],
  ['', 'Jacky Vampire', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/jacky-vampire.jpeg?v=1720706979319'],
  ['', 'Maître Jacky', 'https://cdn.glitch.global/45f09deb-da0b-4a2a-81b3-5e8ced722080/maitre-jacky.jpeg?v=1720706983005']
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