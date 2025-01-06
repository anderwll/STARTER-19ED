-- Criar a tabela de usuários
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(100),
    senha VARCHAR(100)
);

-- Inserir dados falsos na tabela de usuários
INSERT INTO usuarios (nome, email, senha)
VALUES
    ('Ana Silva', 'ana@example.com', 'senha123'),
    ('Carlos Ferreira', 'carlos@example.com', 'senha456'),
    ('Mariana Souza', 'mariana@example.com', 'senha789'),
    ('João Santos', 'joao@example.com', 'senha987'),
    ('Laura Oliveira', 'laura@example.com', 'senha654'),
    -- Adicione mais usuários aqui
    ('Pedro Almeida', 'pedro@example.com', 'senha321'),
    ('Julia Costa', 'julia@example.com', 'senha543'),
    ('Lucas Lima', 'lucas@example.com', 'senha765'),
    ('Isabela Mendes', 'isabela@example.com', 'senha987'),
    ('Gustavo Rodrigues', 'gustavo@example.com', 'senha135');

-- Criar a tabela de produtos
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    preco DECIMAL(10, 2)
);

-- Inserir dados falsos na tabela de produtos
INSERT INTO produtos (nome, preco)
VALUES
    ('Camiseta Branca', 29.99),
    ('Calça Jeans', 59.99),
    ('Tênis Esportivo', 79.99),
    ('Vestido Floral', 39.99),
    ('Jaqueta de Couro', 119.99),
    -- Adicione mais produtos aqui
    ('Camisa Xadrez', 34.99),
    ('Shorts Jeans', 39.99),
    ('Sapato Social', 89.99),
    ('Bolsa de Couro', 69.99),
    ('Blusa de Tricô', 49.99);

-- Criar a tabela de compras
CREATE TABLE compras (
    id SERIAL PRIMARY KEY,
    usuario_id INT,
    produto_id INT,
    data_compra DATE,
    quantidade INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserir dados falsos na tabela de compras
INSERT INTO compras (usuario_id, produto_id, data_compra, quantidade)
SELECT
    (RANDOM() * (10 - 1) + 1)::INT,
    (RANDOM() * (10 - 1) + 1)::INT,
    NOW() - (RANDOM() * INTERVAL '30 days'),
    (RANDOM() * 3 + 1)::INT
FROM generate_series(1, 50);

