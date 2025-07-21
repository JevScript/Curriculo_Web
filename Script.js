
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    })
}) 

// --- Modo Escuro (Dark Mode) ---
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        // Opcional: mudar o ícone do botão
        if (darkModeToggle) { // Verifica se o botão existe antes de tentar mudar o ícone
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone de sol
        }
    } else {
        body.classList.remove('dark-mode');
        // Opcional: mudar o ícone do botão
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ícone de lua
        }
    }
}

// 1. Carregar preferência do usuário do localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Se não há preferência salva, verifica a preferência do sistema operacional
    applyTheme('dark');
} else {
    applyTheme('light'); // Padrão se não há preferência ou sistema é claro
}

// 2. Lidar com o clique no botão
if (darkModeToggle) { // Verifica se o botão existe antes de adicionar o event listener
    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}