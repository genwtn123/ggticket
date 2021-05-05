import axios from 'axios';

const getmovie = 'http://localhost:12000/movie';
const getrecommed = 'http://localhost:12000/ticket/getrecommend'
class MovieService {
    static async getMovie() {
        return  await axios.get(getmovie)
    }

    static async getRecommendMovie() {
        return await axios.get(getrecommed)
    }

}
export default MovieService
