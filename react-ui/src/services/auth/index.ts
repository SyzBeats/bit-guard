const logout = () => {
  localStorage.removeItem('token');

  localStorage.removeItem('user');

  window.location.href = '/';
};

export default { logout };
