-- MySQL Workbench Forward Engineering

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- -----------------------------------------------------
-- Schema rick_and_morty
-- -----------------------------------------------------
-- CREATE SCHEMA IF NOT EXISTS `rick_and_morty` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- USE `rick_and_morty` ;

-- -----------------------------------------------------
-- Table `rick_and_morty`.`sessions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` VARCHAR(128) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `expires` INT UNSIGNED NOT NULL,
  `data` MEDIUMTEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`session_id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `rick_and_morty`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` VARCHAR(50) NOT NULL,
  `display_name` VARCHAR(45) NOT NULL,
  `issuer` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC))
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -----------------------------------------------------
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Roter12';
FLUSH PRIVILEGES;