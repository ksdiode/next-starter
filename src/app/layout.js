'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainFeaturedPost from '@/components/MainFeaturedPost';
import { Container, CssBaseline } from '@mui/material';
import './globals.css';
import Provider from './provider';

import { sections, mainFeaturedPost } from './testData';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Blog" sections={sections} />
            <MainFeaturedPost post={mainFeaturedPost} />
            {children}
          </Container>
          <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Provider>
      </body>
    </html>
  );
}
