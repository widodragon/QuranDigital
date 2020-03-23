import axios from "axios";
import API from '../data/API';
import { Database, CloseConnection } from '../data/Database';

export const AyatServices = async () => {
    try {
        const db = await Database();
        if (db) {
            try {
                await db.executeSql('SELECT * FROM Ayat');
            } catch (error) {
                let result = await db.executeSql('CREATE TABLE IF NOT EXISTS Ayat (identity,ar,id,nomor,tr)');
                if (result) {
                    console.log("success");
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const RecordAyat = async () => {
    try {
        const db = await Database();
        if (db) {
            try {
                await db.executeSql('SELECT * FROM Record');
            } catch (error) {
                let result = await db.executeSql('CREATE TABLE IF NOT EXISTS Record (identity,nomor,asma,arti,ar)');
                if (result) {
                    console.log("success");
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getListAyat = async (num) => {
    const db = await Database();
    let res = await db.executeSql('SELECT * FROM Ayat WHERE identity = ?', [num]);
    try {
        const url = API.listAyat(num);
        const data = await axios.get(url);
        if (res) {
            let len = res[0].rows.length;
            if (len < 1) {
                if (data) {
                    let array = data.data;
                    array.map(async (item) => {
                        try {
                            let insert = await db.executeSql('INSERT INTO Ayat (identity,ar,id,nomor,tr) VALUES (?,?,?,?,?)', [num.toString(), item.ar, item.id, item.nomor, item.tr]);
                        } catch (error) {
                            console.warn("error");
                        }
                    });
                    return array;
                }
            } else {
                let ayat = [];
                for (let i = 0; i < len; i++) {
                    let row = res[0].rows.item(i);
                    let data = {
                        ar: row.ar,
                        id: row.id,
                        nomor: row.nomor,
                        tr: row.tr,
                    }
                    ayat.push(data);
                }
                return ayat;
            }
        }
    } catch (error) {
        if (res) {
            let len = res[0].rows.length;
            let ayat = [];
            for (let i = 0; i < len; i++) {
                let row = res[0].rows.item(i);
                let data = {
                    ar: row.ar,
                    id: row.id,
                    nomor: row.nomor,
                    tr: row.tr,
                }
                ayat.push(data);
            }
            return ayat;
        }
    }
}

export const insertAyatToDatabase = async (identity, nomor, asma, arti, surah) => {
    const db = await Database();
    let res = await db.executeSql('SELECT * FROM Record WHERE identity = ? AND nomor = ?', [identity, nomor]);
    try {
        if (res) {
            let len = res[0].rows.length;
            if (len < 1) {
                try {
                    let insert = await db.executeSql('INSERT INTO Record (identity,nomor,asma,arti,ar) VALUES (?,?,?,?,?)', [identity.toString(), nomor.toString(), asma, arti, surah]);
                } catch (error) {
                    console.warn("error");
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getAyatFromDatabase = async () => {
    const db = await Database();
    let res = await db.executeSql('SELECT * FROM Record');
    try {
        if (res) {
            let len = res[0].rows.length;
            let record = [];
            for (let i = 0; i < len; i++) {
                let row = res[0].rows.item(i);
                let data = {
                    identity: row.identity,
                    nomor: row.nomor,
                    asma: row.asma,
                    arti: row.arti,
                    surah: row.ar
                }
                record.push(data);
            }
            return record;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export const removeItemFromDatabase = async (identity, nomor) => {
    const db = await Database();
    let res = await db.executeSql('SELECT * FROM Record WHERE identity = ? AND nomor = ?', [identity, nomor]);
    try {
        if (res) {
            let len = res[0].rows.length;
            if (len > 0) {
                try {
                    let insert = await db.executeSql('DELETE FROM Record WHERE identity = ? AND nomor = ? ', [identity.toString(), nomor.toString()]);
                } catch (error) {
                    console.warn("error");
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}