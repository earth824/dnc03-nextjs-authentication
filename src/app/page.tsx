import { changePasswordAction, logoutAction } from '@/actions/auth';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  console.log(session);
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div>
      Welcome, {session.user.email}
      <div>
        <form action={logoutAction}>
          <button>Logout</button>
        </form>
      </div>
      <div>
        <form action={changePasswordAction}>
          <input type="text" placeholder="New password" />
          <button>Change Password</button>
        </form>
      </div>
    </div>
  );
}
