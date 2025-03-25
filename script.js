// Controle do menu mobile
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click',()=> {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');

    // Bloquear o scroll quando o menu estiver aberto
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto';
});

// Fechar menu ao clicar nos links
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Fechar ao rolar a página
window.addEventListener('scroll', () => {
    if(navList.classList.contains('open')){
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

// Navagação ativa
const navLinks = document.querySelectorAll('.navlist a');

// Função para adicionar a classe 'active' no link clicado
function activeLink(){
    navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

// Adiciona um evento de clique no link de navegação
navLinks.forEach(item => item.addEventListener('click', activeLink)); 


// Alternar modo claro/escuro
// Função para alternar entre os temas
function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');


    // Salva o tema escolhido no "Armazenamento Local (LocalStorage)"
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Alterar aparência do título
    updateTextColor();
}

// Função que altera a cor do texto de acordo com o tema
function updateTextColor(){
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

// Carrega o tema salvo no LocalStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme){
    document.documentElement.classList.toggle('light' , savedTheme === 'light');
}


// Animação do título principal
// Seleciona o elemento 'título' e define as variáveis para animação
const titleElement = document.querySelector('#name');
const text = "STEFANY";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';

// Função para armazenar o texto (digitando e apagando)
function animateText(){
    if(isTyping){
        if(index < text.length){
            titleElement.textContent = text.slice(0, index + 1);
            index ++;
        } else {
            isTyping = false;
        }
    } else {
        if (index > 1){
            titleElement.textContent = text.slice(0, index -1);
            index --;
        } else {
            isTyping = true;
            // alterna a cor entre preto e laranja
            currentColor = currentColor === (document.documentElement.classList.contains('light') ? 'black' : '#fff') ? '#c94c16' : (document.documentElement.classList.contains('light') ? 'black' : '#fff');
            titleElement.style.color = currentColor;
        }
    }
    setTimeout(animateText, 300);
}

// Inicia a animação quando carregar a página
document.addEventListener('DOMContentLoaded', animateText);
updateTextColor();

// ANIMAÇÃO DA SEÇÃO HOME 
// Seleciona a seção home e aplica uma animação de fade-in
const homeSection = document.querySelector('#home');
homeSection.style.opacity = '0';
homeSection.style.transform = 'translateY(200px)';
homeSection.style.transition = 'opacity 1s ease, transform 1s ease';

setTimeout(() => {
  homeSection.style.opacity = '1';
  homeSection.style.transform = 'translateY(0)';
}, 100);

// ANIMAÇÃO DAS SEÇÕES
// Seleciona as animações e aplica fade-in ao atualizar
const sections = document.querySelectorAll ('section');

sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 1s, transform 1s';

    // Aplica diferente transformações de acordo com  o índice da seção
    if (index !== 0){
        if(index === 1) section.style.transform = 'translateY(100px)';
        else if (index === 2) section.style.transform = 'scale(0.8)';
        else if (index === 3) section.style.transform = 'rotateY(90deg)';
    }
});

// Observer para animar as seções ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
        }
    });
});

// Observa cada seção para aplicar a animação
sections.forEach((section) => observer.observe(section));

// BOTÃO DE VOLTAR AO TOPO
// Adiciona um evento de clique ao botão de voltar ao topo
document.querySelector('.top a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth'}); // Rola suavemmente o topo da página
})