import axios from 'axios';


const getMovie = 'http://localhost:12000/movie';
const createMovie = 'http://localhost:12000/movie/add';
const editMovie = 'http://localhost:12000/movie/edit';
const delMovie = 'http://localhost:12000/movie/delete';




const getrecommed = 'http://localhost:12000/ticket/getrecommend'

class MovieService {
    static async getMovie() {
        return  await axios.get(getMovie)
    }
    static async createMovie(form) {
        console.log(form)
        return await axios.post(createMovie, form)
    }
    static async editMovie(form, id) {
        console.log(form);
        return await axios.put(editMovie+'/'+id, form)
    }
    static async delMovie(id){
        return await axios.delete(delMovie+'/'+id)
    }


    static async getRecommendMovie() {
        return await axios.get(getrecommed)
    }

}
export default MovieService
