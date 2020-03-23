import Variable from '../helpers/Variables';

const base_url = Variable.base_url;
class ListAPI {
    listSurah = () => {
        return `${base_url}/data.json?print=pretty`;
    }
    listAyat = (ayat) => {
        return `${base_url}/surat/${ayat}.json?print=pretty`;
    }
}
const API = new ListAPI();
export default API;
