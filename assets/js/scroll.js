
// VARIABLE PARA ELEMENTOS NORMALES

var sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
});

// VARIABLE PARA GADGETS DEL HOME

var gadgets = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 100
});

// SECCION HOME 

sr.reveal(`.home__data`, {origin: 'bottom'});
gadgets.reveal(`.mouse`, {origin: 'left'});
gadgets.reveal(`.teclado`, {origin: 'right'});
gadgets.reveal(`.laptop`, {origin: 'top'});
sr.reveal(`.elipse`, {origin: 'bottom'});
sr.reveal(`.letras_powerboost`, {origin: 'left'});

// SECCION ABOUT

sr.reveal(`.about__data`, {origin:'top'});
gadgets.reveal(`.headset`, {origin:'right'});
gadgets.reveal(`.microfono`,{origin:'left'});
gadgets.reveal(`.monitor`,{origin:'bottom'});
sr.reveal(`.elipse_2`,{origin: 'top'});
sr.reveal(`.letras_powerboost_2`,{origin:'right'});

// SECCION CONTACTO

sr.reveal(`.contenedor`, {origin:'bottom'});
sr.reveal(`.left-side`, {origin: 'left'});
sr.reveal(`right-side`, {origin: 'right'});

// SECCION TIENDA

sr.reveal(`.store__title`, {origin:'top'});
sr.reveal(`.divisor, .category_cards`, {origin:'bottom'} );