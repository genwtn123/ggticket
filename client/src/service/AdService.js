import axios from 'axios';

const getAd = 'http://localhost:12000/ad';

class AdService {
    static async getAd() {
        return  await axios.get(getAd)
    }

}
export default AdService
