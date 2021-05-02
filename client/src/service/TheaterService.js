import axios from 'axios';

const Theater = 'http://localhost:12000/showtime';
const Seat = 'http://localhost:12000/showtime/getseat';

class TheaterService {
    static async getTheater() {
        // console.log(await axios.get(Theater))
        return  await axios.get(Theater)
    }

    static async getSeat(show){
        return  await axios.post(Seat, show)
    }

}
export default TheaterService
