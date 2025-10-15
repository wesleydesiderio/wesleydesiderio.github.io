// ===== Traduções (PT-BR / EN / ES) =====
const translations = {
  "pt-BR": {
    "brand": "Wesley Desiderio",
    "menu.home": "Home",
    "menu.portfolio": "Portfólio",
    "menu.services": "Serviços",
    "menu.contact": "Contato",
    "home.title": "Bem-vindo",
    "home.text": "Sou músico e guitarrista com anos de experiência atuando como session player, colaborando com artistas e projetos diversos. Busco transmitir emoção e qualidade sonora em cada nota, explorando timbres e técnicas que refletem autenticidade e expressão musical.",
    "portfolio.title": "Portfólio",
    "portfolio.text": "Confira alguns vídeos com performances e timbres que representam meu estilo e abordagem musical.",
    "services.title": "Serviços",
    "services.text": "Atuo como músico de estúdio e colaborador em projetos musicais de diferentes estilos. Alguns dos serviços oferecidos:",
    "services.1": "Gravação de guitarras e violões para produções musicais",
    "services.2": "Criação de arranjos e consultoria harmônica",
    "services.3": "Trilhas sonoras e ambientações musicais",
    "services.4": "Participações em sessões remotas",
    "contact.title": "Contato",
    "contact.text": "Entre em contato para colaborações, projetos ou dúvidas. Será um prazer conversar.",
    "contact.placeholder.name": "Seu nome",
    "contact.placeholder.email": "Seu e-mail",
    "contact.placeholder.message": "Escreva sua mensagem",
    "contact.button": "Enviar",
    "footer.copy": "© 2025 Wesley Desiderio — Todos os direitos reservados."
  },
  "en": {
    "brand": "Wesley Desiderio",
    "menu.home": "Home",
    "menu.portfolio": "Portfolio",
    "menu.services": "Services",
    "menu.contact": "Contact",
    "home.title": "Welcome",
    "home.text": "I'm a guitarist and session musician with years of experience collaborating with artists and musical projects. I aim to bring emotion and sonic quality to every note, exploring tones and techniques that reflect authenticity and musical expression.",
    "portfolio.title": "Portfolio",
    "portfolio.text": "Check out some videos showcasing my tone and musical approach.",
    "services.title": "Services",
    "services.text": "I work as a studio musician and collaborator in projects of different styles. Some of the services offered:",
    "services.1": "Guitar and acoustic guitar recording for music productions",
    "services.2": "Arrangement creation and harmonic consulting",
    "services.3": "Soundtracks and musical environments",
    "services.4": "Remote session participation",
    "contact.title": "Contact",
    "contact.text": "Get in touch for collaborations, projects or questions. It'll be a pleasure to talk.",
    "contact.placeholder.name": "Your name",
    "contact.placeholder.email": "Your e-mail",
    "contact.placeholder.message": "Write your message",
    "contact.button": "Send",
    "footer.copy": "© 2025 Wesley Desiderio — All rights reserved."
  },
  "es": {
    "brand": "Wesley Desiderio",
    "menu.home": "Inicio",
    "menu.portfolio": "Portafolio",
    "menu.services": "Servicios",
    "menu.contact": "Contacto",
    "home.title": "Bienvenido",
    "home.text": "Soy guitarrista y músico de sesión con años de experiencia colaborando con artistas y proyectos musicales. Busco transmitir emoción y calidad sonora en cada nota, explorando timbres y técnicas que reflejan autenticidad y expresión musical.",
    "portfolio.title": "Portafolio",
    "portfolio.text": "Mira algunos videos que representan mi estilo y enfoque musical.",
    "services.title": "Servicios",
    "services.text": "Trabajo como músico de estudio y colaborador en proyectos de diferentes estilos. Algunos de los servicios ofrecidos:",
    "services.1": "Grabación de guitarras y violas para producciones musicales",
    "services.2": "Creación de arreglos y consultoría armónica",
    "services.3": "Bandas sonoras y ambientaciones musicales",
    "services.4": "Participación en sesiones remotas",
    "contact.title": "Contacto",
    "contact.text": "Ponte en contacto para colaboraciones, proyectos o dudas. Será un placer conversar.",
    "contact.placeholder.name": "Tu nombre",
    "contact.placeholder.email": "Tu correo",
    "contact.placeholder.message": "Escribe tu mensaje",
    "contact.button": "Enviar",
    "footer.copy": "© 2025 Wesley Desiderio — Todos los derechos reservados."
  }
};

