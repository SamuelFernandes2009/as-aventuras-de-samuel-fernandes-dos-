const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a classe 'ativo' do passo atual
        atual.classList.remove('ativo');

        // Adiciona a classe 'ativo' no próximo passo para exibi-lo
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
