require('dotenv').config()

if (!process.env.DATABASE_URL) {
    console.error('Please set DATABASE_URL before running this script. Aborting.')
    process.exit(1)
}

const pgp = require('pg-promise')()
const db = pgp(process.env.DATABASE_URL)

db.tx(t => t.batch([
    // drop all tables;
    t.none('DROP TABLE if exists users'),
    t.none('DROP TABLE if exists tasks'),

    // create all tables;
    t.none('CREATE TABLE users(id SERIAL, email TEXT NOT NULL, picture TEXT NOT NULL, name TEXT NOT NULL)'),
    t.none('CREATE TABLE tasks(id SERIAL, assignee TEXT NOT NULL, assigner TEXT NOT NULL, name TEXT NOT NULL, description TEXT NOT NULL, status TEXT NOT NULL)')

]))
    .then(() => console.log('SUCCESS'))
    .then(() => pgp.end())
    .catch(error => console.error('FAILED:', error))
