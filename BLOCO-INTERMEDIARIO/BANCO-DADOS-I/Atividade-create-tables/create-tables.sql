create table if not exists estados(
	id serial primary key not null,
	uf char(2) not null,
	nome varchar(150) not null
);

create table if not exists cidades(
	id serial primary key not null,
	estado_id int not null references estados(id),
	nome varchar(150) not null
);

create table if not exists clientes(
	id serial primary key not null,
	nome varchar(150) not null,
	cpf char(11) not null,
	dt_nascimento date not null,
	logradouro varchar(200) not null,
	cep varchar(20) null,
	cidade_id int not null references cidades(id)
);

create table if not exists veiculos(
	id serial primary key not null,
	modelo varchar(150) not null,
	ano date not null,
	placa varchar(10) not null,
	cliente_id int not null references clientes(id)
);

create table if not exists formas_pagamento(
	id serial primary key not null,
	nome varchar(45) not null
);

create table if not exists vendas(
	id serial primary key not null,
	forma_pagamento_id int not null references formas_pagamento(id),
	cliente_id int not null references clientes(id),
	data_venda date not null,
	valor_total decimal(10,2) not null
);

create table if not exists acompanhamentos(
	id serial primary key not null,
	status char(1) not null,
	venda_id int not null references vendas(id)
);

create table if not exists servicos(
	id serial primary key not null,
	nome varchar(50) not null,
	valor decimal(10,2) not null
);

create table if not exists produtos(
	id serial primary key not null,
	nome varchar(50) not null,
	valor decimal(10,2) not null
);

create table if not exists itens_vendas(
	id serial primary key not null,
	produto_id int not null references produtos(id),
	servico_id int not null references servicos(id),
	venda_id int not null references vendas(id)
);

insert into estados(uf, nome) values ('RS', 'Rio Grande do Sul'), ('SP', 'São Paulo');

insert into cidades(estado_id, nome) values (1, 'São Leopoldo'), (2, 'Itu');

insert into clientes(nome, cpf, dt_nascimento, logradouro, cep, cidade_id) values
('Ana Clara Silva', '12345678901', '1990-05-12', 'Rua das Flores, 123', '12345678', 1),
('Bruno Mendes Souza', '23456789012', '1985-08-22', 'Avenida Brasil, 456', '87654321', 1),
('Carla Lima Andrade', '34567890123', '1978-12-10', 'Travessa dos Pássaros, 789', '45671015', 2),
('Diego Oliveira Santos', '45678901234', '1995-03-30', 'Rua dos Girassóis, 101', '54321987', 2);

insert into veiculos(modelo, ano, placa, cliente_id) values
('Toyota Corolla', '2018-01-01', 'ABC-1234',1),
('Honda Civic', '2020-01-01', 'XYZ-5678',2),
('Ford Focus', '2017-01-01', 'JKL-9101',3),
('Chevrolet Cruze', '2019-01-01', 'MNO-2345',4);

insert into formas_pagamento (nome) values ('CARTÃO'),('BOLETO'),('PIX'),('DINHEIRO');

insert into vendas (forma_pagamento_id, cliente_id, data_venda, valor_total) values
(1,1,'2024-01-15', 500.00),
(2,1,'2024-02-20', 1200.50),
(3,2,'2024-03-05', 750.75),
(4,2,'2024-04-10', 300.00),
(1,3,'2024-05-22', 950.00),
(2,3,'2024-06-18', 1250.99),
(3,4,'2024-07-30', 400.25),
(4,4,'2024-08-12', 850.00);

insert into acompanhamentos (status, venda_id) values
('1',1),('2',2),('1',3),('1',4),('2',5),('2',6),('1',7),('1',8);

insert into produtos (nome, valor) values
('Arroz 5kg', 25.90),
('Feijão Preto 1kg', 7.50),
('Macarrão Espaguete 500g', 4.30),
('Azeite de Oliva 500ml', 18.75),
('Açúcar Refinado 1kg', 3.20),
('Leite Integral 1L', 4.80),
('Café Torrado 500g', 12.50),
('Farinha de Trigo 1kg', 5.90),
('Óleo de Soja 900ml', 6.40),
('Sal Refinado 1kg', 2.50);

insert into servicos (nome, valor) values
('Entrega de Rancho', 8.00),
('Confeitaria', 25.00);

insert into itens_vendas (produto_id, servico_id, venda_id) values
(1, 1, 1), (2, 1, 1), (3, 1, 1), (4, 1, 1),
(4, 1, 2), (9, 1, 2), (2, 1, 2), (6, 1, 2),
(3, 1, 3), (4, 1, 3), (1, 1, 3), (7, 1, 3),
(6, 1, 4), (5, 1, 4), (4, 1, 4), (3, 1, 4),
(2, 1, 5), (1, 1, 5), (5, 1, 5), (1, 1, 5),
(5, 1, 6), (3, 1, 6), (8, 1, 6), (2, 1, 6),
(9, 1, 7), (2, 1, 7), (3, 1, 7), (9, 1, 7),
(7, 1, 8), (8, 1, 8), (5, 1, 8), (10, 1, 8);

ALTER TABLE acompanhamentos ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE cidades ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE clientes ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE estados ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE formas_pagamento ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE itens_vendas ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE produtos ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE servicos ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE veiculos ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE vendas ADD COLUMN criado_em TIMESTAMP NOT NULL DEFAULT NOW();

/*
 * 	ATIVIDADES:
 * 
 * 1 - Listar todas as cidades do estado de "RS", mostrando o estado (uf, estado) e o nome da cidade.
 * 2 - Listar todos os clientes, incluindo o nome do cliente e o nome da cidade onde ele reside.
 * 3 - Mostre o nome dos clientes e o valor total das vendas realizadas por ele.
 * 4 - Listar todos os veículos e seus respectivos donos (nome do cliente).
 * 5 - Listar o nome dos produtos vendidos, o nome do serviço prestado e o valor total da venda.
 * 6 - Listar o nome do cliente, o modelo do veículo e a cidade onde ele mora.
 * 7 - Liste o nome do cliente, o nome do produto comprado e o valor total da venda, considerando apenas as vendas realizadas com o CARTÃO.
 * 8 - Liste o nome do cliente, o valor total da venda e o estado de acompanhamento, considerando apenas os clientes que moram em São Paulo.
 * 
 * */