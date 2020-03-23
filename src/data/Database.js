import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "QuranBionic.db";
const database_version = "1.0";
const database_displayname = "SQLite Offline Database";
const database_size = 200000;

export const Database = () => {
    const db = SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
    );
    return db;
}

export const CloseConnection = async (db) => {
    try {
        if (db) {
            console.log("Closing DB");
            db.close()
                .then(status => {
                    console.log("Database CLOSED");
                })
                .catch(error => {
                    this.errorCB(error);
                });
        } else {
            console.log("Database was not OPENED");
        }
    } catch (error) {
        console.log(error);
    }
}