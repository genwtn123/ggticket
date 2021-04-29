import axios from 'axios';

const gethistory = 'http://localhost:12000/history';

class HistoryService {
    static async getHistory() {
        return  await axios.get(gethistory)
    }

}
export default HistoryService
