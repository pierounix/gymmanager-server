SET FOREIGN_KEY_CHECKS=0;

TRUNCATE TABLE MEMBER;

INSERT INTO `member` (`ID`,`first_name`,`last_name`,`date_of_birth`,`expiry_date`,`address`,`telephone`,`member_status`,`sheet`) VALUES (1,'Piero','Uniti','1985-07-31','2020-07-31','via Starza','3348528582','Attivo','SI');
INSERT INTO `member` (`ID`,`first_name`,`last_name`,`date_of_birth`,`expiry_date`,`address`,`telephone`,`member_status`,`sheet`) VALUES (2,'Sara','Abbatiello','1993-07-05','2020-07-31','c.da Traugnano,6','3348528582','Attivo','SI');
INSERT INTO `member` (`ID`,`first_name`,`last_name`,`date_of_birth`,`expiry_date`,`address`,`telephone`,`member_status`,`sheet`) VALUES (3,'Argento','Vincenzo','1989-04-14','2019-07-31','via Pennino,47','3348528583','Scaduto','NO');



TRUNCATE TABLE SHEET;

INSERT INTO `sheet` (`ID`,`id_member`,`start_date`,`end_date`,`sheet_name`) VALUES (1,1,'2019-01-01','2019-02-01','Tonificazione');
INSERT INTO `sheet` (`ID`,`id_member`,`start_date`,`end_date`,`sheet_name`) VALUES (2,2,'2019-01-01','2019-02-01','Massa');
INSERT INTO `sheet` (`ID`,`id_member`,`start_date`,`end_date`,`sheet_name`) VALUES (3,3,'2019-01-05','2019-03-01','Cardio');



TRUNCATE TABLE ICON;

INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Adduttori','../assets/images/adductormachine.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Affondi','../assets/images/affondi.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Bench Manubri','../assets/images/benchmanubri.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Bench Press','../assets/images/benchpress.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Curl Bicipiti','../assets/images/bicepscurl.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Cavi','../assets/images/cablemachine.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Chest Press','../assets/images/chestpress.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Crunch','../assets/images/crunchbench.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Hammer','../assets/images/hammercurl.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Alzate Laterali','../assets/images/lateralraise.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Lat Machine','../assets/images/latmachine.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Leg Curl','../assets/images/legcurl.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Leg Press','../assets/images/legpress.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Alzate Gambe','../assets/images/legraise.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Tricipiti One Arm','../assets/images/onearmtriceps.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Pulley','../assets/images/pulley.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Spalle Cavi','../assets/images/pullup.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Tricipiti Cavi','../assets/images/pushdown.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Rematore','../assets/images/rematore.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Squat','../assets/images/squat.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Tapis Roulant','../assets/images/tapisroulant.png');
INSERT INTO `fitgym`.`icon`(`id`,`title`,`path`) VALUES (null, 'Pull Over','../assets/images/tricepsextension.png');