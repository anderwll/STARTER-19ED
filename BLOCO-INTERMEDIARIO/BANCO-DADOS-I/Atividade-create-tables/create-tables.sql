create table if not exists estados (
	id serial primary key,
	uf varchar(2) not null,
	nome varchar(150) not null
);


create table if not exists cidades (
	id serial primary key,
	estado_id int not null references estados(id),
    nome varchar(150)
	
	-- Outra forma de escreve a FK
	-- constraint nome_da_minha_regra foreign key estado_id references estados(id) 
);

create table if not exists clientes (
	id serial primary key,
	nome varchar(150) not null,
	cpf char(11) not null,
	dt_nascimento date not null,
	logradouro varchar(255) not null,
	cep varchar(20) null,
	cidade_id int not null references cidades(id) 
);

create table if not exists veiculos (
	id serial primary key,
	modelo varchar(150) not null,
	ano date not null,
	placa varchar(10) not null,
	cliente_id int not null references clientes (id)
);

create table if not exists vendas(
	id serial primary key
);





