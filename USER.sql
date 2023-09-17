CREATE TABLE `product`.`usertable` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `product`.`servicetable` (
  `username` char(200) NOT NULL,
  `os` varchar(45) DEFAULT NULL,
  `cpu` int DEFAULT NULL,
  `volume` int DEFAULT NULL,
  `gpu` int DEFAULT NULL,
  `gpuCompany` varchar(45) DEFAULT NULL,
  `volumeCount` int DEFAULT NULL,
  `ram` int DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

