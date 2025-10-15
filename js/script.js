const elementos = document.querySelectorAll('[data-animar]');
const animaScroll = () => {
    const topo = window.pageYOffset + window.innerHeight * 0.85;
    elementos.forEach(el => {
        if (topo > el.offsetTop) el.classList.add('ativo');
      });
    };
window.addEventListener('scroll', animaScroll);
animaScroll();