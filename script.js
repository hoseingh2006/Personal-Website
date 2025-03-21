document.addEventListener('scroll', (event) => {
    var a = window.scrollY
    if (a > 80) {
        document.getElementById('navbar-static').classList.add('active')
        document.getElementById('navbar-static').classList.remove('disable')
    }
    if (a < 80) {
        document.getElementById('navbar-static').classList.remove('active')
        document.getElementById('navbar-static').classList.add('disable')
    }
})
const contents = document.querySelectorAll('.animation-fade');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('true');
        } else {
            entry.target.classList.remove('true');
        }
    });
}, {
    threshold: 0
});

// مشاهده هر عنصر
contents.forEach((content) => {
    observer.observe(content);
});


// ////////////////////////////////////


let cards = document.querySelectorAll('.section-Projects-card')

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        // موقعیت موس نسبت به مرکز کارت
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;


        const deltaX = (mouseX - centerX) / (rect.width / 2);
        const deltaY = (mouseY - centerY) / (rect.height / 2);


        card.style.transform = `
            rotateY(${deltaX * 15}deg)
            rotateX(${-deltaY * 15}deg)
        `;

        const innerElement = card.querySelector('.inner-element');
        innerElement.style.transform = `
            translateZ(100px) 
            scale(${1 + Math.abs(deltaX) * 0.3}, ${1 + Math.abs(deltaY) * 0.3})
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        const innerElement = card.querySelector('.inner-element');
        innerElement.style.transform = 'translateZ(30px) scale(1, 1)';
    });
});


///////////////////

const blogCards = document.querySelectorAll('.section-blog-card');


blogCards.forEach(card => {
    const imgBox = card.querySelector('.section-blog-card-box-img');
    const img = card.querySelector('.section-blog-card-img');

    imgBox.addEventListener('mousemove', (e) => {

        const rect = imgBox.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const mouseX = e.clientX;

        const deltaX = (mouseX - centerX) / (rect.width / 2);
        img.style.transform = `
        translateX(15px)
            translateX(${deltaX * 15}px)
        `;
        img.style.filter = 'brightness(0.5)';
    });

    imgBox.addEventListener('mouseleave', () => {
        img.style.transform = 'translateX(0)';
        img.style.filter = 'brightness(1)';
    });
});