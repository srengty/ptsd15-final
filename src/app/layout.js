'use client'
import Head from 'next/head';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import MainNavbar from "./navbar";
import NextTopLoader from 'nextjs-toploader';
import { SessionProvider } from 'next-auth/react';

export default function AppLayout({children,session}) {
  return (
    <SessionProvider session={session}>
      <html>
        <Head>
          <title>Home</title>
        </Head>
        <body>
          <NextTopLoader/>
          <MainNavbar />
          <Container>{children}</Container>
        </body>
      </html>
    </SessionProvider>
  );
}
