// Configuração e renderização dos gráficos
let salesChart;
let categoryChart;
let currentChartType = 'line';
let currentPeriod = 'week'; // Período padrão

// Função para inicializar os gráficos
function initCharts() {
    const salesCtx = document.getElementById('sales-chart').getContext('2d');
    const categoryCtx = document.getElementById('category-chart').getContext('2d');
    
    // Configuração do gráfico de vendas por período
    salesChart = new Chart(salesCtx, {
        type: currentChartType,
        data: {
            labels: [],
            datasets: [{
                label: 'Vendas (R$)',
                data: [],
                backgroundColor: 'rgba(67, 97, 238, 0.2)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: 'rgba(67, 97, 238, 1)',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `R$ ${context.raw.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                }
            }
        }
    });
    
    // Configuração do gráfico de vendas por categoria
    categoryChart = new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(76, 201, 240, 0.7)',
                    'rgba(63, 55, 201, 0.7)',
                    'rgba(247, 37, 133, 0.7)',
                    'rgba(114, 9, 183, 0.7)'
                ],
                borderColor: [
                    'rgba(67, 97, 238, 1)',
                    'rgba(76, 201, 240, 1)',
                    'rgba(63, 55, 201, 1)',
                    'rgba(247, 37, 133, 1)',
                    'rgba(114, 9, 183, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 15,
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${context.label}: R$ ${value.toFixed(2)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Atualizar os gráficos com os dados iniciais
    updateCharts(currentPeriod);
}

// Função para atualizar os gráficos com base no período selecionado
function updateCharts(period) {
    const data = salesData[period];
    
    // Atualizar dados do gráfico de vendas por período
    salesChart.data.labels = data.salesByPeriod.map(item => item.period);
    salesChart.data.datasets[0].data = data.salesByPeriod.map(item => item.value);
    salesChart.update();
    
    // Atualizar dados do gráfico de vendas por categoria
    categoryChart.data.labels = data.salesByCategory.map(item => item.category);
    categoryChart.data.datasets[0].data = data.salesByCategory.map(item => item.value);
    categoryChart.update();
}

// Função para alterar o tipo de gráfico de vendas
function changeChartType(type) {
    currentChartType = type;
    salesChart.config.type = type;
    salesChart.update();
}

// Exportar funções para uso externo
window.chartFunctions = {
    initCharts,
    updateCharts,
    changeChartType
};
