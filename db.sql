CREATE TABLE IF NOT EXISTS `pessoa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) COLLATE utf8_unicode_ci DEFAULT NOT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci DEFAULT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


INSERT INTO `pessoa` (`id`, `nome`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Luke', 'luke@email.com', '2021-07-29 21:30:53', '2021-07-29 21:30:53');
COMMIT;