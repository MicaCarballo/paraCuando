import axios from './axios.helpers';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
