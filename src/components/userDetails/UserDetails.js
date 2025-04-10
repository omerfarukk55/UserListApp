
import React from 'react';
import './UserDetails.css';

function UserDetails({  user, onClose }) {
    if(!user) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>×</button>
            
            <div className="user-detail-header">
              <div className="large-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <h2>{user.name}</h2>
            </div>
    
            <div className="user-detail-info">
              <div className="info-group">
                <h3>Kişisel Bilgiler</h3>
                <p><strong>Kullanıcı Adı:</strong> {user.username}</p>
                <p><strong>E-posta:</strong> {user.email}</p>
                <p><strong>Telefon:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
              </div>
    
              <div className="info-group">
                <h3>Adres Bilgileri</h3>
                <p><strong>Şehir:</strong> {user.address.city}</p>
                <p><strong>Sokak:</strong> {user.address.street}</p>
                <p><strong>Apartman:</strong> {user.address.suite}</p>
                <p><strong>Posta Kodu:</strong> {user.address.zipcode}</p>
              </div>
    
              <div className="info-group">
                <h3>Şirket Bilgileri</h3>
                <p><strong>Şirket Adı:</strong> {user.company.name}</p>
                <p><strong>İş Tanımı:</strong> {user.company.catchPhrase}</p>
                <p><strong>Sektör:</strong> {user.company.bs}</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default UserDetails;