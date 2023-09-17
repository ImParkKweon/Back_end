CREATE TABLE `product`.`usertable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `product`.`servicetable` (
  `username` char(200) NOT NULL,
  `os` varchar(45) DEFAULT NULL,
  `cpu` varchar(200) DEFAULT NULL,
  `volume` varchar(200) DEFAULT NULL,
  `gpu` varchar(200) DEFAULT NULL,
  `gpuCompany` varchar(45) DEFAULT NULL,
  `volumeCount` varchar(200) DEFAULT NULL,
  `ram` varchar(200) DEFAULT NULL,
  `serviceNum` int DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

