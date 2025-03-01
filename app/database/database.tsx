import * as SQLite from 'expo-sqlite';

const dbPromise = SQLite.openDatabaseSync('app.db');

export const initDatabase = () => {
    const db = dbPromise;
    db
    db.execSync(`CREATE TABLE IF NOT EXISTS daily (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pas TEXT NOT NULL,
            distance INTEGER NOT NULL,
            parcoursActuel INTEGER NOT NULL,
            pourcentageParcoursActuel INTEGER NOT NULL,
            date DATETIME NOT NULL
        );`);

    db.execSync(`CREATE TABLE IF NOT EXISTS parcours (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            distance INTEGER NOT NULL
        );`);

    db.execSync(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            distance INTEGER NOT NULL
        );`);
};

export const addDaily = (pas: string, distance: number, parcoursActuel: number, pourcentageParcoursActuel: number, date: Date) => {
    const db = dbPromise;
    db.execSync(`INSERT INTO daily (pas, distance, parcoursActuel, pourcentageParcoursActuel, date) 
        VALUES ('${pas}', '${distance}', '${parcoursActuel}', '${pourcentageParcoursActuel}', '${date}');`);
};

export const addParcours = (nom: string, distance: number) => {
    const db = dbPromise;
    db.execSync(`INSERT INTO parcours (nom, distance) VALUES ('${nom}', '${distance}');`);
};

export const addUser = (pseudo: string, pdp: string) => {
    const db = dbPromise;
    db.execSync(`INSERT INTO user (pseudo, pdp) VALUES ('${pseudo}', '${pdp}');`);
};

export const updateUser = (id: number, pseudo: string, pdp: string) => {
    const db = dbPromise;
    db.execSync(`UPDATE user SET pseudo = '${pseudo}', pdp = '${pdp}' WHERE id = ${id};`);
};