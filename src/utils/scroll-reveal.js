const scroll_reveal = () => {
    const sr = ScrollReveal({
        distance: '50px',
        duration: 2500,
        delay: 0,
        reset: true
    });

    sr.reveal('.about__content', { origin: 'left' });
    sr.reveal('.about__img-wrapper', { origin: 'top' });
    sr.reveal('.experience__description', { origin: 'left' });
    sr.reveal('.experience__responsibilites-wrapper', { origin: 'right' });
    sr.reveal('.project__content', { origin: 'left' });
    sr.reveal('.project__img-wrapper', { origin: 'right' });
}

export default scroll_reveal;
