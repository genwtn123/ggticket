import axios from 'axios';

const Showtime = 'http://localhost:12000/showtime';
const addShowtime = 'http://localhost:12000/showtime/add';

class ShowtimeAdmin {
    static async getShowtime() {
        // console.log(await axios.get(Showtime))
        return await axios.get(Showtime)
    }

    static async addShowtime(form) {
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log(json);
        return await axios.post(addShowtime, json)

    }
}
export default ShowtimeAdmin