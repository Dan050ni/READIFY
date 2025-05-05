import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Obtener usuarios existentes
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Validar si ya existe
    const userExists = storedUsers.find((user) => user.username === username);
    if (userExists) {
      alert('El usuario ya existe');
      return;
    }

    // Agregar nuevo usuario
    storedUsers.push({ username, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    navigate('/login');
  };

  return (
    <form onSubmit={handleRegister}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Crear cuenta</h2>

      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
      />

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
