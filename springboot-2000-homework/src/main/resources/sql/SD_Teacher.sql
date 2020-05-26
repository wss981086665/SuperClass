-- alter table SD_Teacher AUTO_INCREMENT=1;

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for SD_Teacher
-- ----------------------------
-- DROP TABLE IF EXISTS `SD_Teacher`;
CREATE TABLE `SD_Teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) DEFAULT NULL,
  `school` varchar(50) DEFAULT NULL,
  `institute` varchar(50) DEFAULT NULL,
  `profession` varchar(50) DEFAULT NULL,
  `course` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `tell` varchar(50) DEFAULT NULL,
  `pros1` varchar(255) DEFAULT NULL,
  `pros2` varchar(255) DEFAULT NULL,
  `pros3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
