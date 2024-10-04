-- DQL - Linguagem de Consulta de Dados (SELECT)

-- SINTAXE 

/*
 * selecionar 
 * 		"colunas"
 * de 
 * 		"tabela"
 * onde 
 * 		"condição";
 * 
 **/

select 
	nome
from 
	produtos 
where
	preco = 10;
	
-- ALIAS (AS) = Renomeia as nossas colunas e tabelas temporariamente para melhorar visualização.
	
select 
	nome as nome_produto,
	preco as preco_produto
from
	produtos as prod;

-- DISTINCT - Remover os valor duplicados nos resultados.

select 
	distinct preco 
from
	produtos;

-- ORDER BY - Ordena os resultados retornados se baseando em uma ou mais colunas. ASC(crescente) DESC(decrescente) 
	
select 
	*
from 
	compras
order by 
	data_compra desc; 
	
-- GROUP BY - Agrupa linhas/registro que tem valores identicos.

select 
	usuario_id
from 
	compras
group by 
	usuario_id
order by 
	usuario_id asc; 

/*
 * 	[2, 3, 4, 2, 2, 3, 1]
 * 	[2, 3, 4, 1] 
 * */

-- HAVING - Filtra os resultados já agrupados (GROUP BY)

select 
	usuario_id,
	quantidade 
from 
	compras
group by 
	quantidade,
	usuario_id
having quantidade > 2; 


/*
 * PREDICADOS = Condições usadas em cosultas SQL = (WHERE)
*/

-- Igualdade =
select 
	nome,
	email 
from 
	usuarios u 
where 
	nome = 'Ana Silva';

-- Diferente de !=
select 
	nome,
	email 
from 
	usuarios u 
where 
	nome != 'Ana Silva';

-- Comparações < >
select 
	*
from 
	produtos p 
where 
	preco < 50;


-- E - AND  - &&
select 
	*
from 
	produtos p 
where 
	nome = 'Calça Jeans' and preco > 50;


-- Ou - OR
select 
	*
from 
	produtos p 
where 
	nome = 'Calça Jeans' or preco > 70;

-- Entre um intervalo - BETWEEN
select 
	nome,
	preco
from
	produtos
where 
	preco between 30 and 80
order by
	preco asc;

--

select 
	*
from 
	compras
where 
	data_compra between '2024-09-10' and '2024-09-17'
order by 
	data_compra asc; 
	
-- Busca padrões, sensitive case - LIKE ( %... termina com, ...% começa com,  %...% no meio da palavra )
select 
	nome
from
	usuarios
where 
	nome like 'a%'; -- .........a | a....... | ...a...

-- Busca padrões, insensitive case - ILIKE ( %... termina com, ...% começa com,  %...% no meio da palavra )
select 
	nome
from
	usuarios
where 
	nome ilike 'a%'; -- .........a | a....... | ...a...

	
-- Todos os produtos que começam com 'cam'	
select 
	* 
from 	
	produtos
where 
	nome ilike '%ca%';

-- Verifica se o valor está em lista - IN

-- [ 29,99, 39,99, 49,99, 50 ]

select 
	nome,
	preco
from
 	produtos p 
where 
	preco in (29.99, 39.99, 49.99, 50); -- (...lista para ser comparada)
	
-- Não - NOT
select
	nome
from 
	usuarios
where 
	not	nome ilike 'A%';


-- É nulo - IS NULL

select 
	*
from 
	produtos
where 	
	preco is null;


/*
 * JOINS - Os JOINs combinam dados de várias tabelas em consultas.
 * 
 * INNER JOIN = Retorna os registros que têm correspondência em ambas as tabelas. (padrão)
 * LEFT JOIN = Retorna todos os registros da tabela à esquerda, mesmo que não haja correspondência na tabela à direita.
 * RIGHT JOIN = Retorna todos os registros da tabela à direita, mesmo que não haja correspondência na tabela à esquerda.
 * FULL OUTER JOIN = Retorna todos os registros quando há uma correspondência em uma das tabelas.
 * 
 * ON = Operador utilizado para definir quais colunas devem ser comparadas p/ realizar a junção (PK = FK)
*/

-- INNER JOIN (padrão)

delete from 
	compras 
where
	usuario_id = 2;

select 
	u.nome as nome_usuario,
	c.data_compra
from 
	usuarios as u
inner join
	compras as c 
on u.id = c.usuario_id; 
	
-- LEFT JOIN 
select 
	u.nome as nome_usuario,
	c.data_compra
from
	usuarios u
left join 
	compras c 
on u.id = c.usuario_id;

-- RIGHT JOIN 

delete from 
	compras 
where 
	produto_id = 2;


select 
	u.nome as nome_usuario,
	c.data_compra,
	p.nome as nome_produto
from 
	usuarios as u
left join
	compras as c 
on 
	u.id = c.usuario_id
right join 
	produtos p 
on 
	c.produto_id = p.id;

-- FULL JOIN

select 
	u.nome as nome_usuario,
	p.nome as nome_produto,
	c.data_compra
from 
	usuarios as u
full join
	compras as c 
on 
	u.id = c.usuario_id
full join 
	produtos p 
on 
	c.produto_id = p.id;


-- ATIVIDADE: 

/* 1 - Listar todos os usuarios
 * 2 - Listar as compras de um usuario para o seu id (sem join)
 * 3 - Listar todos os produtos maior que 50,00
 * 4 - Mostrar todas as compras de um determinado produto (sem join)
 * 
 * 5 - Todos os usuários que compraram 'Calça Jeans'
 * 6 - O usuário que efetuo a compra de maior valor ( LIMIT - Pesquisar )
 * 7 - Todos os usuários que compraram mais de 500.00 reais em compras	JÁ FEITO EM CALL 
 */

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

	













