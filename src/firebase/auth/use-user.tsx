'use client';

import { useState, useEffect } from 'react';

export function useUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock authentication check using localStorage
    const checkAuth = () => {
      const isAuth = localStorage.getItem('khata_admin_auth') === 'true';
      if (isAuth) {
        setUser({
          uid: 'mock-admin-id',
          email: 'Id1.Bhattacharjee75@khataquest.admin',
          displayName: 'Administrative Officer'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
    
    // Listen for storage changes (for cross-tab logout/login)
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return { user, loading };
}
