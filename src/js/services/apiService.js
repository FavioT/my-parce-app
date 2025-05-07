import { BASE_API_URL } from '../utils/helpers';

// ToDo: Cambiar esta clase a Singleton
export class ApiService {
    constructor(baseUrl = BASE_API_URL) {
        this.baseUrl = baseUrl;
    }

    async fetchData(queries = [], callback) {
        const query = queries.length
        ? queries.join('&')
            .replace(/,/g, '=')
            .replace(/ /g, '%20')
            .replace(/\+/g, '%2B')
        : '';

        const response = await fetch(`${this.baseUrl}${query ? `?${query}` : ''}`);
        if (!response.ok) {
            throw new Error('ERROR');
        }

        const data = await response.json();
        callback(data);
    }
}