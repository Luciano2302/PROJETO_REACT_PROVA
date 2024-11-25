// src/redux/actions/userActions.ts
import { AppDispatch } from '../store';  // Importando o tipo do dispatch do store
import userService from '../../api/userService';
import { User } from '../../types/user';
import { UnknownAction } from 'redux';

// Tipos de ação
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Tipagem para a ação de sucesso
interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

// Tipagem para a ação de erro
interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

// Tipagem para a ação de requisição
interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

// Tipo geral da ação
export type UserActionTypes = FetchUsersRequestAction | FetchUsersSuccessAction | FetchUsersFailureAction | UnknownAction;

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      const users = await userService.getUsers();
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: users,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: 'Erro ao carregar dados',
      });
    }
  };
};
