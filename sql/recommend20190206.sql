/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : recommend

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-02-06 20:52:42
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

-- ----------------------------
-- Table structure for graphics
-- ----------------------------
DROP TABLE IF EXISTS `graphics`;
CREATE TABLE `graphics` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL COMMENT '显卡名称',
  `brand` varchar(32) DEFAULT NULL,
  `price` double DEFAULT '0' COMMENT '价格',
  `capacity` int(3) DEFAULT NULL COMMENT '显卡容量',
  `chip` varchar(32) DEFAULT NULL COMMENT '显卡芯片',
  `image` varchar(255) DEFAULT NULL COMMENT '图片',
  `type` varchar(16) DEFAULT NULL COMMENT '显卡类型',
  `status` tinyint(4) DEFAULT '1' COMMENT '状态，1-正常，-1删除',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of graphics
-- ----------------------------
INSERT INTO `graphics` VALUES ('1', '七彩虹iGame GeForce RTX 2080 Ti Advanced OC', '七彩虹', '9999', '11', 'GeForce RTX 2080Ti', 'https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg', '发烧级', '1');
INSERT INTO `graphics` VALUES ('2', '华硕ROG STRIX-RTX 2080Ti-O11G-GAMING', '华硕', '13929', '11', 'GeForce RTX 2080Ti', 'https://2d.zol-img.com.cn/product/193_120x90/169/ceCiQbqOqNhfg.jpg', '发烧级', '1');
INSERT INTO `graphics` VALUES ('3', '影驰GeForce RTX 2060 GAMER', '影驰', '3199', '6', 'GeForce RTX 2060', 'https://2a.zol-img.com.cn/product/195_120x90/428/cenamwwKYJb9E.jpg', '主流级', '1');
INSERT INTO `graphics` VALUES ('4', '索泰GeForce GTX 1060-6GD5 X-Gaming OC', '索泰', '1999', '6', 'GeForce GTX 1060', 'https://2f.zol-img.com.cn/product/174_120x90/75/cem6nTr9gUdBU.jpg', '主流级', '1');
INSERT INTO `graphics` VALUES ('5', '七彩虹iGame750Ti 烈焰战神U-Twin-2GD5', '七彩虹', '999', '2', 'GeForce GTX 750Ti', 'https://2c.zol-img.com.cn/product/177_320x240/434/ceBfJpJGuS1dQ.jpg', '主流级', '1');

-- ----------------------------
-- Table structure for memory
-- ----------------------------
DROP TABLE IF EXISTS `memory`;
CREATE TABLE `memory` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL COMMENT '内存条名称',
  `brand` varchar(255) DEFAULT NULL COMMENT '品牌',
  `price` double DEFAULT '0' COMMENT '价格',
  `type` varchar(8) DEFAULT NULL COMMENT '内存条类型',
  `capacity` int(4) DEFAULT NULL COMMENT '内存容量',
  `image` varchar(255) DEFAULT NULL COMMENT '内存条图片',
  `frequency` double(5,0) DEFAULT NULL COMMENT '内存主频',
  `status` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of memory
-- ----------------------------
INSERT INTO `memory` VALUES ('1', '影驰GAMER 8GB DDR4 2400', '影驰', '459', 'DDR4', '8', 'https://2f.zol-img.com.cn/product/173_320x240/791/ceZMhVCgEfffk.jpg', '2400', '1');
INSERT INTO `memory` VALUES ('2', '海盗船复仇者LPX 8GB DDR4 3000（CMK8GX4M2B3000C15）', '海盗船', '429', 'DDR4', '8', 'https://2b.zol-img.com.cn/product/180_320x240/407/cea8g1AWP4LIg.jpg', '3000', '1');
INSERT INTO `memory` VALUES ('3', '金士顿HyperX Savage 8GB DDR4 2400（HX424C12SB/8）', '金士顿', '549', 'DDR4', '8', 'https://2d.zol-img.com.cn/product/166_320x240/775/ceRWLxM2PrHsw.jpg', '2400', '1');
INSERT INTO `memory` VALUES ('4', '金士顿骇客神条FURY 8GB DDR4 2400（HX424C15FB/8）', '金士顿', '469', 'DDR4', '8', 'https://2b.zol-img.com.cn/product/167_320x240/353/ceDh9tAMUGXcI.jpg', '2400', '1');
INSERT INTO `memory` VALUES ('5', '海盗船复仇者LPX 8GB DDR4 2400（CMK8GX4M1A2400C14）', ' 海盗船', '539', 'DDR4', '8', 'https://2f.zol-img.com.cn/product/153_320x240/803/ceRIPuC24LzB.jpg', '2400', '1');
