import { FC } from 'react';
import Navbar from '../components/Layout/Navbar'
import Header from '../components/Layout/Header'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
interface LayoutProps {
    children: any;
 }
export const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
        <main className={[inter.className, 'my-1 container'].join(' ')}>
            <Navbar/>
            <Header/>
            {props.children}
        </main>
    </>
  )
}