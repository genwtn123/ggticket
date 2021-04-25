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

create table SHOWTIME(
    `showtime_no` int(10) auto_increment,
    `time_start` datetime default now(),
    `time_finish` datetime default now(),
    `movie_id` int(10) not null,
    `staff_id` int(10) not null,
    primary key(`showtime_no`),
    foreign key(`movie_id`) references MOVIE(`movie_id`),
    foreign key(`staff_id`) references THEATER_STAFF(`staff_id`)
);

create table TICKET(
    `ticket_id` int(10) auto_increment,
    `ticket_price` float(8,2),
    `ticket_datetime` DATETIME,
    `audience_id` int(10) not null,
    `showtime_no` int(10) not null,
    primary key(`ticket_id`),
    foreign key(`audience_id`) references AUDIENCE(`audience_id`),
    foreign key(`showtime_no`) references SHOWTIME(`showtime_no`)
);

create table THEATER(
    `theater_id` int(10) auto_increment,
    `theater_size` ENUM('S', 'M', 'L'),
    `movie_id` int(10),
    primary key(`theater_id`),
    foreign key(`movie_id`) references MOVIE(`movie_id`)
);

create table SEAT(
    `seat_no` int(10) auto_increment,
    `type_of_seat` ENUM('honeymoon', 'normal'),
    `seat_status` boolean,
    `seat_price` float(8, 2),
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

create table FOOD(
    `food_id` int(10) auto_increment,
    `food_name` varchar(255),
    `food_image` varchar(255),
    `food_price` float(8,2),
    `staff_id` int(10) not null,
    `ticket_id` int(10) not null,
    primary key(`food_id`),
    foreign key(`staff_id`) references THEATER_STAFF(`staff_id`),
    foreign key(`ticket_id`) references TICKET(`ticket_id`)
);