
//utilizadno o som acima para mapear pelo elemento de id do resultado

//criando uma função que é o botão de pesquisar, assim, apertando esse botão no onclick, mostrará o resultado dentro da função
function pesquisar(){
    
    //utilizadno o som acima para mapear pelo elemento de id do resultado
    let section = document.getElementById("resultados-pesquisa")

    // criar uma variavel utilizando o id de campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    campoPesquisa = campoPesquisa.toLowerCase()

    //se o campoPesquisa não conter nada, ou seja, em branco, usando o NOT (!)
    if(!campoPesquisa){
        //usando o return para não seguir para as funções a seguir, ou seja, não vai executar nada, ja que está vazio!!
        //usando uma mensagem de não encontrado, assim, utilizamos o innerHTML para mostrar a mensaegm na tela
        section.innerHTML = "Busca vazia, não foi encontrado"
        return
    }
    
    let resultados =""
    let titulo = ""
    let descricao = ""
    let tags = ""

    for(let dado of dados){
        // atribuindo o objeto e a propriedade de titulos a uma variave de titulo e descrição par assim transformar este objeto tudo em letras minusculas!!
        //juntamente com as tags 
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase() 

        //usando a função includes para saber se o nome digitado no input está dentro do objeto na propriedade de titulo e retorna true se     houver o nome digitado 
        //incluindo também se o que foi digitado estvir na desrição de alguma pessoa, pesquisar as pessoas que podduem este nome na descrição ou pelas tags que foram escritas nod dados, assim utilizeia condição do OU, caso um outro for verdade, executa a ação:

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

             // colocando o contador no resultados, para selecionar todos os elementos, para cada item, havendo uma soma, ou seja, 
            resultados +=
        `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank" rel="external">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank" rel="external">execução em vídeo</a>
            </div>`;
            //Acessando o objeto de dados, ou seja, para cada dado dentro dde dados, será acessado os objetos com as propriedades de cada

        }
    }

    //consição se resultado não existir ele ecuta este meu IF, usado o NOT, 
    if(!resultados){

        resultados = "<p> Nada foi encontrado. você precisa digitar o nome do exercicio ou do grupo muscular relacionado </p> "
    }
    
    //amazenamos na váriavel do resultados
    section.innerHTML = resultados

}

