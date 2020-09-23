DROP TABLE IF EXISTS produit;

CREATE TABLE `produit` (
    `ID` INT NOT NULL AUTO_INCREMENT ,
    `NOM` VARCHAR(250) NOT NULL ,
    `CODE` VARCHAR(250) NOT NULL ,
    `VALIDITE` DATE NOT NULL ,
     `PRIX` DOUBLE NOT NULL ,
     PRIMARY KEY (`ID`)
);

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
);

INSERT INTO produit (nom, code, validite, prix) VALUES
  ('Baume Fosa 10g', 'BF', '2021-02-27', 23),
  ('Baume du tigre phyto-puissant', 'FA', '2021-02-27', 44),
  ('Mini humidificateur', 'KC9', '2021-02-27', 421);