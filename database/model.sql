create table admins (
    id serial not null primary key, 
    name varchar(255) not null,
    username varchar(255) not null,
    password text not null,
    created_at timestamptz not null default now()
);

-- "username": "Aziko0107",
-- "password": "password"

-- "username": "Admin",
-- "password": "admin"

create table courses(
    id serial not null primary key,
    image text not null,
    course text not null,
    valume int not null
);

create table popular(
    id serial not null primary key,
    image text not null,
    course text not null,
    valume int not null
);

create table experts(
    id serial not null primary key,
    image text not null,
    course text not null,
    valume text not null
);

