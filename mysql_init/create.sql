use mydatabase;

create table USER(
    `user_id` int(10) primary key auto_increment,
    `username` varchar(255) unique,
    `password` varchar(255),
    `user_fname` varchar(255),
    `user_lname` varchar(255),
    `user_tel` char(10),
    `user_email` varchar(255) unique,
    `type` ENUM('CUSTOMER', 'ADMIN') not null
);

create table CUSTOMER(
    `cus_id` int(10) auto_increment,
    `user_id` int(10),
    primary key(`cus_id`, `user_id`),
    foreign key(`user_id`) references USER(`user_id`)
);

create table `ADMIN`(
    `admin_id` int(10) auto_increment,
    `user_id` int(10) ,
    primary key(`admin_id`, `user_id`),
    foreign key(`user_id`) references USER(`user_id`)
);

create table ADVERTISEMENT(
    `ad_id` int(10) auto_increment,
    `ad_name` varchar(255),
    `ad_detail` varchar(255),
    `ad_image`varchar(255),
    `admin_id` int(10) not null,
    primary key(`ad_id`),
    foreign key(`admin_id`) references `ADMIN`(`admin_id`)
);

create table MOVIE(
    `movie_id` int(10) auto_increment,
    `movie_name` varchar(255),
    `movie_type` varchar(255),
    `viewer` int(10),
    `movie_length` int(10),
    `movie_image` varchar(255),
    `movie_status` boolean,
    `admin_id` int(10) not null,
    primary key(`movie_id`),
    foreign key(`admin_id`) references `ADMIN`(`admin_id`)
);

create table TICKET(
    `ticket_id` int(10) auto_increment,
    `price` float(8,2),
    `cus_id` int(10) not null,
    `movie_id` int(10) not null,
    primary key(`ticket_id`),
    foreign key(`cus_id`) references CUSTOMER(`cus_id`),
    foreign key(`movie_id`) references MOVIE(`movie_id`)
);

create table THEATER(
    `theater_id` int(10) auto_increment,
    `price` float(8,2),
    primary key(`theater_id`)
);

create table MOVIE_THEATER(
    `movie_id` int(10),
    `theater_id` int(10),
    primary key(`movie_id`, `theater_id`),
    foreign key(`movie_id`) references MOVIE(`movie_id`),
    foreign key(`theater_id`) references THEATER(`theater_id`)
);

create table SEAT(
    `seat_no` int(10) auto_increment,
    `type_of_seat` ENUM('honeymoon', 'normal'),
    `seat_status` boolean,
    `theater_id` int(10) not null,
    primary key(`seat_no`),
    foreign key(`theater_id`) references THEATER(`theater_id`)
);

create table PAYMENT(
    `pay_id` int(10) auto_increment,
    `total` float(8,2),
    `pay_datetime` datetime default now(),
    `pay_status` boolean,
    `ticket_id` int(10) not null,
    primary key(`pay_id`),
    foreign key(`ticket_id`) references TICKET(`ticket_id`)
);

create table SHOWTIME(
    `showtime_no` int(10) auto_increment,
    `time_start` datetime default now(),
    `time_finish` datetime default now(),
    `movie_id` int(10),
    primary key(`showtime_no`, `movie_id`),
    foreign key(`movie_id`) references MOVIE(`movie_id`)
)