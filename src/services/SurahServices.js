import axios from "axios";
import API from '../data/API';
import { Database, CloseConnection } from '../data/Database';

export const SurahServices = async () => {
    try {
        const db = await Database();
        const url = API.listSurah();
        const data = await axios.get(url);
        if (db) {
            try {
                await db.executeSql('SELECT * FROM Surah');
            } catch (error) {
                let result = await db.executeSql('CREATE TABLE IF NOT EXISTS Surah (arti,asma,audio,ayat,keterangan,nama,nomor,rukuk,type,urut)');
                if (result) {
                    let len = result[0].rows.length;
                    if (len < 1) {
                        if (data) {
                            data.data.map(async (item) => {
                                try {
                                    let data = await db.executeSql('INSERT INTO Surah (arti,asma,audio,ayat,keterangan,nama,nomor,rukuk,type,urut) VALUES (?,?,?,?,?,?,?,?,?,?)', [item.arti, item.asma, item.audio, item.ayat, item.keterangan, item.nama, item.nomor, item.rukuk, item.type, item.urut]);
                                } catch (error) {
                                    console.log("error");
                                }
                            });
                            await CloseConnection(db);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getListSurah = async () => {
    const db = await Database();
    try {
        let res = await db.executeSql('SELECT * FROM Surah');
        if (res) {
            let len = res[0].rows.length;
            let surah = [];
            for (let i = 0; i < len; i++) {
                let row = res[0].rows.item(i);
                let data = {
                    arti: row.arti,
                    asma: row.asma,
                    audio: row.audio,
                    ayat: row.ayat,
                    keterangan: row.keterangan,
                    nama: row.nama,
                    nomor: row.nomor,
                    rukuk: row.rukuk,
                    type: row.type,
                    urut: row.urut
                }
                surah.push(data);
            }
            return surah;
        }
    } catch (error) {
        console.log(error)
    }
}

