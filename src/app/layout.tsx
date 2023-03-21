import { Open_Sans } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Footer from './footer';
import Header from './header';

const inter = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}