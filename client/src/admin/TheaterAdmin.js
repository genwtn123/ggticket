import axios from 'axios';

const Theater = 'http://localhost:12000/theater/a/';
const addTheater = 'http://localhost:12000/theater/add';
const delTheater = 'http://localhost:12000/theater/delete/';
const editTheater2 = 'http://localhost:12000/theater/edit/a/';
const editTheater = 'http://localhost:12000/theater/edit/';
const editSeat = 'http://localhost:12000/theater/edit/s/';

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

    static async editTheater2(form, id) {
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log(json);
        return await axios.put(editTheater2+id, json)

    }

    static async editTheater(form, id) {
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log(json);
        return await axios.put(editTheater+id, json)
    }

    static async editSeat(form, id) {
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log(json);
        return await axios.put(editSeat+id, json)
    }

    static async delTheater(id) {
        return await axios.delete(delTheater+id)
    }

}
export default TheaterAdmin