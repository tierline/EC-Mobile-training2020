import axios from 'axios'

export const fetchProduct = async () => {
  const url = 'http://10.0.2.2:8085/api/products';
  const response = await axios.get(url);
  // console.log(response.data);
  return response.data
};

