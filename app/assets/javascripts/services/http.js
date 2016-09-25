/**
 * Created by sean on 22/09/2016.
 */
import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASE_PATH,
  headers: {'Access-Control-Allow-Origin': '*'}
});
