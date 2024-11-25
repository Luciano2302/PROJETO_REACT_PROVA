// src/redux/reducers/userReducer.ts
import { UserActionTypes } from '../actions/userActions';
import { User } from '../../types/user';

// Definindo o tipo do estado
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,  // Inicia o carregamento
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users:action.payload as User[],  // Atualiza os dados com a resposta da API
        loading: false,          // Finaliza o carregamento
      };
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        error: action.payload as string,  // Define a mensagem de erro
        loading: false,         // Finaliza o carregamento
      };
    default:
      return state;
  }
};

export default userReducer;
