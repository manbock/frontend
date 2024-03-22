import axios from 'axios';

export const fetchFromAPI = async (keyword: string) => {
  try {
    const data = await axios.post('https://cafe24-proxy.bravo.dalpha.so/api/test/text-search', { keyword });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async (imageFile: File) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await axios.post('https://cafe24-proxy.bravo.dalpha.so/api/test/upload-image', formData);
    console.log(JSON.stringify(response.data.url));
    return response.data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const fetchImage = async (url: string) => {
  try {
    const data = await axios.post('https://cafe24-proxy.bravo.dalpha.so/api/test/image-search', {url});
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

