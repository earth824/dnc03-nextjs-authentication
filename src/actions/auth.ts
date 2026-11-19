'use server';

import { auth, signIn, signOut } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const input = {
    email: formData.get('email'),
    password: formData.get('password')
  };
  try {
    await signIn('credentials', input); // authorize(input)
  } catch {}
  redirect('/');
}

export async function logoutAction() {
  await signOut({ redirectTo: '/login' });
}

export async function changePasswordAction() {
  // logic to update user password
  const session = await auth();
  if (!session?.user) {
    throw new Error('Auth token required');
  }
  // await prisma.user.update({
  //   where: { email: session.user.email }
  // });
}
