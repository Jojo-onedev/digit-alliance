let menuicon = document.querySelector(".menu-burger");
console.log(menuicon)
let navbar = document.querySelector("nav");
console.log(navbar)

menuicon.addEventListener("click",() => {
    navbar.classList.toggle("active");
})

let navlink = document.querySelectorAll("nav .nav-bars a").forEach(n => n.addEventListner("click", ()=>{
    navbar.classList.remove("active");
}));

let myheader = document.querySelector("header");


window.addEventListener("scroll", ()=>{
    myheader.classList.toggle('sticky', window.scrollY > 100);
    navbar.classList.remove('active')
})

const scrolling = ScrollReveal({
    distance:'100px',
    duration:950,
    delay:400,
    reset:true 
});

scrolling.reveal('.box1',{delay:150});
scrolling.reveal('.box2',{delay:350});
scrolling.reveal('.box3',{delay:550});
scrolling.reveal('.box4',{delay:750});
scrolling.reveal('.box5',{delay:950});
scrolling.reveal('.box6',{delay:1050});

scrolling.reveal('.service',{delay:450, origin:'top'});
scrolling.reveal('.propos',{delay:700, origin:'left'});
scrolling.reveal('.propos h2',{delay:700, origin:'top'});
scrolling.reveal('.propos-img',{delay:700, origin:'right'});
scrolling.reveal('.propos-texte',{delay:500, origin:'bottom'});
