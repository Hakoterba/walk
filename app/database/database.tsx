import * as SQLite from 'expo-sqlite';

const dbPromise = SQLite.openDatabaseAsync('app');

export const initDatabase = async () => {
    console.log('db created');
    const db = await dbPromise;
    db.execAsync(`CREATE TABLE IF NOT EXISTS daily (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pas TEXT NOT NULL,
            distance INTEGER NOT NULL,
            parcoursActuel INTEGER NOT NULL,
            pourcentageParcoursActuel INTEGER NOT NULL,
            date DATETIME NOT NULL
        );`);

    db.execAsync(`CREATE TABLE IF NOT EXISTS parcours (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            distance INTEGER NOT NULL
        );`);

    db.execAsync(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pseudo TEXT NULL,
            pdp TEXT NULL
        );`);
};

export const addDaily = async (pas: string, distance: number, parcoursActuel: number, pourcentageParcoursActuel: number, date: Date) => {
    const db = await dbPromise;
    db.runAsync(`INSERT INTO daily (pas, distance, parcoursActuel, pourcentageParcoursActuel, date) 
        VALUES ('${pas}', '${distance}', '${parcoursActuel}', '${pourcentageParcoursActuel}', '${date}');`);
};

export const addParcours = async (nom: string, distance: number) => {
    const db = await dbPromise;
    db.runAsync(`INSERT INTO parcours (nom, distance) VALUES (?, ?);`, [
        nom,
        distance
    ]);
};

export const addUser = async (pseudo: string, pdp: string) => {
    const db = await dbPromise;
    db.runAsync(`INSERT INTO user (pseudo, pdp) VALUES ('?', '?');`, [
        pseudo,
        pdp
    ]);
    console.log('user added');
    
};

export const updateUser = async (id: number, pseudo: string, pdp: string) => {
    const db = await dbPromise;
    db.runAsync(`UPDATE user SET pseudo = '?', pdp = '?' WHERE id = ?;`, [
        pseudo,
        pdp,
        id
    ]);
};

export const getUsers = async (callback: (users: any[]) => void) => {
    console.log("getUsers");
    const db = await dbPromise;
    db.execAsync(`SELECT * FROM user;`);
};