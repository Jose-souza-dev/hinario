// função que muda o title do site
    let titulo = document.querySelector("title");
    titulo.innerText = "Hino Flow";

// Função de declaração tradicional para realizar a busca/filtro
        function buscar() {
            // 1. Pega o elemento input de busca
            const input = document.querySelector("#search");
            // 2. Pega o valor digitado e converte para MAIÚSCULAS
            const filtro = input.value.toUpperCase();

            // 3. Seleciona todos os links (<a>) dentro da lista (#music)
            const itensDaLista = document.querySelectorAll("#music li a");

            // 4. Percorre todos os links
            itensDaLista.forEach((elementoLink) => {
                // Pega o texto do link e converte para MAIÚSCULAS
                const texto = elementoLink.textContent.toUpperCase();

                // Pega o elemento pai do link (o <li>)
                const listItem = elementoLink.parentElement;

                // Verifica se o texto **INCLUI** o termo de busca
                if (texto.includes(filtro)) {
                    // Se incluir, mostra o item da lista (<li>)
                    listItem.style.display = ""; // O padrão para <li> em <ul>
                } else {
                    // Se não incluir, esconde o item da lista (<li>)
                    listItem.style.display = "none";
                }
            });
        }

        // Adiciona o listener para que a função `buscar` seja chamada a cada digitação
        document.querySelector("#search").addEventListener("input", buscar);