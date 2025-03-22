import Head from 'next/head';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import MainNavbar from "./navbar";
import NextTopLoader from 'nextjs-toploader';

export default function AppLayout({children}) {
  return (
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
  );
}
