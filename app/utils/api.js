import md5 from 'md5';

const API_BASE_URL="https://gateway.marvel.com/v1/public/";
const API_PUBLIC_KEY="d6281ea587ce9d27242631582d25cff2";
const API_PRIVATE_KEY="a03f6cd6ed14c95ce386dd52fd58ecfd9b974240";

const getTimestamp = () => Date.now().toString();
const getHash = (timestamp) => md5(timestamp+API_PRIVATE_KEY+API_PUBLIC_KEY);

const timestamp = getTimestamp();
const hash = getHash(timestamp);

const query = `ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;


const handleResponse = async (response) => {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const characters = await response.json();
    return characters.data;
}


export const getCharacters = async () => {
    const url = `${API_BASE_URL}/characters?${query}`;
    const response = await fetch(url);
    
    return handleResponse(response);
}