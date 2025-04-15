// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o ícone de alternância e o campo de senha
    const togglePassword = document.querySelector('#toggle-password');
    const passwordField = document.querySelector('#password-field');

    // Adiciona um evento de clique ao ícone
    togglePassword.addEventListener('click', function () {
        // Verifica o tipo de input e alterna entre 'password' e 'text'
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Alterna o ícone entre olho aberto e fechado
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});
