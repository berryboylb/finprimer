const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const title = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        title.classList.toggle('none');
        navLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navlinkFade 0.5s ease forwards  ${index /5 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');

    });

}

navSlide();