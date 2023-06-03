// GSAP animation

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add('(min-width: 1199px)', () => {

    gsap.from('.header', {
        scrollTriger: '.header',
        y: -20,
        duration: .8,
        opacity: 0
    });

    gsap.from('h1', {
        scrollTrigger: '.header',
        scale: 1.2,
        duration: .8,
        opacity: 0
    });

    gsap.from('.description', {
        scrollTrigger: 'h1',
        scale: 1.2,
        duration: .8,
        opacity: 0
    });

    gsap.from('.hero a', {
        scrollTriger: '.hero a',
        y: 200,
        duration: .8,
        opacity: 0
    });

    gsap.from('.btn', {
        scrollTrigger: '.btn',
        y: 50,
        duration: .8,
        opacity: 0
    });

    gsap.from('.services', {
        scrollTrigger: '.services',
        y: 100,
        duration: .8,
        opacity: 0
    });

    gsap.from('.split_section_text', {
        scrollTrigger: '.split_section_text',
        x: -100,
        duration: .8,
        opacity: 0
    });

    gsap.from('.split_section_image', {
        scrollTrigger: '.split_section_image',
        x: 100,
        duration: .8,
        opacity: 0
    });

    gsap.from('.hero_about h1', {
        scrollTrigger: '.hero_about h1',
        scale: 1.3,
        duration: .8,
        opacity: 0
    });

    gsap.from('.split_section_text_about', {
        scrollTrigger: '.split_section_text_about',
        x: -100,
        duration: .8,
        opacity: 0
    });

    gsap.from('.split_section_image_about', {
        scrollTrigger: '.split_section_image_about',
        x: 100,
        duration: .8,
        opacity: 0
    });

    gsap.from('.split_section_text_about-below', {
        scrollTrigger: '.split_section_image_about-below',
        x: 100,
        duration: .8,
        opacity: 0
    });

    gsap.from('.split_section_image_about-below', {
        scrollTrigger: '.split_section_image_about-below',
        x: -100,
        duration: .8,
        opacity: 0
    });

    gsap.from('.contact_text', {
        scrollTrigger: '.contact_text',
        x: 100,
        duration: .8,
        opacity: 0
    });

    gsap.from('.contact_submit_form', {
        scrollTrigger: '.contact_submit_form',
        x: -100,
        duration: .8,
        opacity: 0
    });
});
