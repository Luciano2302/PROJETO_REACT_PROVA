// src/components/UserList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from '../redux/store';  // Tipo de RootState
import { fetchUsers } from '../redux/actions/userActions';  // Ação do Redux
import { User } from '../types/user';  // Tipo User


const UserList: React.FC = () => {
  const dispatch: Dispatch = useDispatch();  // Usando useDispatch sem tipagem explícita
  const { users, loading, error } = useSelector((state: RootState) => state.users); // Obter dados do Redux

  useEffect(() => {
    dispatch(fetchUsers());  // Dispara a ação para buscar os usuários
  }, [dispatch]);

  if (loading) {
    return <div>Carregando...</div>;  // Exibe enquanto os dados estão sendo carregados
  }

  if (error) {
    return <div>{error}</div>;  // Exibe se houve erro na requisição
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user: User) => (  // Agora com a tipagem do usuário
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
