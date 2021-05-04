import axios from 'axios';

const Theater = 'http://localhost:12000/theater';

class TheaterAdmin {
    static async getTheater() {
        // console.log(await axios.get(Theater))
        return await axios.get(Theater)
    }

}
export default TheaterAdmin