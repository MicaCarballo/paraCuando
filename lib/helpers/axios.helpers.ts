import axios from 'axios';
import cookies from 'js-cookie';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;
const TOKEN = typeof window !== 'undefined' ? cookies.get('token') : '';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

export default instance;
