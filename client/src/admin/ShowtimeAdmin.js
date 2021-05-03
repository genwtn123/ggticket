import axios from 'axios';

const Showtime = 'http://localhost:12000/showtime';

class ShowtimeAdmin {
    static async getShowtime() {
        // console.log(await axios.get(Showtime))
        return await axios.get(Showtime)
    }

}
export default ShowtimeAdmin