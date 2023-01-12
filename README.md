# Challenge to premiun minds opportunity 

## Desafio Pokemon: Pegue-os Todos
O Ash está pegando pokemons em um mundo que consiste em uma grade bidimensional infinita de casas. Em cada casa há exatamente um pokemon.

Ash começa pegando o pokemon que está na casa onde ele começa. Em seguida, ele se move para a casa imediatamente a norte, sul, leste ou oeste de onde ele está e pega o pokemon que está lá, e assim por diante. Observe que, se ele passar por uma casa onde já passou (e, portanto, onde já pegou um pokemon), já não há mais um pokemon para ele pegar!

O que queremos saber é: começando com um mundo cheio de pokemons (um em cada casa!), quantos pokemons o Ash pega para uma dada sequência de movimentos?

### Formato de Entrada
O programa deve ler uma única linha do stdin, que contém uma sequência de movimentos. Cada movimento é descrito por uma letra N, S, E ou O (respectivamente: norte, sul, leste, oeste).

### Exemplos
| Exemplo | Entrada    | Saída |
| ------- | ---------- | ----- |
| 1       | E          | 2     |
| 2       | NESO       | 4     |
| 3       | NSNSNSNSNS | 2     |

### Considerações Técnicas
Você pode usar qualquer linguagem de programação e stack de tecnologia de sua escolha. No entanto, com seu código-fonte, você deve fornecer o comando completo que permite compilar (se necessário) e executar sua solução.

Sua solução deve ser correta (funcionalmente) e eficiente (tempo gasto, memória ocupada, etc.). Portanto, sugerimos que você escreva testes que coloquem sua solução à prova além dos inputs de exemplo (entradas maiores, casos difíceis, etc.) e os inclua no código-fonte que você enviar.
Também damos (muito) valor a quão compreensível e organizado é o seu código.

### Utilização
Para usar este projeto, você precisará ter Node.js instalado em sua máquina.

Clone este repositório e instale as dependências executando o seguinte comando no seu terminal:

<pre><code>yarn
npm install
</code></pre>

Em seguida, execute o comando abaixo para rodar o script:

<pre><code>yarn start
npm run start
</code></pre>

### Testes
Este projeto inclui testes automatizados escritos com Jest. Você pode executá-los com o seguinte comando:

<pre><code>yarn test
npm run test
</code></pre>

### Licença
Este projeto está licenciado sob a licença ISC. Consulte o arquivo LICENSE para obter mais informações.
