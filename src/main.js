const openCloseToogle = () => {
    // Seleccionamos los elementos del menú y los íconos de abrir/cerrar
    const openClose = document.querySelectorAll('.open__close');
    const headerNav = document.querySelector('.header__nav');
    const navGradient = document.querySelector('.nav__gradient');

    // Función para alternar el menú y los íconos
    const toggleMenu = () => {
        headerNav.classList.toggle('hidden'); // Muestra/oculta el menú
        navGradient.classList.toggle('hidden'); // Muestra/oculta el fondo del menú (mobile)
        openClose.forEach(icon => {
            icon.classList.toggle('hidden'); // Alterna la visibilidad de los íconos
        });
    };

    // Añadimos el evento de clic a ambos íconos
    openClose.forEach(icon => {
        icon.addEventListener('click', toggleMenu);
    });
};

openCloseToogle();