-- DDL - Linguagem de Definição de Dados

-- string = varchar, char, text
-- number = integer, decimal
-- Date = timestamp, date, time

-- opcional = null (padrão)
-- NOW() = Função para gerar meu timestamp

-- CREATE
create table public.categorias (
	categoria_id serial primary key,
	nome varchar(100) not null,
	criado_em timestamp default(now()) 
); 

create table if not exists produtos (
	produto_id serial,
	nome varchar not null,
	cor varchar(150) not null,
	preco decimal(10,2) not null,
	quantidade_estoque integer null,
	observacao text null,
	criado_em timestamp default(now()),
	categoria_id integer not null,
	
	-- regra
	constraint fk_categoria_id_categoria foreign key(categoria_id) references categorias(categoria_id),  -- tabela a ser referenciado + nome da coluna desta tabela
	constraint pk_produto_id primary key (produto_id)
	
);

-- ALTER
alter table produtos
add column nome_forcedor varchar(250) null, 
drop column if exists observacao;

alter table produtos 
rename column nome_forcedor to fornecedor;

alter table produtos
alter column preco type int;


-- DROP
drop table if exists produtos;


-- TRUNCATE
truncate table categorias;


-- DML - Linguagem de Manipulação de Dados

-- INSERT (categoria_id, nome, criado_em)
insert into categorias (nome) values ('Tenis');

insert into 
	produtos (nome, cor, preco, quantidade_estoque, observacao, categoria_id)
values 
	('Tenis Nike', 'Preto', 150.99, 100, null, 1);

insert into 
	produtos (nome, cor, preco, quantidade_estoque, observacao, categoria_id)
values 
	('Tenis Nike 2', 'Preto', 132.99, 100, 'Muito bom', 1),
	('Tenis Nike 3', 'Preto', 132.99, 45, 'Muito bom', 1),
	('Tenis Nike 4', 'Branco', 120.99, 43, null, 1);

-- UPDATE
update produtos 
set cor = 'Preto'
where produto_id = 2;

-- DELETE
delete from produtos
where produto_id = 3;


-- SELECT
select * from produtos;

select nome, preco from produtos;

select 
	* 
from 
	produtos
where 
	observacao notnull;

-- Exemplo UUID 

create extension if not exists "uuid-ossp";

create table fornecedores(
	id uuid primary key default(uuid_generate_v4()),
	nome varchar(255) not null,
	criado_em timestamp default (now()) not null
);

insert into 
	fornecedores (nome)
values 
	('Joãozinho');

insert into 
	fornecedores (id, nome, criado_em)
values 
	(uuid_generate_v4(),'Maria', now());

select * from fornecedores;


