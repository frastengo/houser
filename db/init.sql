create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortage decimal,
    rent decimal
);

insert into houses (name, address, city, state, zip, img, mortage, rent)
values ('Triplex', '4567 S Road St', 'Orem', 'UT', 84097, 'https://cdn.vox-cdn.com/thumbor/H99X-ZQUz_SMGtsyehZxAt0ukOs=/0x0:950x713/1200x800/filters:focal(399x281:551x433)/cdn.vox-cdn.com/uploads/chorus_image/image/51189927/49818616-0.0.jpg', 2500, 3125),
('Mansion', '3849 West', 'Phoenix', 'AZ', 85034, 'https://static2.mansionglobal.com/production/media/article-images/bffe1680cb3a807c014b471251395b94/medium_20180710200007577835000000-o.jpg', 10000, 10000),
('Triplex2', '4567 N Road St', 'Orem', 'UT', 84057, 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkeithflamer%2Ffiles%2F2018%2F04%2FScreen-Shot-2018-04-16-at-4.27.39-PM-1200x730.jpg' 2500, 3125),
('Triplex3', '4567 West Road St', 'Orem', 'UT', 85097, 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkeithflamer%2Ffiles%2F2018%2F04%2FScreen-Shot-2018-04-16-at-4.27.39-PM-1200x730.jpg', 2500, 3125);

alter table houses
add img text;

alter table houses
add mortgage decimal;

alter table houses
add rent decimal;