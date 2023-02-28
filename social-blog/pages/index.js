import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import Loader from '../components/Loader'

import toast from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello toast!')}>Toast me</button>
    </div>
  )
}
