SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `library` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `library` ;

-- -----------------------------------------------------
-- Table `library`.`watchers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`watchers` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `full_name` VARCHAR(45) NULL,
  `password` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `library`.`pupils`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`pupils` (
  `id` INT NOT NULL,
  `full_name` VARCHAR(45) NULL,
  `form` VARCHAR(10) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `index2` USING BTREE ON `library`.`pupils` (`full_name` ASC);

CREATE INDEX `FORM` ON `library`.`pupils` (`form` ASC);


-- -----------------------------------------------------
-- Table `library`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `isbn` VARCHAR(45) NULL,
  `quantity_initial` INT(5) NULL,
  `quantity_current` INT(5) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `library`.`books_authors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`books_authors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `books_id` INT NULL,
  `display_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `fk_books_idx` ON `library`.`books_authors` (`books_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`books_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`books_types` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `library`.`books_has_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`books_has_types` (
  `book_id` INT NOT NULL,
  `type_id` INT NOT NULL,
  PRIMARY KEY (`book_id`, `type_id`))
ENGINE = InnoDB;

CREATE INDEX `fk_types_idx` ON `library`.`books_has_types` (`type_id` ASC);


-- -----------------------------------------------------
-- Table `library`.`books_orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `library`.`books_orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pupils_id` INT NULL,
  `books_id` INT NULL,
  `timestamp_given` TIMESTAMP NULL,
  `timestamp_returned` TIMESTAMP NULL,
  `is_returned` INT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE INDEX `IS_RETURNED` USING BTREE ON `library`.`books_orders` (`is_returned` ASC);

CREATE INDEX `fk_books_idx` ON `library`.`books_orders` (`books_id` ASC);

CREATE INDEX `fk_pupils_idx` ON `library`.`books_orders` (`pupils_id` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
