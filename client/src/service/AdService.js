import axios from 'axios';

const getAd = 'http://localhost:12000/ad';
const createAd ='http://localhost:12000/ad/create';
const editAd ='http://localhost:12000/ad/edit';
const delAd = 'http://localhost:12000/ad/delete';


class AdService {
    static async getAd() {
        return  await axios.get(getAd)
    }
    static async createAd(form) {
        console.log(form)
        return await axios.post(createAd, form)
    }
    static async editAd(form, id) {
        console.log(form);
        return await axios.put(editAd+'/'+id, form)
    }
    static async delAd(id){
        return await axios.delete(delAd+'/'+id)


}
}
export default AdService
