/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.12 : Database - blog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`blog` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `blog`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `pwd` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `admin` */

insert  into `admin`(`id`,`name`,`pwd`) values (1,'admin','07eb4078859d4ada177f925960301ccd'),(7,'lucy','b2a593963da5b0eda32ba9e57bc1bcf7');

/*Table structure for table `author` */

DROP TABLE IF EXISTS `author`;

CREATE TABLE `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `webo` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avtor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `author` */

insert  into `author`(`id`,`name`,`age`,`sex`,`introduce`,`qq`,`webo`,`email`,`avtor`) values (7,'111',12,1,'2131312312','222','222','2212','0cddf8b48c60a28511d51c008471106a.jpg');

/*Table structure for table `blog` */

DROP TABLE IF EXISTS `blog`;

CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createtime` varchar(60) DEFAULT NULL,
  `browse` int(11) DEFAULT '0',
  `like` int(11) DEFAULT '0',
  `detail` text,
  `is_carousel` int(2) DEFAULT '0',
  `is_header` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `blog` */

insert  into `blog`(`id`,`title`,`introduce`,`category_id`,`createtime`,`browse`,`like`,`detail`,`is_carousel`,`is_header`) values (6,'深入 js','深入 js',8,'3:11:04 PM',0,0,'深入 js深入 js深入 js深入 js深入 js',0,0),(7,'深入 css','深入 css深入 css深入 css深入 css深入 css深入 css',10,'3:11:20 PM',0,0,'深入 css深入 css深入 css深入 css深入 css',0,0),(8,'深入Vue','深入Vue深入Vue深入Vue',9,'2:23:34 PM',0,0,'深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue',1,0),(9,'深入Vue','深入Vue深入Vue深入Vue',9,'2:23:34 PM',0,0,'深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue深入Vue',1,1),(10,'深入Rect','深入Rect深入Rect深入Rect深入Rect',9,'2:23:34 PM',0,0,'深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect深入Rect',1,0),(11,'NBA开赛了.....','NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....',10,'2:37:10 PM',0,0,'NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....NBA开赛了.....',1,0);

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

/*Data for the table `category` */

insert  into `category`(`id`,`name`) values (8,'个人日志'),(9,'奇闻轶事'),(10,'js大前端'),(16,'个人杂谈'),(14,'朝花夕拾'),(15,'骆驼祥子');

/*Table structure for table `imgs` */

DROP TABLE IF EXISTS `imgs`;

CREATE TABLE `imgs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_src` varchar(255) DEFAULT NULL,
  `blog_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `imgs` */

insert  into `imgs`(`id`,`img_src`,`blog_id`) values (8,'116116c5f801c08e38a41b528dd35ec3.jpg',8),(6,'de2152e4620bff29f7ba32c175112602.jpg',7),(7,'4d2e5fd7db4a336648cbd26396c96372.jpg',6),(9,'4d2e5fd7db4a336648cbd26396c96372.jpg',9),(10,'4d2e5fd7db4a336648cbd26396c96372.jpg',10),(11,'4e8c721b09701af7b8b4df9f04b119ec.jpg',11);

/*Table structure for table `link` */

DROP TABLE IF EXISTS `link`;

CREATE TABLE `link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

/*Data for the table `link` */

insert  into `link`(`id`,`link_name`,`link_url`) values (5,'百度','https://www.baidu.com'),(6,'谷歌','https://www.google.com'),(7,'苹果官网','https://www.apple.com'),(9,'苹果中文官网','https://www.apple.com.cn'),(10,'青于蓝杨青青博客','https://www.yangqq.com'),(11,'张旭鑫个人博客','https://www.zhangxinxu.com/'),(12,'魅族官网','https://www.meizu.com/');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