// ===== Helper: aplica idioma às tags data-i18n e placeholders =====
function setLanguage(lang) {
  // Atualiza atributo lang do html
  document.documentElement.lang = lang;

  // elementos com data-i18n (texto)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = translations[lang] && translations[lang][key] ? translations[lang][key] : '';
    // mantemos HTML básico se necessário (mas aqui usamos textContent)
    el.textContent = txt;
  });

  // elementos com data-i18n-placeholder (placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const txt = translations[lang] && translations[lang][key] ? translations[lang][key] : '';
    el.placeholder = txt;
  });

  // botão de submit que pode ter data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {}); // já coberto

  // atualiza select
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = lang;

  // salva escolha
  localStorage.setItem('lang', lang);
}

// ===== Detecta idioma do navegador (mapeia pt->pt-BR, es->es, resto->en) =====
function detectBrowserLang() {
  const nav = navigator.language || navigator.userLanguage || 'en';
  if (nav.startsWith('pt')) return 'pt-BR';
  if (nav.startsWith('es')) return 'es';
  return 'en';
}

// ===== Inicialização do idioma =====
const savedLang = localStorage.getItem('lang');
const initialLang = savedLang || detectBrowserLang();
setLanguage(initialLang);

// listener de alteração manual
document.getElementById('lang-select').addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// ===== Scroll suave com compensação do header fixo e destaque de link ativo =====
const headerEl = document.querySelector('header');
const headerHeight = () => headerEl.offsetHeight || (window.innerHeight * 0.10);

document.querySelectorAll('.header-center a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight() + 1;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ===== IntersectionObserver para destacar link ativo =====
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.header-center a');

const ioOptions = {
  root: null,
  rootMargin: `-${Math.round(headerHeight())}px 0px -40% 0px`, // compensa header e ativa quando a seção está visível
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const link = document.querySelector(`.header-center a[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      if (link) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    } else {
      if (link) {
        link.removeAttribute('aria-current');
      }
    }
  });
}, ioOptions);

sections.forEach(s => observer.observe(s));

// ===== Animacoes ao rolar (data-animar) =====
const animTargets = document.querySelectorAll('[data-animar]');
function animaScroll() {
  const trigger = window.pageYOffset + (window.innerHeight * 0.85);
  animTargets.forEach(el => {
    if (trigger > el.offsetTop) el.classList.add('ativo');
  });
}
window.addEventListener('scroll', animaScroll);
window.addEventListener('resize', () => {
  // reconfigura observer rootMargin quando o header muda de tamanho
  observer.disconnect();
  const newOptions = {
    root: null,
    rootMargin: `-${Math.round(headerHeight())}px 0px -40% 0px`,
    threshold: 0
  };
  const newObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.header-center a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (link) { link.classList.add('active'); link.setAttribute('aria-current','page'); }
      } else {
        if (link) link.removeAttribute('aria-current');
      }
    });
  }, newOptions);
  sections.forEach(s => newObserver.observe(s));
});
animaScroll();

// ===== Form: mensagem simples (pode manter formsubmit) =====
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    // não bloqueamos envio real (formsubmit) — apenas feedback rápido
    // se preferir testar sem enviar, descomente e use alert
    // e.preventDefault();
    // alert(translations[localStorage.getItem('lang') || initialLang]['contact.formsent'] || 'Mensagem enviada!');
  });
}
