# Documentação do Projeto 1: Dashboard Interativo

## Visão Geral
Este documento fornece uma documentação detalhada do Dashboard Interativo desenvolvido com HTML, CSS e JavaScript. O dashboard é focado em visualização de dados de vendas e demonstra habilidades em desenvolvimento frontend.

## Estrutura do Projeto
```
html-css-js/
├── index.html          # Estrutura principal do dashboard
├── css/
│   └── styles.css      # Estilos e layout responsivo
└── js/
    ├── data.js         # Dados simulados para o dashboard
    ├── charts.js       # Configuração dos gráficos com Chart.js
    └── main.js         # Funcionalidades principais e interatividade
```

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica para melhor acessibilidade e SEO
- **CSS3**: Flexbox e Grid para layouts complexos, Media Queries para responsividade
- **JavaScript (ES6+)**: Manipulação do DOM, eventos, e funcionalidades interativas
- **Chart.js**: Biblioteca para criação de gráficos interativos

## Funcionalidades Detalhadas

### 1. Layout Responsivo
O dashboard utiliza CSS Grid e Flexbox para criar um layout que se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout completo com sidebar visível
- **Tablet**: Layout ajustado com elementos reorganizados
- **Mobile**: Layout simplificado com elementos empilhados

### 2. Visualização de Dados
O dashboard inclui múltiplas visualizações de dados:
- **Cards de Estatísticas**: Mostram métricas-chave como vendas totais, novos clientes, etc.
- **Gráfico de Vendas por Período**: Visualização de tendências de vendas ao longo do tempo
- **Gráfico de Vendas por Categoria**: Distribuição de vendas por categoria de produto

### 3. Filtragem de Dados
Os dados podem ser filtrados por diferentes períodos:
- Hoje
- Última Semana
- Último Mês
- Último Ano

A filtragem atualiza dinamicamente todas as visualizações e estatísticas.

### 4. Tabela de Transações
Uma tabela interativa que exibe as transações recentes com:
- Paginação para navegar entre conjuntos de dados
- Campo de busca para filtrar transações
- Indicadores visuais de status (concluído, pendente, cancelado)

### 5. Exportação de Dados
Funcionalidade para exportar os dados da tabela para formato CSV, permitindo análise posterior em ferramentas como Excel.

## Implementação Técnica

### HTML
O arquivo `index.html` utiliza tags semânticas como `<header>`, `<nav>`, `<main>`, e `<section>` para melhorar a acessibilidade e SEO. A estrutura é organizada em componentes lógicos:
- Cabeçalho com logo e informações do usuário
- Barra lateral de navegação
- Área principal de conteúdo com cards, gráficos e tabela

### CSS
O arquivo `styles.css` implementa:
- **Sistema de Grid**: Para o layout principal do dashboard
- **Flexbox**: Para alinhamento de elementos dentro dos componentes
- **Variáveis CSS**: Para cores, sombras e outros valores reutilizáveis
- **Media Queries**: Para responsividade em diferentes tamanhos de tela
- **Animações e Transições**: Para melhorar a experiência do usuário

### JavaScript
A lógica do dashboard é dividida em três arquivos:

#### data.js
Contém dados simulados para o dashboard, organizados por período (hoje, semana, mês, ano). Inclui:
- Dados de vendas totais e métricas de crescimento
- Dados para gráficos de vendas por período e categoria
- Dados de transações para a tabela

#### charts.js
Responsável pela configuração e renderização dos gráficos usando Chart.js:
- Inicialização dos gráficos com configurações personalizadas
- Função para atualizar os gráficos com base no período selecionado
- Função para alternar entre tipos de gráfico (linha, barra)

#### main.js
Contém a lógica principal do dashboard:
- Inicialização do dashboard ao carregar a página
- Manipuladores de eventos para interações do usuário
- Funções para atualizar os dados do dashboard
- Lógica de paginação e filtragem da tabela
- Funcionalidade de exportação de dados

## Guia de Uso

### Visualização de Dados
1. Selecione um período no dropdown "Período" para filtrar os dados
2. Observe como os cards de estatísticas, gráficos e tabela se atualizam
3. Use os botões de tipo de gráfico para alternar entre visualizações de linha e barra

### Tabela de Transações
1. Use o campo de busca para filtrar transações por qualquer critério
2. Navegue entre páginas usando os botões de paginação
3. Clique no botão "Exportar" para baixar os dados em formato CSV

## Possíveis Melhorias Futuras
- Implementação de autenticação de usuários
- Conexão com API real para dados em tempo real
- Temas claro/escuro personalizáveis
- Mais opções de visualização de dados
- Dashboard personalizável com widgets arrastáveis
