import axios from 'axios';

const Theater = 'http://localhost:12000/theater';
const addTheater = 'http://localhost:12000/theater/add';

class TheaterAdmin {
    static async getTheater() {
        // console.log(await axios.get(Theater))
        return await axios.get(Theater)
    }

    static async addTheater(form) {
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log(json);
        return await axios.post(addTheater, json)

    }

}
export default TheaterAdmin