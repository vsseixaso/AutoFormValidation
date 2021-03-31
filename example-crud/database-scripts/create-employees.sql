CREATE TABLE `employees` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `birth` date NOT NULL,
  `gender` char(1) NOT NULL,
  `height` int DEFAULT NULL,
  `weight` decimal(5,2) DEFAULT NULL,
  `has_children` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
)