'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/components/context/Auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function Page() {
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
      <Card>
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <CardDescription>Choose one of the providers to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => handleLogin('google')} variant="secondary">
            Log in with Google <Icons.google className="w-5 h-5 ml-2"/>
          </Button>
        </CardContent>
        <CardContent>
          <Button onClick={() => handleLogin('github')} variant="secondary">
            Log in with GitHub <Icons.gitHub className="w-5 h-5 ml-2"/>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
