import axios from 'axios';

const getad = 'http://localhost:12000/ad';

class AdService {
    static async getad() {
        return  await axios.get(getad)
    }

}
export default AdService
