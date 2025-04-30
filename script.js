///scroll-smooth-com

document.addEventListener('scroll', (event) => {
    var a = window.scrollY
    if (a > 80) {
        document.getElementById('header-navbar-static').classList.add('active')
        document.getElementById('header-navbar-static').classList.remove('disable')
    }
    if (a < 80) {
        document.getElementById('header-navbar-static').classList.remove('active')
        document.getElementById('header-navbar-static').classList.add('disable')
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



function handleProjectsCardsAnimations(isDesktop) {
    const cards = document.querySelectorAll('.section-Projects-card');


    if (isDesktop) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
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
                if (innerElement) {
                    innerElement.style.transform = `
                        translateZ(100px)
                        scale(${1 + Math.abs(deltaX) * 0.3}, ${1 + Math.abs(deltaY) * 0.3})
                    `;
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateY(0deg) rotateX(0deg)';
                const innerElement = card.querySelector('.inner-element');
                if (innerElement) {
                    innerElement.style.transform = 'translateZ(30px) scale(1, 1)';
                }
            });
        });
    }
}

function handleBlogCardsAnimations(isDesktop) {
    const blogCards = document.querySelectorAll('.section-blog-card');

    blogCards.forEach(card => {
        const imgBox = card.querySelector('.section-blog-card-img-box');
        const img = card.querySelector('.section-blog-card-img');

        if (imgBox && img) {
            imgBox.replaceWith(imgBox.cloneNode(true));
            img.replaceWith(img.cloneNode(true));
        }
    });

    if (isDesktop) {
        blogCards.forEach(card => {
            const imgBox = card.querySelector('.section-blog-card-img-box');
            const img = card.querySelector('.section-blog-card-img');

            if (imgBox && img) {
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
            }
        });
    }
}


function checkScreenSize() {
    const mediaQuery = window.matchMedia('(min-width: 992px)');

    handleProjectsCardsAnimations(mediaQuery.matches);
    handleBlogCardsAnimations(mediaQuery.matches);

    mediaQuery.addListener((e) => {
        handleProjectsCardsAnimations(e.matches);
        handleBlogCardsAnimations(e.matches);
    });
}

document.addEventListener('DOMContentLoaded', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

// scroll animation


document.querySelectorAll('.header-navbar-static-ul a').forEach(anchor => {
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

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }


            requestAnimationFrame(animation);
        }
    });
});
// scroll animation
document.querySelectorAll('.header-navbar-mobile-li a').forEach(anchor => {
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

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }


            requestAnimationFrame(animation);
        }
    });
});
// scroll animation
document.querySelectorAll('.header-navbar-box-bottom-li a').forEach(anchor => {
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

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }


            requestAnimationFrame(animation);
        }
    });
});




// ///////
document.getElementById('header-humberger').addEventListener('click', event => {
    let cls = document.getElementById('header-navbar-mobile')
    if (cls.className.includes('header-navbar-mobile-active')) {
        document.getElementById('header-navbar-mobile').classList.remove('header-navbar-mobile-active')
    }
    else {
        document.getElementById('header-navbar-mobile').classList.add('header-navbar-mobile-active')
    }
    window.addEventListener('scroll', event => {
        if (cls.className.includes('header-navbar-mobile-active')) {
            document.getElementById('header-navbar-mobile').classList.remove('header-navbar-mobile-active')
        }
    })

})

