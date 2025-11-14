const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        // Constrói o ID do próximo passo (ex: 'passo-7')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Oculta o passo atual
        atual.classList.remove('ativo');

        // Exibe o próximo passo
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
