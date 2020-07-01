-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fitgym
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `exercise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `muscle` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (30,'Crunch su panca piana','Posizione della panca 45°','Addominali','../assets/images/crunchbench.png'),(50,'Croci ai cavi','Portare i cavi in avanti all\'altezza delle spalle','Pettorali','../assets/images/cablemachine.png'),(51,'Lat Machine','Avanti','Dorsali','../assets/images/latmachine.png'),(52,'Alzate laterali','Alzate laterali in piedi','Spalle','../assets/images/lateralraise.png'),(56,'Martello','In piedi con manubri','Bicipiti','../assets/images/hammercurl.png'),(57,'French Press','Su panca','Tricipiti','../assets/images/tricepsextension.png'),(58,'Squat','Con bilanciere','Gambe','../assets/images/squat.png'),(59,'Alzate gambe','Portare le gambe ad angolo retto','Addominali','../assets/images/legraise.png');
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `icon`
--

DROP TABLE IF EXISTS `icon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `icon` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `icon`
--

LOCK TABLES `icon` WRITE;
/*!40000 ALTER TABLE `icon` DISABLE KEYS */;
INSERT INTO `icon` VALUES (1,'Adduttori','../assets/images/adductormachine.png'),(2,'Affondi','../assets/images/affondi.png'),(3,'Bench Manubri','../assets/images/benchmanubri.png'),(4,'Bench Press','../assets/images/benchpress.png'),(5,'Curl Bicipiti','../assets/images/bicepscurl.png'),(6,'Cavi','../assets/images/cablemachine.png'),(7,'Chest Press','../assets/images/chestpress.png'),(8,'Crunch','../assets/images/crunchbench.png'),(9,'Hammer','../assets/images/hammercurl.png'),(10,'Alzate Laterali','../assets/images/lateralraise.png'),(11,'Lat Machine','../assets/images/latmachine.png'),(12,'Leg Curl','../assets/images/legcurl.png'),(13,'Leg Press','../assets/images/legpress.png'),(14,'Alzate Gambe','../assets/images/legraise.png'),(15,'Tricipiti One Arm','../assets/images/onearmtriceps.png'),(16,'Pulley','../assets/images/pulley.png'),(17,'Spalle Cavi','../assets/images/pullup.png'),(18,'Tricipiti Cavi','../assets/images/pushdown.png'),(19,'Rematore','../assets/images/rematore.png'),(20,'Squat','../assets/images/squat.png'),(21,'Tapis Roulant','../assets/images/tapisroulant.png'),(22,'Pull Over','../assets/images/tricepsextension.png');
/*!40000 ALTER TABLE `icon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(80) DEFAULT NULL,
  `last_name` varchar(80) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  `sheet` varchar(3) DEFAULT NULL,
  `isAdmin` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'Piero','Uniti','','','1985-07-22','2018-12-24','via Starza, SNC','3348528582','Attivo','SI',0),(2,'Sara','Abbatiello','','','1993-07-04','2020-07-30','c.da Traugnano, 17','3348528582','Attivo','SI',0),(3,'Argento','Vincenzo','','','1989-04-14','2019-07-31','via Pennino,47','3348528583','Attivo','NO',0),(11,'Prova','Cognome','mail@prova.com','$2a$10$cGLAnAAdcAomJvdXNv4wR.wYitnwv8AsYUNMzZszyxeH6YZlB4GaO','1985-07-06','2019-07-06','via Molino Corte','3345676789','Attivo','SI',1);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sheet`
--

DROP TABLE IF EXISTS `sheet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sheet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_member` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `sheet_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sheet_ibfk_1` (`id_member`),
  CONSTRAINT `sheet_ibfk_1` FOREIGN KEY (`id_member`) REFERENCES `member` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sheet`
--

LOCK TABLES `sheet` WRITE;
/*!40000 ALTER TABLE `sheet` DISABLE KEYS */;
INSERT INTO `sheet` VALUES (1,1,'2018-12-27','2019-01-27','Tonificazione (primo mese)'),(2,2,'2018-12-29','2019-01-29','Massa'),(3,3,'2019-01-05','2019-03-01','Cardio'),(7,11,NULL,NULL,'Prima scheda');
/*!40000 ALTER TABLE `sheet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sheet_exercise`
--

DROP TABLE IF EXISTS `sheet_exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sheet_exercise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `exercise_title` varchar(255) DEFAULT NULL,
  `exercise_muscle` varchar(255) DEFAULT NULL,
  `id_sheet` int(11) DEFAULT NULL,
  `day` varchar(255) DEFAULT NULL,
  `exercise_mode` varchar(255) DEFAULT NULL,
  `num_exercise` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_sheet_fk_idx` (`id_sheet`),
  CONSTRAINT `id_sheet_fk` FOREIGN KEY (`id_sheet`) REFERENCES `sheet` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sheet_exercise`
--

LOCK TABLES `sheet_exercise` WRITE;
/*!40000 ALTER TABLE `sheet_exercise` DISABLE KEYS */;
INSERT INTO `sheet_exercise` VALUES (33,'Crunch su panca piana','Addominali',7,'Lunedì','3x4',1,'Nessuna'),(34,'Croci ai cavi','Pettorali',7,'Lunedì','3x8',2,NULL),(35,'Lat Machine','Dorsali',7,'Lunedì','4x10',3,NULL),(36,'Crunch su panca piana','Addominali',7,'Martedì','3x4',1,'Nessuna'),(37,'Croci ai cavi','Pettorali',7,'Martedì','3x8',2,NULL),(38,'Lat Machine','Dorsali',7,'Martedì','4x10',3,NULL);
/*!40000 ALTER TABLE `sheet_exercise` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-01 14:31:55
