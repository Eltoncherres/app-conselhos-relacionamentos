// Sistema de autenticação simples (sem API externa)

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  isAdmin: boolean;
}

const USERS_KEY = 'psicologo_users';
const CURRENT_USER_KEY = 'psicologo_current_user';
const ADMIN_EMAIL = 'eltoncherresaguiar@gmail.com';

export const getUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users: User[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user: User | null) => {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

export const register = async (name: string, email: string, password: string): Promise<{ success: boolean; message: string; user?: User }> => {
  const users = getUsers();
  
  // Verificar se email já existe
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'Este email já está cadastrado' };
  }

  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    createdAt: new Date().toISOString(),
    isAdmin: email.toLowerCase() === ADMIN_EMAIL.toLowerCase()
  };

  users.push(newUser);
  saveUsers(users);

  return { success: true, message: 'Conta criada com sucesso!', user: newUser };
};

export const login = (email: string, password: string): { success: boolean; message: string; user?: User } => {
  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return { success: false, message: 'Email ou senha incorretos' };
  }

  setCurrentUser(user);
  return { success: true, message: 'Login realizado com sucesso!', user };
};

export const logout = () => {
  setCurrentUser(null);
};
