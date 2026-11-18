Questão 02 — Calculadora de Média Escolar
Descrição
Aplicativo desenvolvido com React Native e Expo para receber o nome de um estudante e três notas, calcular a média aritmética e apresentar a situação do estudante.
Funcionalidades
- Informar o nome do estudante.
- Informar três notas.
- Calcular a média aritmética.
- Exibir a média e a situação: aprovado ou reprovado.
- Validar o preenchimento dos campos.
- Aceitar somente notas entre 0 e 10.
Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- useState para armazenar os dados e atualizar a tela.
Regra de aprovação
- Média maior ou igual a 7,0: aprovado.
- Média menor que 7,0: reprovado.
Fórmula utilizada
média = (nota 1 + nota 2 + nota 3) ÷ 3
Exemplo de utilização
- Estudante: João
- Notas: 8,0, 7,0 e 9,0
- Resultado esperado: média 8,00 — Aprovado.
Como executar
1. Abra o terminal na pasta deste projeto.
2. Instale as dependências, se necessário: npm.cmd install.
3. Inicie o projeto para navegador: npx.cmd expo start --web.
4. Abra no navegador o endereço apresentado pelo Expo.
No PowerShell do Windows, use os comandos com .cmd caso npm ou npx sejam bloqueados pela política de execução de scripts.