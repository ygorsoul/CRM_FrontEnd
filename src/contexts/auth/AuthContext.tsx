import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthUser {
  email: string;
}

interface AuthContextData {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mocked load user
    console.log('Mocked loadUser called');
    setTimeout(() => {
      setUser({ email: 'mock@example.com' });
      setIsLoading(false);
    }, 1000);
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log(`Mocked signIn called with email: ${email}`);
    setUser({ email });
  };

  const signUp = async (name: string, email: string, password: string) => {
    console.log(`Mocked signUp called with name: ${name}, email: ${email}`);
    setUser({ email });
  };

  const signOut = async () => {
    console.log('Mocked signOut called');
    setUser(null);
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        signIn,
        signUp,
        signOut,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
