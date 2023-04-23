/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
var swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
    },
  });

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
      target: '.featured__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
  linkFeatured.forEach(l=> l.classList.remove('active-featured'))
  this.classList.add('active-featured')
}

linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal({ reset: true });

const sr = ScrollReveal({
  origin: 'top',
  distancez: '60px',
  duration: 1000,
  delay: 300,
  //reset: true
})

sr.reveal(".home__title", {
  duration: 1000,
  distance: "60px",
});

sr.reveal(".home__subtitle", {
  duration: 1000,
  distance: "60px",
  delay: 400
});

sr.reveal(".home__elec", {
  duration: 1000,
  distance: "60px",
  delay: 500
});

sr.reveal(".home__img", {
  duration: 1000,
  distance: "60px",
  delay: 700
});

sr.reveal(".home__car-data", {
  duration: 1000,
  distance: "60px",
  delay: 800,
  interval: 100,
  origin: 'bottom'
});

sr.reveal(".about__group", {
  duration: 1000,
  distance: "60px",
  delay: 700,
  origin: 'left'
});

sr.reveal(".about__data", {
  duration: 1000,
  distance: "60px",
  delay: 700,
  origin: 'right'
});

sr.reveal(".popular__container", {
  duration: 1000,
  distance: "60px",
});

sr.reveal(".features__img", {
  duration: 1000,
  distance: "60px",
});

sr.reveal(".features__map", {
  duration: 1000,
  distance: "60px",
  delay: 500,
  origin: 'bottom'

});

sr.reveal(".features__card", {
  duration: 1000,
  distance: "60px",
  interval: 300
});


sr.reveal(".featured__filters", {
  duration: 1000,
  distance: "60px",
});

sr.reveal(".featured__card", {
  duration: 1000,
  distance: "60px",
  interval: 100
});

sr.reveal(".offer__data", {
  duration: 1000,
  distance: "60px",
  delay: 700,
  origin: 'left'
});

sr.reveal(".offer__img", {
  duration: 1000,
  distance: "60px",
  delay: 700,
  origin: 'right'
});

sr.reveal(".logos__content", {
  duration: 1000,
  distance: "60px",
  interval: 100
});

sr.reveal(".footer__content", {
  duration: 1000,
  distance: "60px",
  interval: 100
});


sr.reveal(".footer__copy", {
  duration: 1000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});

sr.reveal(".home__button", {
  duration: 1000,
  distance: "60px",
  delay: 700,
  origin: 'bottom'
});