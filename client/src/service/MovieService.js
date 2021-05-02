import axios from 'axios';

const getmovie = 'http://localhost:12000/movie';

class MovieService {
    static async getMovie() {
        return  await axios.get(getmovie)
    }

}
export default MovieService
