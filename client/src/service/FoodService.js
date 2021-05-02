import axios from 'axios';

const getFood = 'http://localhost:12000/food';

class FoodService {
    static async getFood() {
        return  await axios.get(getFood)
    }

}
export default FoodService
