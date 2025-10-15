// ===== Animação de rolagem =====
const elementos = document.querySelectorAll('[data-animar]');
const animaScroll = () => {
  const topo = window.pageYOffset + window.innerHeight * 0.85;
  elementos.forEach(el => {
    if (topo > el.offsetTop) el.classList.add('ativo');
  });
};
window.addEventListener('scroll', animaScroll);
animaScroll();

// ===== Tradução automática =====
const translations = {
  "pt-BR": {
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
    "contact.button": "Enviar"
  },
  "en": {
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
    "contact.button": "Send"
  },
  "es": {
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
    "contact.button": "Enviar"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.getElementById("lang-select").value = lang;
  localStorage.setItem("lang", lang);
}

const browserLang = navigator.language.startsWith("pt") ? "pt-BR" :
                    navigator.language.startsWith("es") ? "es" : "en";

const savedLang = localStorage.getItem("lang") || browserLang;
setLanguage(savedLang);

document.getElementById("lang-select").addEventListener("change", e => {
  setLanguage(e.target.value);
});
