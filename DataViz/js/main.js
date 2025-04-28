// Arquivo principal para funcionalidades do dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar os gráficos
    window.chartFunctions.initCharts();
    
    // Carregar dados iniciais
    updateDashboardData('week');
    
    // Carregar tabela de transações
    loadTransactionsTable(transactionsData);
    
    // Event Listeners
    setupEventListeners();
});

// Configurar todos os event listeners
function setupEventListeners() {
    // Seletor de período
    const dateRangeSelect = document.getElementById('date-range');
    dateRangeSelect.addEventListener('change', function() {
        const selectedPeriod = this.value;
        updateDashboardData(selectedPeriod);
    });
    
    // Botões de tipo de gráfico
    const chartTypeButtons = document.querySelectorAll('.btn-chart-type');
    chartTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const chartType = this.getAttribute('data-type');
            
            // Atualizar classe ativa
            chartTypeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Alterar tipo de gráfico
            window.chartFunctions.changeChartType(chartType);
        });
    });
    
    // Busca na tabela de transações
    const searchInput = document.getElementById('search-transactions');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterTransactions(searchTerm);
    });
    
    // Botão de exportar dados
    const exportButton = document.getElementById('export-data');
    exportButton.addEventListener('click', function() {
        exportTransactionsData();
    });
    
    // Paginação da tabela
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    
    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            displayTransactionsPage(currentPage);
        }
    });
    
    nextPageButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            displayTransactionsPage(currentPage);
        }
    });
}

// Atualizar todos os dados do dashboard com base no período selecionado
function updateDashboardData(period) {
    const data = salesData[period];
    
    // Atualizar estatísticas
    document.getElementById('total-sales').textContent = data.totalSales.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('sales-change').textContent = data.salesChange.toFixed(1);
    document.getElementById('new-customers').textContent = data.newCustomers;
    document.getElementById('customers-change').textContent = data.customersChange.toFixed(1);
    document.getElementById('products-sold').textContent = data.productsSold;
    document.getElementById('products-change').textContent = Math.abs(data.productsChange).toFixed(1);
    document.getElementById('conversion-rate').textContent = data.conversionRate.toFixed(1);
    document.getElementById('conversion-change').textContent = data.conversionChange.toFixed(1);
    
    // Atualizar classes para indicadores de mudança
    updateChangeIndicators('sales-change', data.salesChange);
    updateChangeIndicators('customers-change', data.customersChange);
    updateChangeIndicators('products-change', data.productsChange);
    updateChangeIndicators('conversion-change', data.conversionChange);
    
    // Atualizar gráficos
    window.chartFunctions.updateCharts(period);
}

// Atualizar indicadores de mudança (setas para cima/baixo)
function updateChangeIndicators(elementId, value) {
    const element = document.getElementById(elementId);
    const parentElement = element.parentElement;
    
    if (value >= 0) {
        parentElement.classList.remove('negative');
        parentElement.classList.add('positive');
        parentElement.querySelector('i').className = 'fas fa-arrow-up';
    } else {
        parentElement.classList.remove('positive');
        parentElement.classList.add('negative');
        parentElement.querySelector('i').className = 'fas fa-arrow-down';
    }
}

// Variáveis para paginação da tabela
let currentPage = 1;
let rowsPerPage = 5;
let totalPages = 1;
let filteredTransactions = [];

// Carregar dados na tabela de transações
function loadTransactionsTable(transactions) {
    filteredTransactions = [...transactions];
    totalPages = Math.ceil(transactions.length / rowsPerPage);
    displayTransactionsPage(currentPage);
    updatePaginationControls();
}

// Exibir página específica da tabela de transações
function displayTransactionsPage(page) {
    const tableBody = document.querySelector('#transactions-table tbody');
    tableBody.innerHTML = '';
    
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, filteredTransactions.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const transaction = filteredTransactions[i];
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.customer}</td>
            <td>${transaction.date}</td>
            <td>${transaction.product}</td>
            <td>R$ ${transaction.value.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            <td><span class="status status-${transaction.status}">${getStatusText(transaction.status)}</span></td>
        `;
        
        tableBody.appendChild(row);
    }
    
    updatePaginationControls();
}

// Atualizar controles de paginação
function updatePaginationControls() {
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages || totalPages === 0;
    
    pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;
}

// Filtrar transações com base no termo de busca
function filterTransactions(searchTerm) {
    if (searchTerm === '') {
        filteredTransactions = [...transactionsData];
    } else {
        filteredTransactions = transactionsData.filter(transaction => {
            return (
                transaction.id.toLowerCase().includes(searchTerm) ||
                transaction.customer.toLowerCase().includes(searchTerm) ||
                transaction.product.toLowerCase().includes(searchTerm) ||
                transaction.date.includes(searchTerm) ||
                transaction.value.toString().includes(searchTerm) ||
                getStatusText(transaction.status).toLowerCase().includes(searchTerm)
            );
        });
    }
    
    totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);
    currentPage = 1;
    displayTransactionsPage(currentPage);
}

// Obter texto de status formatado
function getStatusText(status) {
    switch (status) {
        case 'completed':
            return 'Concluído';
        case 'pending':
            return 'Pendente';
        case 'cancelled':
            return 'Cancelado';
        default:
            return status;
    }
}

// Exportar dados da tabela de transações
function exportTransactionsData() {
    // Criar string CSV
    let csvContent = "ID,Cliente,Data,Produto,Valor,Status\n";
    
    filteredTransactions.forEach(transaction => {
        const row = [
            transaction.id,
            transaction.customer,
            transaction.date,
            transaction.product,
            `R$ ${transaction.value.toFixed(2)}`,
            getStatusText(transaction.status)
        ].join(',');
        
        csvContent += row + '\n';
    });
    
    // Criar blob e link para download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'transacoes.csv');
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
