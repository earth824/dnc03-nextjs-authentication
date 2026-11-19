'use client';

import { loginAction } from '@/actions/auth';

export default function LoginPage() {
  return (
    <div>
      <form action={loginAction}>
        <div>
          <input type="text" placeholder="Email" name="email" />
        </div>
        <div>
          <input type="text" placeholder="Password" name="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
