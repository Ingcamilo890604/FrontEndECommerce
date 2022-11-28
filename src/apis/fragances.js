import axios from 'axios';
const URL_BASE ="http://localhost:3000/api"

/**
 * Get a list of novelties
 *
 * @param {Object} body - Filter to apply to the query
 */
export async function getFragancesList(body) {

	const url = new URL(`${URL_BASE}/fragances`);
	const { data } = await axios.get(url.toString(), body) ;
	return data;
}