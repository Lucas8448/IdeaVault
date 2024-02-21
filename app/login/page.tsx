'use client'

import { SignUp } from "@clerk/nextjs";
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SignUp />
    </div>
  );
};
