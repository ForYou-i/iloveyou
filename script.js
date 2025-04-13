document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    const romanticMessage = document.querySelector('.romantic-message');
    const readMoreBtn = document.querySelector('.read-more-btn');
    let currentSlide = 0;
    let interval;

    // Criar dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Função para alternar slides
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        resetInterval();
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 4000);
    }

    resetInterval();

    // Pausar carrossel e animação ao passar o mouse
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(interval);
        slides[currentSlide].style.animationPlayState = 'paused';
    });
    carouselContainer.addEventListener('mouseleave', () => {
        resetInterval();
        slides[currentSlide].style.animationPlayState = 'running';
    });

    // Manipular clique no botão "Ler mais"
    readMoreBtn.addEventListener('click', () => {
        if (romanticMessage.classList.contains('hidden')) {
            romanticMessage.classList.remove('hidden');
            romanticMessage.classList.add('full');
            readMoreBtn.textContent = 'Ler menos';
        } else {
            romanticMessage.classList.remove('full');
            romanticMessage.classList.add('hidden');
            readMoreBtn.textContent = 'Ler mais';
        }
    });
});