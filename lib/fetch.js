import axios from 'axios';
import { SERVER_API_URL, TIMEOUT } from '../constants/site-config';

export default axios.create({
  baseURL: SERVER_API_URL,
  timeout: TIMEOUT,
});
