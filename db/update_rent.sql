update houses
set name = $2
where id = $1;

select * from houses;
