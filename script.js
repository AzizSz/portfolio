window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md')
        nav.classList.remove('shadow-sm')
    }else {
        nav.classList.remove('shadow-md')
        nav.classList.add('shadow-sm')
    }
})