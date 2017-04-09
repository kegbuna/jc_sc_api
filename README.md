# CodeForJC JCPD Service Call API

## Core Technologies
* [Node](nodejs.org)
* [restify](http://restify.com/)
* [Sequelize](http://docs.sequelizejs.com)

## Configuration
In `config` directory:

sequelize.json:
```json
{
  "host": "localhost",
  "dialect": "postgres",
  "database": "<db>",
  "port": 5432,
  "user": "<user>",
  "password": "<password>"
}
```

server.json
```json
{
  "name": "JCPD Service Call API",
  "port": 8080,
  "resultLimit": 1000
}
```