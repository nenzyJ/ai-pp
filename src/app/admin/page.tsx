import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
import AdminDashboard from './AdminDashboard';

async function AdminPage(){

    const user = await currentUser();
    // user isn`t logged in
    if(!user) redirect("/")
    const adminEmail = process.env.ADMIN_EMAIL;
    const userEmail = user.emailAddresses[0]?.emailAddress;
    //user isn`t admin
    if(!adminEmail || userEmail !== adminEmail) redirect("/dashboard")
  return <AdminDashboard/>
}

export default AdminPage
