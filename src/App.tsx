// src/App.tsx
import React from 'react';
import UserList from './components/UserList';  // Importa o componente UserList

const App: React.FC = () => {
  return (
    <div>
      <UserList />  {/* Renderiza o componente UserList */}
    </div>
  );
};

export default App;
