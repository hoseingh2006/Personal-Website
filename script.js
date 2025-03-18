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