let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    
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