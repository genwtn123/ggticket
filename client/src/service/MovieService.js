import axios from 'axios';

const getmovie = 'http://localhost:12000/movie';

const createmovie = 'http://localhost:12000/movie/add';
const editmovie = 'http://localhost:12000/movie/edit';
const delmovie = 'http://localhost:12000/movie/delete';



const getrecommed = 'http://localhost:12000/ticket/getrecommend'

class MovieService {
    static async getMovie() {
        return  await axios.get(getmovie)
    }

    static async createmovie(form) {
        console.log("sss")
        return await axios.post(createmovie, form)
    }
    static async editmovie(form, id) {
        console.log(form);
        return await axios.put(editmovie+'/'+id, form)
    }
    static async delmovie(index){
        return await axios.delete(delmovie, index)
    }


    static async getRecommendMovie() {
        return await axios.get(getrecommed)
    }

}
export default MovieService
