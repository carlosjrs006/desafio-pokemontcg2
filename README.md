# Desafio técnico Pokémon TCG - (Angular)

Olá, bem vindo ao repositório deste projeto que simula uma parte de um jogo de cartas "TCG" - "trading card games" baseado no animê Pokémon.

## Tecnologias utilizadas:

Framework Angular 16, Angular Material(UI), Tailwindcss(CSS-inline), Sweet Alerts(Alerts), Scroll-infinite, biblioteca UI Infragistics

## Requisitos para compilar o projeto

Caso queira usar em Production: o app foi deployado na vercel. url do site https://desafio-pokemontcg2.vercel.app

O projeto atualizado se encontra na branch main, voce pode realizar o download através do git clone https://github.com/carlosjrs006/desafio-pokemontcg2.git.

Assim que baixar o projeto, abra um terminal na pasta do mesmo e envie o seguinte comando: npm install e logo após que concluir, digite o comando npm install -g json-server.

## Criar Deck

1. tela inicial https://desafio-pokemontcg2.vercel.app/ ou http://localhost:4200/

![image](https://github.com/carlosjrs006/desafio-pokemontcg2/assets/83041815/bd83ba58-87ca-457f-816e-77fd1ccde7ae)

2. Ao Clicar em "Criar Deck" sera carregado a tela abaixo para criar seu baralho, não usei paginação. Optei por usar o scroll-infineti aonde ele observar que esta chegando no limite do scroll e faz uma nova requisição passando a proxima pagina.

   ![image](https://github.com/carlosjrs006/desafio-pokemontcg2/assets/83041815/7730c4ae-d646-4c34-8f6e-f58b2df8e705)

3. Escolha as suas cartas para montar o seu deck, será necessário no mínimo 24 cartas e no máximo 60 para conseguir salvar, não esqueça de dá um nome ao deck. 3 - Navegue entre as setas para paginar as cartas, e sugir mais 250 cartas novas. 4 - Se necessário, utilize o filtro para pesquisar o nome de alguma carta. 5 - Não é possível adicionar mais de 4 cartas com o mesmo nome, seguindo as regras do jogo.

**Para usar o filtro, pesquise por um nome do pokémon EX: "Charizard", caso queira pesquisar somente uma parte do nome, acrescente um " * " no fim da palavra EX: "Char * " é preciso fazer isso pois a API Oficial do Pokémon, não possui um endpoint específico para uma pesquisa incompleta.

![image](https://github.com/carlosjrs006/desafio-pokemontcg2/assets/83041815/100e61af-c90a-4541-ba43-1f86ff45599a)

![image](https://github.com/carlosjrs006/desafio-pokemontcg2/assets/83041815/02face84-90ef-4460-bacc-43623ff0608c)

![image](https://github.com/carlosjrs006/desafio-pokemontcg2/assets/83041815/5b9908fe-af89-4521-bee1-742508f2845f)

![image](https://github.com/carlosjrs006/desafio-pokemontcg2/assets/83041815/373f8971-94c9-45de-9660-256229177816)

![image](https://github.com/carlosjrs006/desafio-pokemontcg2/assets/83041815/b6df3f8f-602d-4531-b550-daf7099990cc)

![image](https://github.com/carlosjrs006/desafio-pokemontcg2/assets/83041815/76893211-dd46-4e5d-a947-b0a11247e838)




