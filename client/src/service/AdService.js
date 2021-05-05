import axios from 'axios';

const getad = 'http://localhost:12000/ad';
const createad ='http://localhost:12000/ad/create';
const editad ='http://localhost:12000/ad/edit';
const delad = 'http://localhost:12000/ad/delete';

class AdService {
    static async getad() {
        return  await axios.get(getad)
    }
    static async createad(form) {
        console.log(form)
        return await axios.post(createad, form)
    }
    static async editad(form, id) {
        console.log(form);
        return await axios.put(editad+'/'+id, form)
    }
    static async delad(index){
        return await axios.delete(delad, index)
    }

}
export default AdService
