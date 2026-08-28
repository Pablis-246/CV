let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("bdsql");
        habilidades[4].classList.add("visualbasic");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("paqueteoffice");     
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("organizacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Esta propiedad permite una transición suave
            });
        }
    });
});

// Función para desplazarse hacia arriba cuando se hace clic en la flecha
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar u ocultar la flecha en función de la posición de desplazamiento
window.addEventListener('scroll', function() {
    var flecha = document.querySelector('.flecha');
    if (window.scrollY > 100) { // Puedes ajustar este valor según tu preferencia
        flecha.classList.add('mostrar');
    } else {
        flecha.classList.remove('mostrar');
    }
});


const logoJedi = document.getElementById("logo-jedi");
const lightsaber = document.querySelector(".lightsaber");

const colors = ["saber-blue", "saber-red"];
const glow = ["glow-blue", "glow-red"];

let colorIndex = 0;

logoJedi.addEventListener("mouseenter", () => {

    lightsaber.classList.add(colors[colorIndex]);

    logoJedi.classList.add(
        "active-logo",
        glow[colorIndex]
    );

});

logoJedi.addEventListener("mouseleave", () => {

    lightsaber.classList.remove(colors[colorIndex]);

    logoJedi.classList.remove(
        "active-logo",
        glow[colorIndex]
    );

    setTimeout(()=>{

        colorIndex = (colorIndex + 1) % colors.length;

    },500); // mismo tiempo que el transition

});

//BARRA HABILAID BLANDAS
const swiper = new Swiper('.softSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3, // FUERZA EXACTAMENTE 3 TARJETAS EN PANTALLA
            spaceBetween: 25,
        }
    }
});

/*==================================================
CARRUSEL PROYECTOS
==================================================*/

const slider=document.querySelector(".projects-slider");

const cards=document.querySelectorAll(".project-card");

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

const dots=document.querySelectorAll(".dot");

let currentPage=0;

let cardsPerPage=window.innerWidth<=992?1:2;

let totalPages=Math.ceil(cards.length/cardsPerPage);

/*==================================================
IR A PAGINA
==================================================*/

function goToPage(page){

    cardsPerPage=window.innerWidth<=992?1:2;

    totalPages=Math.ceil(cards.length/cardsPerPage);

    currentPage=page;

    if(currentPage>=totalPages){

        currentPage=0;

    }

    if(currentPage<0){

        currentPage=totalPages-1;

    }

    const cardWidth=cards[0].offsetWidth;

    const gap=25;

    slider.scrollTo({

        left:currentPage*(cardWidth+gap)*cardsPerPage,

        behavior:"smooth"

    });

    dots.forEach(dot=>dot.classList.remove("active"));

    if(dots[currentPage]){

        dots[currentPage].classList.add("active");

    }

}

/*==================================================
BOTON SIGUIENTE
==================================================*/

next.addEventListener("click",()=>{

    goToPage(currentPage+1);

});

/*==================================================
BOTON ANTERIOR
==================================================*/

prev.addEventListener("click",()=>{

    goToPage(currentPage-1);

});

/*==================================================
CLICK EN LOS PUNTOS
==================================================*/

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        goToPage(index);

    });

});

/*==================================================
RESPONSIVE
==================================================*/

window.addEventListener("resize",()=>{

    goToPage(currentPage);

});

/*==================================================
INICIO
==================================================*/

goToPage(0);

/*==================================================
MENSAJE ENVIADO CON
==================================================*/
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const toastAlert = document.getElementById('toast-alert');

    if (contactForm && toastAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue inmediatamente

            // 1. Mostrar la alerta deslizando desde la derecha
            toastAlert.classList.add('show');

            // 2. Limpiar los campos del formulario (opcional)
            contactForm.reset();

            // 3. Ocultar la alerta automáticamente después de 3.5 segundos
            setTimeout(() => {
                toastAlert.classList.remove('show');
            }, 3500);
        });
    }
});

/*==================================================
CONOCIMEINTOS ADQUIIRODS ACOORDEON
==================================================*/
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.knowledge-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const card = header.parentElement;
            const body = card.querySelector('.knowledge-body');

            // Alternar la clase 'active'
            const isActive = card.classList.contains('active');

            // Opcional: Cerrar las demás tarjetas si se abre una nueva
            document.querySelectorAll('.knowledge-card').forEach(otherCard => {
                otherCard.classList.remove('active');
                otherCard.querySelector('.knowledge-body').style.maxHeight = null;
            });

            if (!isActive) {
                card.classList.add('active');
                // Asigna la altura exacta del contenido
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
});