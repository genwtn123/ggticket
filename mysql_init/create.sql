use mydatabase;

create table USER(
    `user_id` int(10) primary key auto_increment,
    `username` varchar(255) unique,
    `password` varchar(255),
    `user_fname` varchar(255),
    `user_lname` varchar(255),
    `user_tel` char(10),
    `user_email` varchar(255) unique,
    `user_image` varchar(255),
    `type` ENUM('AUDIENCE', 'STAFF') not null
);

create table AUDIENCE(
    `audience_id` int(10) auto_increment,
    `user_id` int(10),
    primary key(`audience_id`, `user_id`),
    foreign key(`user_id`) references USER(`user_id`)
);

create table `THEATER_STAFF`(
    `staff_id` int(10) auto_increment,
    `user_id` int(10) ,
    primary key(`staff_id`, `user_id`),
    foreign key(`user_id`) references USER(`user_id`)
);

create table ADVERTISEMENT(
    `ad_id` int(10) auto_increment,
    `ad_name` varchar(255),
    `ad_detail` varchar(255),
    `ad_image`varchar(255),
    `staff_id` int(10) not null,
    primary key(`ad_id`),
    foreign key(`staff_id`) references `THEATER_STAFF`(`staff_id`)
);

create table MOVIE(
    `movie_id` int(10) auto_increment,
    `movie_name` varchar(255),
    `movie_type` varchar(255),
    `viewer` int(10),
    `movie_length` int(10),
    `movie_image` varchar(255),
    `movie_status` boolean,
    `movie_releasetime` DATE,
    `movie_language` varchar(255),
    `staff_id` int(10) not null,
    primary key(`movie_id`)
);

create table THEATER(
    `theater_id` int(10) auto_increment,
    `theater_name` varchar(255),
    `theater_size` ENUM('S', 'M', 'L'),
    `theater_status` boolean,
    `showtheater` boolean,
    primary key(`theater_id`)
);

create table SHOWTIME(
    `showtime_no` int(10) auto_increment,
    `time_start` datetime default now(),
    `time_finish` datetime default now(),
    `showtime_status` boolean,
    `movie_id` int(10) not null,
    `staff_id` int(10) not null,
    `theater_id` int(10) not null,
    primary key(`showtime_no`),
    foreign key(`movie_id`) references MOVIE(`movie_id`),
    foreign key(`staff_id`) references THEATER_STAFF(`staff_id`),
    foreign key(`theater_id`) references THEATER(`theater_id`)
);

create table TICKET(
    `ticket_id` int(10) auto_increment,
    `ticket_price` float(8,2),
    `ticket_datetime` DATETIME,
    `ticket_status` boolean,
    `audience_id` int(10) not null,
    `showtime_no` int(10) not null,
    primary key(`ticket_id`),
    foreign key(`audience_id`) references AUDIENCE(`audience_id`),
    foreign key(`showtime_no`) references SHOWTIME(`showtime_no`)
);

create table SEAT(
    `seat_no` int(10) auto_increment,
    `seat_name` varchar(255),
    `type_of_seat` ENUM('honeymoon', 'normal'),
    `seat_price` float(8, 2),
    `seat_status` boolean,
    `theater_id` int(10) not null,
    primary key(`seat_no`),
    foreign key(`theater_id`) references THEATER(`theater_id`)
);

create table TICKET_SEAT(
    `TICKET_SEAT_id` int(10) auto_increment,
    `ticket_id` int(10),
    `seat_no` int(10),
    primary key (`TICKET_SEAT_id`),
    foreign key (`ticket_id`) references TICKET(`ticket_id`),
    foreign key (`seat_no`) references SEAT(`seat_no`)
);


create table FOOD(
    `food_id` int(10) auto_increment,
    `food_name` varchar(255),
    `food_image` varchar(255),
    `food_price` float(8,2),
    `staff_id` int(10) not null,
    `food_status` boolean,
    primary key(`food_id`),
    foreign key(`staff_id`) references THEATER_STAFF(`staff_id`)
);

create table TICKET_FOOD(
    `TICKET_FOOD_id` int(10) auto_increment,
    `food_id` int(10),
    `unit` int(10),
    `ticket_id` int(10),
    primary key(`TICKET_FOOD_id`),
    foreign key(`food_id`) references FOOD(`food_id`),
    foreign key(`ticket_id`) references TICKET(`ticket_id`)
);
