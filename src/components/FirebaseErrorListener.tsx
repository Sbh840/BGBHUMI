'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { toast } from '@/hooks/use-toast';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      toast({
        variant: 'destructive',
        title: 'Permission Denied',
        description: `You do not have permission to ${error.context.operation} at ${error.context.path}.`,
      });
      // In development, this will also bubble up to the Next.js error overlay if unhandled
      // console.error(error);
    };

    errorEmitter.on('permission-error', handlePermissionError);
    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, []);

  return null;
}
