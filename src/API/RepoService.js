import axios from 'axios';

const URL = 'https://api.github.com/';
const USER_PER_PAGE = 10;

export default class RepoService {
    static async getAll(value, page = 1) {
        const response = await axios.get(`${URL}search/repositories?q=${value}&per_page=${USER_PER_PAGE}&page=${page}`)
        return response       
    }
}