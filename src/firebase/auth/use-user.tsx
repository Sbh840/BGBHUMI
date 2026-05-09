'use client';

import { useState, useEffect } from 'react';

export function useUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock authentication check using localStorage
    const checkAuth = () => {
      const isAuth = localStorage.getItem('khata_admin_auth') === 'true';
      const storedAdminId = localStorage.getItem('khata_admin_id');
      if (isAuth) {
        const adminId = storedAdminId || 'bhattacharjee1980';
        setUser({
          uid: 'mock-admin-id',
          email: `${adminId}@banglarbhumigov.in`,
          displayName: adminId
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
