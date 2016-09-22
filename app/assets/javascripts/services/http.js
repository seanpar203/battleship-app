/**
 * Created by sean on 22/09/2016.
 */
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api'
});
