/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : recommend

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-02-06 16:35:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cpu
-- ----------------------------
DROP TABLE IF EXISTS `cpu`;
CREATE TABLE `cpu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL COMMENT 'CPU名称',
  `brand` varchar(32) DEFAULT NULL COMMENT 'CPU品牌',
  `price` double DEFAULT '0' COMMENT '价格',
  `series` varchar(64) DEFAULT NULL COMMENT '系列',
  `features` varchar(32) DEFAULT NULL COMMENT '特性',
  `slot` varchar(32) DEFAULT NULL COMMENT '插槽',
  `tag` varchar(255) DEFAULT NULL COMMENT '标签',
  `status` tinyint(4) DEFAULT '1' COMMENT '状态，1-正常，-1删除',
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cpu
-- ----------------------------
INSERT INTO `cpu` VALUES ('1', 'Intel 酷睿i9 9900K', 'Inter', '4999', '酷睿i9', null, 'LGA 1151', '', '1', 'https://2a.zol-img.com.cn/product/193_320x240/18/ceLz5Thur7Dqc.jpg');
INSERT INTO `cpu` VALUES ('2', 'AMD Ryzen 5 2600', 'AMD', '1359', 'Ryzen 5', null, '', null, '1', 'https://2f.zol-img.com.cn/product/190_320x240/513/ceBBflX8kQGEQ.jpg');
INSERT INTO `cpu` VALUES ('3', 'Intel 酷睿i5 8500', 'Inter', '1499', '酷睿i5', null, 'LGA 1151', null, '1', 'https://2b.zol-img.com.cn/product/190_320x240/577/cenD00LUkiNlI.jpg');
INSERT INTO `cpu` VALUES ('4', 'Intel 酷睿i5 8400', 'Inter', '1499', '酷睿i5', null, 'LGA 1151', null, '1', 'https://2e.zol-img.com.cn/product/190_320x240/766/ceTurXd1oIlEo.jpg');
INSERT INTO `cpu` VALUES ('5', ' Intel 酷睿i3 8100', 'Inter', '899', '酷睿i3', null, 'LGA 1151', null, '1', 'https://2e.zol-img.com.cn/product/186_320x240/176/cerPsZmWmwdoA.jpg');
