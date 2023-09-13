# SGNV - Sistema de Gerenciamento de Negociação de Veículos
Trabalho prático de Prática em Desenvolvimento de Software do DCC-UFMG

# Membros e funções
- Arthur de Brito Bonifácio (Fullstack)
- Guilherme Aquim Filho (Fullstack)
- Augusto Maillo Queiroga de Figueiredo (Fullstack)
- Felipe de Paula Gonçalves (Fullstack)

# Escopo
**Objetivo do sistema**
- Sistema de gestão de loja de venda de carros usados onde será possível registrar dados de cada carro disponível para venda com informações relativas a cada unidade em particular, assim como informações de mercado para auxiliar nas decisões de compra/venda.

**Principais features**
- Armazenamento de informações de cada unidade de veículo da loja (placa, ano, modelo, chassi, documento, cor, condição)
  - Registro de custos adicionais com cada veículo (manutenção, pintura, limpeza…)
- Informações de mercado (valor da tabela fipe)
- Cálculo sugestivo de compra e/ou venda de veículos
- Acompanhamento de vendas
  - Nome cliente, produto, parcelas restantes, situação pagamento…
- Gerenciamento de estoque
- Controle de acesso ao sistema

**Tecnologias**
- Python
- Sqlite
- GitHub
- Unittest
- MagicMock

**Backlog - Produto**
- Como usuário, eu gostaria de fazer login na plataforma
- Como gerente, eu gostaria de adicionar um vendedor
- Como gerente, eu gostaria de remover um vendedor
- Como vendedor, eu gostaria de propor uma aquisição de veículo para o estoque
- Como gerente, eu gostaria de avaliar propostas de aquisição de veículo
- Como gerente, eu gostaria de editar informações de um veículo do estoque
- Como gerente, eu gostaria de remover um veículo do estoque
- Como usuário, eu gostaria de informar a venda de um veículo do estoque
- Como usuário, eu gostaria de informar gastos relativos a um veículo
- Como usuário, eu gostaria de ver os gastos relativos a um veículo
- Como gerente, eu gostaria de visualizar um relatório de vendas de cada vendedor
- Como vendedor, eu gostaria de visualizar um relatório de minhas vendas
- Como usuário, eu gostaria de ter uma sugestão de valor de venda de um veículo
- Como usuário, eu gostaria de listar o estoque
- Como usuário, eu gostaria de buscar por itens no estoque

**Backlog - Sprint**
- História #1: Como gerente, eu gostaria de criar e remover usuários do sistema
- Tarefas e responsáveis:
 - Criar a tabela de usuários - Augusto
 - Criar a tela de usuários - Felipe
 - Criar classe modelo Usuários - Arthur
 - Criar rota para criação de usuário - Guilherme
 - Criar rota para remoção de usuário - Guilherme

- História #2: Como usuário, eu gostaria de fazer login na plataforma
- Tarefas e responsáveis:
 - Criar rota de login na API do backend - Augusto
 - Criar tela de login - Felipe
 - Redirecionar o usuário para a tela de veículos disponíveis - Felipe


- História #3: Como vendedor, eu gostaria de propor uma aquisição de veículo para o estoque
- Tarefas e responsáveis:
 - Criar de tabela de propostas - Augusto 
 - Criar classe modelo Propostas - Arthur
 - Criar rota de criação de propostas - Augusto
 - Criar tela com formulário de uma nova proposta - Felipe

- História #4: Como gerente, eu gostaria de aprovar um orçamento de compra
- Tarefas e responsáveis:
 - Criar tabela de estoque - Augusto
 - Criar classe modelo Estoque - Arthur
 - Criar rota para adicionar item do estoque - Augusto
 - Criar rota para remover proposta - Guilherme
 - Alterar tela de listagem de propostas de compra para contemplar o fluxo de aprovação - Felipe
 - Alterar tela de listagem de estoque - Felipe

- História #5: Como gerente, eu gostaria de acompanhar o desempenho dos vendedores
- Tarefas e responsáveis:
 - Criar tabela de vendas efetuadas - Augusto
 - Criar classe modelo Vendas - Arthur
 - Criar rota de busca na tabela de vendas - Guilherme
 - Implementar no backend a lógica de sintetizar as vendas - Arthur
 - Criar tela de listagem de desempenho dos vendedores - Felipe

- História #6: Como vendedor, eu gostaria de buscar informações de um veículo no estoque
- Tarefas e responsáveis:
 - Criar rota para busca textual no estoque - Augusto
 - Criar barra de pesquisa na tela de estoque - Felipe

- História #7: Como usuário, eu gostaria de informar a venda de um veículo do estoque
- Tarefas e responsáveis:
 - Criar tela para registrar informação de venda - Felipe
 - Criar rota para adição de item no estoque - Augusto

- História #8: Como usuário, eu gostaria de ter uma sugestão de valor de venda de um veículo
- Tarefas e responsáveis:
 - Criar tela de detalhes do item - Felipe
 - Criar tabela de gastos dos itens - Augusto
 - Criar classe modelo Gastos - Arthur
 - Criar rota para informar gasto com um veículo - Guilherme
 - Criar rota para recuperar detalhes de um item do estoque - Guilherme
 - Implementar o somatório do valor gasto com o veículo - Arthur



