// src/components/UserList.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';
import axios from 'axios';

jest.mock('axios');  // Faz o mock da biblioteca axios para controle dos testes

const axiosGetMock = axios.get as jest.Mock;


test('carrega e exibe os usuários', async () => {
  // Mock da resposta da API
  axiosGetMock.mockResolvedValue({
    data: [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    ]
  });

  render(<UserList />);  // Renderiza o componente

  // Espera até que o nome dos usuários seja exibido
  await screen.findByText('John Doe');
  
  // Verifica se os usuários foram exibidos corretamente
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
});
