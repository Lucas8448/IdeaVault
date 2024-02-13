'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/components/context/Auth';

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loginWithGoogle, loginWithGithub } = useAuth();

  const handleLogin = async (provider: string) => {
    try {
      await (provider === 'google' ? loginWithGoogle() : loginWithGithub());
  
      const redirectPath = searchParams.get('redirect') || '/portal';
      router.push(redirectPath);
    } catch (error) {
      console.error('Failed to log in:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button onClick={() => handleLogin('google')} className="btn-google">Login with Google</button>
      <button onClick={() => handleLogin('github')} className="btn-github">Login with GitHub</button>
    </div>
  );
};

export default LoginPage;
