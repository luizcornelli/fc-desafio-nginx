const express = require('express');
const { Faker, faker } = require('@faker-js/faker');
const app = express();
const port = 3000;
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'desafio-fullcycle-db'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    
    const name = faker.person.firstName();

    connection.query(`INSERT INTO people (name) VALUES ('${name}')`, (error, results, fields) => {
        if (error) {
            console.error('Erro ao executar INSERT:', error);
            res.status(500).send('Erro interno no servidor.');
            return;
        }
        const sql = `SELECT * FROM people`; 

        connection.query(sql, (error, results, fields) => {
            if (error) {
                console.error('Erro ao executar SELECT:', error);
                res.status(500).send('Erro interno no servidor.');
                return;
            }

            let html = '<h1>Full Cycle Rocks!</h1>';
            results.forEach(row => {
                html += `<p>ID: ${row.id}, Name: ${row.name}</p>`;
            });
            res.send(html);
        });
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
