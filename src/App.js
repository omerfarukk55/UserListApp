import React, { useEffect, useState } from 'react';
import './App.css';
import UserDetails from './components/userDetails/UserDetails';
import UserList from './components/userList/UserList';

function App() {
  // State tanımlamaları
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // API'den kullanıcı verilerini çekme işlemi
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUsers(data))
    .catch(error=>setError(error.message))
    .finally(()=>setLoading(false))
  },[])
  // Arama işlemi için filtreleme
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Kullanıcı kartına tıklama işlemi
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app">
      <h1>Kullanıcı Listesi</h1>
      {/* Arama input'u */}
      <input
        type="text"
        placeholder="İsim veya e-posta ile ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      {/* Yükleme durumu */}
      {loading && <p className="loading">Yükleniyor...</p>}
      
      {/* Hata durumu */}
      {error && <p className="error">Hata: {error}</p>}
      
      {/* Kullanıcı listesi */}
      {!loading && !error && <UserList users={filteredUsers} onUserClick={handleUserClick} />}
      
      {/* Seçili kullanıcı detayları */}
      {selectedUser && (
        <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;