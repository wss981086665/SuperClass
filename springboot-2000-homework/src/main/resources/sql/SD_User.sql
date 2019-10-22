/*数据库重新排序命令  alter table user AUTO_INCREMENT=1;*/
-- alter table SD_User AUTO_INCREMENT=1;

-- SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for SD_User
-- ----------------------------
-- DROP TABLE IF EXISTS `SD_User`;
-- CREATE TABLE `SD_User` (
--   `id` int(8) NOT NULL AUTO_INCREMENT,   -- 主键
--   `code` CHAR (8) DEFAULT NULL,           -- 注册号
--   `openid` varchar(50) DEFAULT NULL,      -- openid
--   `gender` INT (2) DEFAULT 0,             -- 性别  0：女   1：男
--   `name` CHAR (50) DEFAULT NULL,            -- 真实姓名
--   `creatTime` VARCHAR (25) DEFAULT NULL,  -- 注册时间
--   `isDelete` INT (2) DEFAULT 0,           -- 是否已删除
--   `con1` varchar(50) DEFAULT NULL,       -- 预留 1
--   `con2` varchar(50) DEFAULT NULL,
--   `con3` varchar(50) DEFAULT NULL,
--   `con4` varchar(50) DEFAULT NULL,
--   `con5` varchar(50) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
