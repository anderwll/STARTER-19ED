-- ATIVIDADE: 
-- 1 - Listar todos os usuarios
select 
	*
from 
	usuarios;	

-- 2 - Listar as compras de um usuario para o seu id (sem join)
select 
	* 
from 
	compras
where 
	usuario_id = 4;

-- 3 - Listar todos os produtos maior que 50,00
select 
	* 
from 
	produtos p 
where 
	p.preco > 50;

-- 4 - Mostrar todas as compras de um determinado produto de id 9 (sem join)

/*	
 * select 
 * 		COLUNAS (* traz tudo)
 * from
 * 		TABELA
 * where
 * 		CONDIÇÃO ( = > < AND )
 * */

select
	*
from 
	compras
where 
	produto_id = 9;
	

-- 5 - Todos os usuários que compraram 'Camisa Xadrez'

select 
	u.nome as nome_usuario,
	p.nome  as nome_produto,
	c.data_compra,
	c.quantidade 
from 
	usuarios u
inner join 
	compras c 
on 
	c.usuario_id = u.id
inner join 
	produtos p
on 
	c.produto_id = p.id
where 
	p.nome ilike '%Camisa Xadrez%'
order by 
	c.data_compra desc;

-- 6 - O usuário que efetuo a compra de maior valor ( LIMIT - Pesquisar )

select 
	u.id,
	u.nome,
	sum(p.preco * c.quantidade) as valor_total_compras
from
	usuarios u
inner join
	compras c 
on
	c.usuario_id  = u.id
inner join 
	produtos p
on
	c.produto_id = p.id
group by 
	u.nome, u.id
order by
	valor_total_compras desc
limit 5;

-- 7 - Todos os usuários que compraram mais de 500.00 reais em compras

 -- sum( preco x quantidade  ) = Função para calcular a soma dos valores em um conjunto

select 
	u.nome as nome_usuario,
	sum(p.preco * c.quantidade) as valor_total_compras
from 
	usuarios u
inner join
	compras c 
on 
	u.id = c.usuario_id
inner join 
	produtos p
on
	p.id = c.produto_id
group by
	u.nome
having 
	sum(p.preco * c.quantidade) > 500.00
order by 
	valor_total_compras desc; 
