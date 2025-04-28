// Dados simulados para o dashboard
const salesData = {
    today: {
        totalSales: 2450.75,
        salesChange: 5.2,
        newCustomers: 12,
        customersChange: 8.3,
        productsSold: 45,
        productsChange: -2.1,
        conversionRate: 3.8,
        conversionChange: 1.5,
        salesByPeriod: [
            { period: '08:00', value: 120.50 },
            { period: '10:00', value: 350.25 },
            { period: '12:00', value: 480.00 },
            { period: '14:00', value: 520.75 },
            { period: '16:00', value: 680.30 },
            { period: '18:00', value: 298.95 }
        ],
        salesByCategory: [
            { category: 'Eletrônicos', value: 980.50 },
            { category: 'Roupas', value: 540.25 },
            { category: 'Alimentos', value: 320.00 },
            { category: 'Livros', value: 210.00 },
            { category: 'Outros', value: 400.00 }
        ]
    },
    week: {
        totalSales: 18750.45,
        salesChange: 12.8,
        newCustomers: 87,
        customersChange: 15.2,
        productsSold: 342,
        productsChange: -3.5,
        conversionRate: 4.2,
        conversionChange: 2.1,
        salesByPeriod: [
            { period: 'Segunda', value: 2850.50 },
            { period: 'Terça', value: 3120.25 },
            { period: 'Quarta', value: 2980.00 },
            { period: 'Quinta', value: 3450.75 },
            { period: 'Sexta', value: 4120.30 },
            { period: 'Sábado', value: 2230.65 }
        ],
        salesByCategory: [
            { category: 'Eletrônicos', value: 7500.50 },
            { category: 'Roupas', value: 4200.25 },
            { category: 'Alimentos', value: 2800.00 },
            { category: 'Livros', value: 1250.00 },
            { category: 'Outros', value: 3000.70 }
        ]
    },
    month: {
        totalSales: 75420.80,
        salesChange: 8.5,
        newCustomers: 345,
        customersChange: 12.7,
        productsSold: 1245,
        productsChange: 5.2,
        conversionRate: 4.8,
        conversionChange: 3.2,
        salesByPeriod: [
            { period: 'Semana 1', value: 18500.50 },
            { period: 'Semana 2', value: 16800.25 },
            { period: 'Semana 3', value: 19750.00 },
            { period: 'Semana 4', value: 20370.05 }
        ],
        salesByCategory: [
            { category: 'Eletrônicos', value: 28500.50 },
            { category: 'Roupas', value: 18700.25 },
            { category: 'Alimentos', value: 12400.00 },
            { category: 'Livros', value: 5820.00 },
            { category: 'Outros', value: 10000.05 }
        ]
    },
    year: {
        totalSales: 925840.35,
        salesChange: 15.3,
        newCustomers: 4250,
        customersChange: 18.9,
        productsSold: 15780,
        productsChange: 12.4,
        conversionRate: 5.2,
        conversionChange: 4.1,
        salesByPeriod: [
            { period: 'Jan', value: 68500.50 },
            { period: 'Fev', value: 72800.25 },
            { period: 'Mar', value: 79750.00 },
            { period: 'Abr', value: 82370.05 },
            { period: 'Mai', value: 75800.50 },
            { period: 'Jun', value: 81200.25 },
            { period: 'Jul', value: 85750.00 },
            { period: 'Ago', value: 88370.05 },
            { period: 'Set', value: 79500.50 },
            { period: 'Out', value: 84800.25 },
            { period: 'Nov', value: 89750.00 },
            { period: 'Dez', value: 92370.05 }
        ],
        salesByCategory: [
            { category: 'Eletrônicos', value: 350500.50 },
            { category: 'Roupas', value: 245800.25 },
            { category: 'Alimentos', value: 157500.00 },
            { category: 'Livros', value: 72040.00 },
            { category: 'Outros', value: 100000.60 }
        ]
    }
};

// Dados de transações simuladas
const transactionsData = [
    { id: 'TX-1001', customer: 'João Silva', date: '22/04/2025', product: 'Smartphone XYZ', value: 1299.99, status: 'completed' },
    { id: 'TX-1002', customer: 'Maria Oliveira', date: '22/04/2025', product: 'Notebook ABC', value: 3499.90, status: 'completed' },
    { id: 'TX-1003', customer: 'Pedro Santos', date: '21/04/2025', product: 'Fones de Ouvido', value: 299.90, status: 'completed' },
    { id: 'TX-1004', customer: 'Ana Costa', date: '21/04/2025', product: 'Smart TV 50"', value: 2799.90, status: 'pending' },
    { id: 'TX-1005', customer: 'Carlos Ferreira', date: '20/04/2025', product: 'Câmera Digital', value: 1599.90, status: 'completed' },
    { id: 'TX-1006', customer: 'Juliana Lima', date: '20/04/2025', product: 'Relógio Inteligente', value: 899.90, status: 'cancelled' },
    { id: 'TX-1007', customer: 'Roberto Alves', date: '19/04/2025', product: 'Tablet Pro', value: 1899.90, status: 'completed' },
    { id: 'TX-1008', customer: 'Fernanda Gomes', date: '19/04/2025', product: 'Monitor 27"', value: 1299.90, status: 'pending' },
    { id: 'TX-1009', customer: 'Marcelo Souza', date: '18/04/2025', product: 'Teclado Mecânico', value: 399.90, status: 'completed' },
    { id: 'TX-1010', customer: 'Patrícia Rocha', date: '18/04/2025', product: 'Mouse Gamer', value: 199.90, status: 'completed' },
    { id: 'TX-1011', customer: 'Lucas Mendes', date: '17/04/2025', product: 'Impressora Laser', value: 999.90, status: 'cancelled' },
    { id: 'TX-1012', customer: 'Camila Dias', date: '17/04/2025', product: 'Caixa de Som', value: 499.90, status: 'completed' }
];
