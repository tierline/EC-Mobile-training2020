import axios from 'axios';
import {url} from '../../settings/properties';

export const fetchProduct = async () => {
  const path = `${url}/api/common/products`;
  const response = await axios.get(path);
  return response.data;
};
