function changeLanguage(language) {
    const translations = {
        'es': {
            'Manuel Fernández': 'Manuel Fernández',
            'portfolio': 'Portafolio',
            'fullStackDeveloper': 'Desarrollador Full Stack',
            'works': 'Trabajos',
            'worksDescription': 'En esta sección puedes echar un vistazo a algunos proyectos web en los que he estado trabajando, puedes encontrar más en mi GitHub 😁',
            'skills': 'Tecnologías',
            'aboutMe': 'Sobre mí',
            'greeting': '¡Hola!👋 Soy un apasionado desarrollador Full Stack, 🚀 enfocado en unir diseño atractivo con funcionalidad sólida para crear experiencias digitales de calidad.',
            'workedOn': 'He trabajado en diversos proyectos web, 🛠️ tanto independientes como en equipos multidisciplinarios, lo que ha fortalecido mis habilidades técnicas y creativas.',
            'itKnowledge': 'Con conocimientos sólidos en el mundo IT 🌐 y un profundo interés en ciberseguridad 🔒, busco constantemente mantenerme actualizado con las últimas tendencias tecnológicas. 👩‍💻',
            'cifradoCesar': 'Cifrado César',
            'appTiempo': 'App del Tiempo',
            'spaceInvaders': 'Space Invaders',
            'teslaLanding': 'Tesla Landing',
        },
        'en': {
            'Manuel Fernández': 'Manuel Fernández',
            'portfolio': 'Portfolio',
            'fullStackDeveloper': 'Full Stack Developer',
            'works': 'Works',
            'worksDescription': 'In this section, you can take a look at some web projects i\'ve been working on. You can find more on my GitHub 😁',
            'skills': 'Skills',
            'aboutMe': 'About Me',
            'greeting': 'Hello!👋 I am a passionate Full Stack developer, 🚀 focused on combining attractive design with solid functionality to create quality digital experiences.',
            'workedOn': 'I have worked on various web projects, 🛠️ both independently and in multidisciplinary teams, strengthening my technical and creative skills.',
            'itKnowledge': 'With solid knowledge in the IT world 🌐 and a deep interest in cybersecurity 🔒, I constantly seek to stay updated with the latest technological trends. 👩‍💻',
            'cifradoCesar': 'Caesar Cipher',
            'appTiempo': 'Weather App',
            'spaceInvaders': 'Space Invaders',
            'teslaLanding': 'Tesla Landing',
        }
    };

    document.title = translations[language]['portfolio'];

    // Enfoque 2: Seleccionar por etiqueta y luego por clase
    document.getElementsByTagName('h3')[0].textContent = translations[language]['fullStackDeveloper'];
    document.getElementsByTagName('h2')[1].textContent = translations[language]['works'];
    document.getElementsByTagName('p')[0].textContent = translations[language]['worksDescription'];
    document.getElementsByTagName('h2')[2].textContent = translations[language]['skills'];
    document.getElementsByTagName('h2')[3].textContent = translations[language]['aboutMe'];
    document.getElementsByTagName('p')[1].textContent = translations[language]['greeting'];
    document.getElementsByTagName('p')[2].textContent = translations[language]['workedOn'];
    document.getElementsByTagName('p')[3].textContent = translations[language]['itKnowledge'];
// Cambiar el contenido del primer elemento <h4> dentro del primer artículo
document.querySelector('.article:nth-child(1) .h4').textContent = translations[language]['cifradoCesar'];

// Cambiar el contenido del primer elemento <h4> dentro del segundo artículo
document.querySelector('.article:nth-child(2) .h4').textContent = translations[language]['appTiempo'];

// Cambiar el contenido del primer elemento <h4> dentro del tercer artículo
document.querySelector('.article:nth-child(3) .h4').textContent = translations[language]['spaceInvaders'];

// Cambiar el contenido del primer elemento <h4> dentro del cuarto artículo
document.querySelector('.article:nth-child(4) .h4').textContent = translations[language]['teslaLanding'];



    localStorage.setItem('language', language);
}

const savedLanguage = localStorage.getItem('language') || 'es';
changeLanguage(savedLanguage);
