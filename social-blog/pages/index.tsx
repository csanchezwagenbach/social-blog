import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'csanchbach' }
      }}>
        <p>Colby's profile</p>
      </Link>
    </div>
  )
}
