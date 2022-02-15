'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// navbar

document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbar height is ${navbarHeight}`);

  if (window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark')
  };
});

// navbar link

const navMenu = document.querySelector('.nav__menu');

navMenu.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.target.dataset.link);
  
  const link = event.target.dataset.link;
  // const scrollTo = document.querySelector(link);

  if (link == null){
    return;
  } else {
    // scrollTo.scrollIntoView({behavior: "smooth"});
    scroll(link);
  }
})

// handle contact button

const homeContactbtn = document.querySelector('.home__contact');

homeContactbtn.addEventListener('click', (event) => {
  // const scrollTo = document.querySelector('#contact')

  // scrollTo.scrollIntoView({behavior: 'smooth'})
  scroll('#contact');
});



function scroll(selector){
  const link = document.querySelector(selector);
  link.scrollIntoView({behavior: 'smooth'});
}