import axios from 'axios';

const userService = {
  getUsers: async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data; // Retorna os dados dos usuários
  }
};

export default userService;
