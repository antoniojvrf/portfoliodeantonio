
// PT: Ícone de alternância da navbar
// EN: toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// PT: Persistência ativa no scroll em relação às sections
// EN: Scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


 // PT: Elemento que faz a navbar ser persistente
 // PT: Element that makes navbar persistent
 

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.ScrollY > 100);


// PT: Elemento que remove o ícone de alternância e a navbar quando se clica em algum link presente na navbar
// EN: Element that removes toggle icon and navbar when clicking navbar link (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// PT: BIBLIOTECA SCROLL REVEAL (Animação de revelação em elementos do site)
// EN: SCROLL REVEAL LIBRARY (Reveal animations in website elements)

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', 
    { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', 
    { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', 
    { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', 
    { origin: 'right' });


// BIBLIOTECA TYPED JS (Animação de digitação na class "multiple-text")
// TYPED JS LIBRARY (Typing animations in the class "multiple-text")

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Estudante Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

