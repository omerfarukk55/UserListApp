import React from 'react';
import './UserList.css';

function UserList({ users,onUserClick }) {
  return (
    <div className="user-list-container">
        {/* Kullanıcıların listesini render et if else yapısı ile kullanıcının olup olmadığını kontrol et */}
      {users.length === 0 ? (
        <p className="no-results">Kullanıcı bulunamadı.</p>
      ) : (
        <div className="user-grid">
             {/*bu kısımda kullanıcının tıklanmasını sağlamak için onClick eventi ekledik*/}
          {users.map(user => (
            <div key={user.id} className="user-card" onClick={()=>onUserClick(user)}>
              <div className="avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-email">
                  <i className="fas fa-envelope"></i>
                  {user.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;