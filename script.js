document.addEventListener('DOMContentLoaded', function() {

    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="container">
            <h1>Harendra Pratap Singh Sisodia</h1>
            <p>Dynamic Full-Stack Java Engineer</p>
            <nav>
                <ul class="nav justify-content-center">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="skills.html">Skills</a></li>
                    <li class="nav-item"><a class="nav-link" href="experience.html">Experience</a></li>
                    <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;

    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="container">
            <p>&copy; ${new Date().getFullYear()} Harendra Pratap Singh Sisodia</p>
        </div>
    `;

    const path = window.location.pathname;
    const page = path.split('/').pop();

    switch (page) {
        case 'index.html':
            loadHomePageContent();
            break;
        case 'about.html':
            loadAboutPageContent();
            break;
        case 'skills.html':
            loadSkillsPageContent();
            break;
        case 'experience.html':
            loadExperiencePageContent();
            break;
        case 'projects.html':
            loadProjectsPageContent();
            break;
        case 'contact.html':
            loadContactPageContent();
            break;
        default:
            loadHomePageContent();
            break;
    }
});

function loadHomePageContent() {
    const homeSection = document.getElementById('home');
    homeSection.innerHTML = `
        <div class="container">
            <h2>Welcome to My Portfolio</h2>
            <p>I am a dynamic full-stack Java engineer passionate about creating robust and scalable applications.</p>
        </div>
    `;
}

function loadAboutPageContent() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <div class="container">
            <h2>About Me</h2>
            <p>I am a passionate full-stack Java engineer with experience in building scalable web applications. My journey in software development has equipped me with skills in Java, Spring Boot, React, and more.</p>
        </div>
    `;
}

function loadSkillsPageContent() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <div class="container">
            <h2>Skills</h2>
            <div class="skill-set">
                <div class="skill">
                    <h3>Front-End Technologies</h3>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" class="btn btn-primary">HTML</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" class="btn btn-primary">CSS</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="btn btn-primary">JavaScript</a>
                    <a href="https://reactjs.org/docs/getting-started.html" target="_blank" class="btn btn-primary">React</a>
                </div>
                <div class="skill">
                    <h3>Back-End Technologies</h3>
                    <a href="https://docs.oracle.com/en/java/" target="_blank" class="btn btn-primary">Java</a>
                    <a href="https://spring.io/projects/spring-boot" target="_blank" class="btn btn-primary">Spring Boot</a>
                    <a href="https://hibernate.org/orm/documentation/" target="_blank" class="btn btn-primary">Hibernate</a>
                    <a href="https://restfulapi.net/" target="_blank" class="btn btn-primary">RESTful API</a>
                    <a href="https://www.python.org/doc/" target="_blank" class="btn btn-primary">Python</a>
                    <a href="https://guides.rubyonrails.org/" target="_blank" class="btn btn-primary">Ruby on Rails</a>
                </div>
                <div class="skill">
                    <h3>Databases</h3>
                    <a href="https://dev.mysql.com/doc/" target="_blank" class="btn btn-primary">MySQL</a>
                    <a href="https://www.postgresql.org/docs/" target="_blank" class="btn btn-primary">PostgreSQL</a>
                    <a href="https://www.w3schools.com/sql/" target="_blank" class="btn btn-primary">SQL</a>
                    <a href="https://www.mongodb.com/" target="_blank" class="btn btn-primary">MongoDB</a>
                </div>
                <div class="skill">
                    <h3>Frameworks & Tools</h3>
                    <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html" target="_blank" class="btn btn-primary">Spring Framework</a>
                    <a href="https://git-scm.com/doc" target="_blank" class="btn btn-primary">Git</a>
                    <a href="https://maven.apache.org/guides/" target="_blank" class="btn btn-primary">Maven</a>
                    <a href="https://docs.docker.com/" target="_blank" class="btn btn-primary">Docker</a>
                    <a href="https://kubernetes.io/docs/" target="_blank" class="btn btn-primary">Kubernetes</a>
                    <a href="https://learning.postman.com/docs/getting-started/introduction/" target="_blank" class="btn btn-primary">Postman</a>
                </div>
            </div>
        </div>
    `;
}

function loadExperiencePageContent() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <div class="container">
            <h2>Experience</h2>
            <div class="experience">
                <h3>Associate Software Developer at Shriffle Technologies Pvt. Ltd.</h3>
                <p>July 2023 – April 2024</p>
                <ul>
                    <li>Developed and maintained web applications using Ruby on Rails framework.</li>
                    <li>Designed and implemented database schemas using MySQL and PostgreSQL.</li>
                    <li>Integrated third-party APIs to enhance application functionality.</li>
                    <li>Conducted testing and debugging using tools like Postman.</li>
                    <li>Collaborated with cross-functional teams to deliver projects within deadlines.</li>
                    <li>Engaged in continuous research and development to explore new technologies.</li>
                </ul>
            </div>
            <div class="experience">
                <h3>Java Developer at Digichum InfoTech</h3>
                <p>January 2023 – May 2023</p>
                <ul>
                    <li>Developed robust backend services and APIs using Spring Boot framework.</li>
                    <li>Built RESTful APIs for frontend-backend communication.</li>
                    <li>Implemented business logic and data processing algorithms using Java and Spring.</li>
                    <li>Collaborated with UI/UX designers for smooth integration.</li>
                    <li>Participated in code reviews, bug fixing, and troubleshooting processes.</li>
                    <li>Stayed updated with advancements in Spring Boot and related technologies.</li>
                </ul>
            </div>
        </div>
    `;
}


