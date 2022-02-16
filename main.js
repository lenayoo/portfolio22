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


// nav toggleBtn

const toggleBtn = document.querySelector('.nav__toggleBtn');
const menu = document.querySelector('.nav__menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
});

// handle contact button

const homeContactbtn = document.querySelector('.home__contact');

homeContactbtn.addEventListener('click', (event) => {
  // const scrollTo = document.querySelector('#contact')

  // scrollTo.scrollIntoView({behavior: 'smooth'})
  scroll('#contact');
});


// arrow button for top

const arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener('click', ()=>{
  scroll('#home');
})

// created function for scrolling
function scroll(selector){
  const link = document.querySelector(selector);
  link.scrollIntoView({behavior: 'smooth'});
}