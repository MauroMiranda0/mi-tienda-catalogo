import React, { useState } from 'react';
import styles from './Contacto.module.css'; // Crea este archivo CSS

function Contacto() {
  // 1. Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // Para mensajes de éxito o error

  // 2. Manejador para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 3. Manejador para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página
    setStatus('Enviando...');
    
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setStatus(data.message);
        // Limpiar el formulario
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Hubo un error al enviar el mensaje.');
      }
    })
    .catch(() => {
      setStatus('Hubo un error de conexión.');
    });
  };

  return (
    <div className={styles.container}>
      <h1>Ponte en Contacto</h1>
      <p>¿Tienes alguna pregunta? Rellena el formulario y te responderemos pronto.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
      </form>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </div>
  );
}

export default Contacto;