function loadProjectsPageContent() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <div class="container">
            <h2>Projects</h2>
            <div class="project">
                <h3>Max_Chatbot_App</h3>
                <p>Contributed to the development of "Max_Chatbot_App," a dynamic healthcare application tailored for hospital use.</p>
                <ul>
                    <li>Schema development and backend model refinement.</li>
                    <li>API integration and feature implementation.</li>
                    <li>Collaboration with cross-functional teams including AI developers and engineers.</li>
                    <li>Technologies utilized: Ruby on Rails (RoR), PostgreSQL, JavaScript.</li>
                </ul>
            </div>
            <div class="project">
                <h3>KPI_gamification</h3>
                <p>Contributed to the development of "KPI_gamification," an internal application aimed at enhancing employee performance and engagement.</p>
                <ul>
                    <li>Schema development and backend model refinement.</li>
                    <li>API integration and feature implementation.</li>
                    <li>Active participation in cross-functional meetings to align with project objectives.</li>
                    <li>Technologies utilized: Ruby on Rails (RoR), PostgreSQL, JavaScript.</li>
                </ul>
            </div>
            <div class="project">
                <h3>Quizyfy</h3>
                <p>Developed a quiz system with ratings and scores.</p>
                <ul>
                    <li>Technologies utilized: Java, Spring Boot, MySQL, Thymeleaf, HTML5, CSS3, JavaScript, STS, IntelliJ IDEA.</li>
                </ul>
            </div>
            <div class="project">
                <h3>Student Internship Management System</h3>
                <p>Managed student internship details and assignments.</p>
                <ul>
                    <li>Technologies utilized: Java, Spring Boot, Thymeleaf, HTML5, CSS3, Bootstrap 4, Postman, IntelliJ IDEA, Spring Initializer.</li>
                </ul>
            </div>
            <div class="project">
                <h3>Online Book Rental System (OBRS)</h3>
                <p>Facilitated buying/selling books with delivery services and recommendations.</p>
                <ul>
                    <li>Technologies utilized: HTML5, CSS3, React JS, Node JS, Python, Python libraries and Data Analysis.</li>
                </ul>
            </div>
        </div>
    `;
}

function loadContactPageContent() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <div class="container">
            <h2>Contact Me</h2>
            <div class="contact-details">
                <p><strong>Email:</strong> hpssisodia15@gmail.com</p>
            </div>
        </div>
    `;
}

