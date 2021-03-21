import api from '../api';

const signIn = async (email, password) => {

  try {
      let response = await api.post('/auth/login', {
        email : email,
        password: password
      });

      const access_token = response.data.token;
      
      if (!access_token) {
        return {
          error: true,
          message: response.data.error
        }
      }
      
      localStorage.setItem('app@token', access_token);

      const user = response.data.data;
      const userName = response.data.data.name;

      localStorage.setItem('app@user', JSON.stringify(user));
      localStorage.setItem('app@userName', userName);
      
      return user;

   } catch (error) {
     console.log(error)
   }
    
  }

  export default {
    signIn
  }