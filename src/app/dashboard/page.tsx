import React from 'react';
import { redirect } from "next/navigation";
import { getSession, logout } from "../../utils/auth";
import { Nav } from 'app/components/other/Nav';
import { Sidebar } from 'app/components/other/Sidebar';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) {
    // redirect("/login");
  }
  return (
    <div>
      <Sidebar />
      <h1>Dashboard</h1>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/home");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

