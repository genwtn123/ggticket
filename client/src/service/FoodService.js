import axios from 'axios';

const getFood = 'http://localhost:12000/food';
const createFood = 'http://localhost:12000/food/create';
const editFood = 'http://localhost:12000/food/edit';
const delFood = 'http://localhost:12000/food/delete';


class FoodService {
    static async getFood() {
        return  await axios.get(getFood)
    }
    static async createFood(form) {
        // var object = {};
        // form.forEach((value, key) => object[key] = value);
        // var data = JSON.stringify(object);
        // var json = JSON.parse(data);
        // console.log(json);
        console.log(form)
        return await axios.post(createFood, form)
    }
    static async editFood(form, id) {
        console.log(form);
        return await axios.put(editFood+'/'+id, form)
    }
    static async delFood(id){
        return await axios.delete(delFood+'/'+id)
    }


}
export default FoodService
