import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';
import Provider from './provider';

import { sections } from './testData';

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
          <Header title="Blog" sections={sections} />
          {children}
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        </Provider>
      </body>
    </html>
  );
}
