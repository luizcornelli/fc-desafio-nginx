USE desafio-fullcycle-db;

CREATE TABLE IF NOT EXISTS people (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(200),
    PRIMARY KEY (id)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;