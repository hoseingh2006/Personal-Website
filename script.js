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
contents.forEach((content) => {
    observer.observe(content);
});


// ////////////////////////////////////


let cards = document.querySelectorAll('.section-Projects-card')

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        // موقعیت موس نسبت به مرکز کارت
        const rect = card.getBoundingClientRect();
        console.log('rect.left:', rect.left)
        console.log('rect.width:', rect.width)
        console.log('rect.top:', rect.top)
        console.log('rect.height:', rect.height)
        console.log(' mouseX:', e.clientX)
        console.log(' mouseY:', e.clientY)

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
        card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
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
        img.style.transform = 'translateX(15px)';
        img.style.filter = 'brightness(1)';
    });
});




document.querySelectorAll('.navbar-static-ul a, .header-nav-ul a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 500;
            let startTime = null;

            // تابع انیمیشن
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // تابع easing برای حرکت نرم
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            // شروع انیمیشن
            requestAnimationFrame(animation);
        }
    });
});