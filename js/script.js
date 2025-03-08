
        // Função para verificar o tamanho da tag body e exibir o aviso, se necessário
        function aviso() {
            const bodyWidth = document.body.clientWidth;
            if (bodyWidth > 400) {
                alert("Este site se comporta melhor em telas de celular. Por favor, redimensione a janela do navegador para obter uma experiência ideal.");
            }
        }

        // Chama a função para verificar o tamanho da tag body e exibir o aviso, se necessário
        aviso();


function abrirFechar(){
    const menu = document.getElementById('menu');

    if(menu.style.display ==='block'){
        menu.style.display ='none';
        
    }else{
       menu.style.display ='block';
       
    }
}