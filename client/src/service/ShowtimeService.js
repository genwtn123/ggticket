import axios from 'axios';

const getshowtime = 'http://localhost:12000/showtime';

class Showtime {
    static async getshowtime() {
        return  await axios.get(getshowtime)
    }

}
export default Showtime
