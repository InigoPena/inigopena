// Traducciones para el sitio web
const translations = {
    es: {
        // Header y navegación
        "nav.about": "Sobre mí",
        "nav.projects": "Proyectos",
        "nav.education": "Formación",
        "nav.experience": "Experiencia",
        "nav.home": "Inicio",
        
        // Página principal
        "about.title": "Sobre mí",
        "about.description1": "Soy <strong>Iñigo Peña de las Heras</strong>, desarrollador especializado en <strong>Inteligencia Artificial</strong> y <strong>Machine Learning</strong>. Me apasiona aprovechar la potencia de los modelos de aprendizaje automático para analizar grandes volúmenes de información, detectar <i>patrones ocultos</i> y generar <em>insights</em> que apoyen la toma de decisiones.",
        "about.description2": "A lo largo de mi trayectoria <em>académica y profesional</em> he trabajado en proyectos que combinan modelos predictivos, series temporales y análisis cuantitativo. Me apasiona traducir datos complejos en soluciones prácticas y eficientes, ya sea desarrollando algoritmos personalizados o construyendo <i>sistemas de análisis automatizados</i>.",
        "about.description3": "<b>Mi objetivo</b> es seguir creciendo como profesional en el ámbito de la <em>inteligencia artificial aplicada</em>, contribuyendo con soluciones eficientes y orientadas al impacto.",
        "about.more": "Mas sobre mí",
        "about.career": "Trayectoria Profesional",
        
        // Página de currículum
        "curriculum.title": "Mi Trayectoria Profesional",
        "curriculum.subtitle": "Una visión completa de mi formación y experiencia",
        "curriculum.education.title": "Formación Académica",
        "curriculum.education.university": "Universidad de Deusto",
        "curriculum.education.degree": "Doble Grado en Ingeniería Informática + Ciencia de Datos e IA",
        "curriculum.education.description": "Actualmente estoy realizando una formación académica en la <strong>Universidad de Deusto</strong>, donde estudio el Doble Grado en <em><strong>Ingeniería Informática</strong></em> y <em><strong>Ciencia de Datos e Inteligencia Artificial</strong></em>. Durante estos años he adquirido una sólida base en programación, análisis de datos, machine learning e inteligencia artificial, abordando técnicas de machine learning, deep learning y análisis avanzado de datos.",
        "curriculum.education.period": "Inicié mis estudios en septiembre de 2022, con finalización prevista en junio de 2027.",
        
        // Proyectos
        "curriculum.projects.title": "Proyectos Destacados",
        "curriculum.projects.intro": "Selección de proyectos que demuestran mi capacidad para aplicar <strong>Inteligencia Artificial</strong> y <strong>Machine Learning</strong>.",
        "curriculum.projects.banking.title": "📈 Abandono Bancario",
        "curriculum.projects.banking.description": "Predicción de la probabilidad de abandono de clientes en el sector bancario",
        "curriculum.projects.anomaly.title": "🔍 Detección de Anomalías",
        "curriculum.projects.anomaly.description": "Modelos Deep Learning para identificar patrones irregulares series temporales de precios de stock",
        "curriculum.projects.all.title": "⚡ Todos mis proyectos",
        "curriculum.projects.all.description": "En mi perfil de github puedes encontrar todos mis proyectos",
        "curriculum.projects.quote": "En esta sección encontrarás algunos de los proyectos que he desarrollado durante mis años en la universidad. Cada uno refleja mi aprendizaje y la aplicación práctica de la Inteligencia Artificial, el Machine Learning y la programación en distintos contextos.",
        
        // Experiencia
        "curriculum.experience.title": "Experiencia Profesional",
        "curriculum.experience.company": "LKS Next - GobTech",
        "curriculum.experience.position": "Estudiante en prácticas – Proyecto de IA generativa",
        "curriculum.experience.description1": "Durante el verano realicé una <em><strong>estancia de dos meses</strong></em> en la empresa <strong>LKS Next</strong>, en el departamento <strong>GobTech</strong>. En ese tiempo pude colaborar en proyectos reales, adquiriendo experiencia práctica en el desarrollo de soluciones tecnológicas. Esta oportunidad me permitió aplicar mis conocimientos y seguir creciendo en un entorno profesional.",
        "curriculum.experience.description2": "Allí me involucré en el desarrollo desde cero de un <b>agente RAG</b> integrado con el <b>protocolo MCP</b>, capaz de combinar recuperación de información y generación automática. Este proyecto me permitió profundizar en arquitecturas modernas de agentes de IA y en la conexión con herramientas externas.",
        "curriculum.experience.technologies": "<b>Tecnologías:</b> Python · LangChain · LangGraph · LLMs (OpenAI) · FastMCP · Base de datos vectorial · Memoria conversacional",
        
        // Footer
        "footer.description": "Desarrollador en <em>IA, Machine Learning y Finanzas</em>",
        
        // Common
        "alt.profile": "Foto de Iñigo Peña"
    },
    en: {
        // Header y navegación
        "nav.about": "About me",
        "nav.projects": "Projects",
        "nav.education": "Education",
        "nav.experience": "Experience",
        "nav.home": "Home",
        
        // Página principal
        "about.title": "About me",
        "about.description1": "I am <strong>Iñigo Peña de las Heras</strong>, a developer specialized in <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>. I am passionate about harnessing the power of machine learning models to analyze large volumes of information, detect <i>hidden patterns</i> and generate <em>insights</em> that support decision making.",
        "about.description2": "Throughout my <em>academic and professional</em> career I have worked on projects that combine predictive models, time series and quantitative analysis. I am passionate about translating complex data into practical and efficient solutions, whether developing custom algorithms or building <i>automated analysis systems</i>.",
        "about.description3": "<b>My goal</b> is to continue growing as a professional in the field of <em>applied artificial intelligence</em>, contributing efficient and impact-oriented solutions.",
        "about.more": "More about me",
        "about.career": "Professional Career",
        
        // Página de currículum
        "curriculum.title": "My Professional Career",
        "curriculum.subtitle": "A comprehensive view of my education and experience",
        "curriculum.education.title": "Academic Education",
        "curriculum.education.university": "University of Deusto",
        "curriculum.education.degree": "Double Degree in Computer Engineering + Data Science and AI",
        "curriculum.education.description": "I am currently pursuing academic training at the <strong>University of Deusto</strong>, where I study a Double Degree in <em><strong>Computer Engineering</strong></em> and <em><strong>Data Science and Artificial Intelligence</strong></em>. During these years I have acquired a solid foundation in programming, data analysis, machine learning and artificial intelligence, addressing machine learning, deep learning and advanced data analysis techniques.",
        "curriculum.education.period": "I started my studies in September 2022, with expected completion in June 2027.",
        
        // Proyectos
        "curriculum.projects.title": "Featured Projects",
        "curriculum.projects.intro": "Selection of projects that demonstrate my ability to apply <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>.",
        "curriculum.projects.banking.title": "📈 Bank Churn",
        "curriculum.projects.banking.description": "Prediction of customer churn probability in the banking sector",
        "curriculum.projects.anomaly.title": "🔍 Anomaly Detection",
        "curriculum.projects.anomaly.description": "Deep Learning models to identify irregular patterns in stock price time series",
        "curriculum.projects.all.title": "⚡ All my projects",
        "curriculum.projects.all.description": "On my GitHub profile you can find all my projects",
        "curriculum.projects.quote": "In this section you will find some of the projects I have developed during my university years. Each one reflects my learning and practical application of Artificial Intelligence, Machine Learning and programming in different contexts.",
        
        // Experiencia
        "curriculum.experience.title": "Professional Experience",
        "curriculum.experience.company": "LKS Next - GobTech",
        "curriculum.experience.position": "Intern - Generative AI Project",
        "curriculum.experience.description1": "During the summer I completed a <em><strong>two-month internship</strong></em> at <strong>LKS Next</strong> company, in the <strong>GobTech</strong> department. During this time I was able to collaborate on real projects, gaining practical experience in developing technological solutions. This opportunity allowed me to apply my knowledge and continue growing in a professional environment.",
        "curriculum.experience.description2": "There I was involved in developing from scratch a <b>RAG agent</b> integrated with the <b>MCP protocol</b>, capable of combining information retrieval and automatic generation. This project allowed me to delve deeper into modern AI agent architectures and connection with external tools.",
        "curriculum.experience.technologies": "<b>Technologies:</b> Python · LangChain · LangGraph · LLMs (OpenAI) · FastMCP · Vector database · Conversational memory",
        
        // Footer
        "footer.description": "Developer in <em>AI, Machine Learning and Finance</em>",
        
        // Common
        "alt.profile": "Photo of Iñigo Peña"
    }
};

// Idioma actual (por defecto español)
let currentLanguage = localStorage.getItem('language') || 'es';

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updateLanguageButtons();
}

// Función para actualizar el contenido de la página
function updatePageContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLanguage][key];
        if (translation) {
            element.innerHTML = translation;
        }
    });
    
    // Actualizar atributos alt, title, etc.
    const altElements = document.querySelectorAll('[data-i18n-alt]');
    altElements.forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        const translation = translations[currentLanguage][key];
        if (translation) {
            element.setAttribute('alt', translation);
        }
    });
}

// Función para actualizar el estado visual de los botones de idioma
function updateLanguageButtons() {
    const buttons = document.querySelectorAll('.language-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    updatePageContent();
    updateLanguageButtons();
});