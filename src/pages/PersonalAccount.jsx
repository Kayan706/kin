import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function PersonalAccount() {
    const {user} = useContext(UserContext)
     if (!user) {
        return <p>Вы не авторизованы</p>;
  }
    
  return (
    <div>
      <h1>Личный кабинет</h1>
      {user ? (
        <>
          <p>Почта: {user.email}</p>
        </>
      ) : (
        <p>Пользователь не авторизован</p>
      )}
    </div>
  );
}

export default PersonalAccount