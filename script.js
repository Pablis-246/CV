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