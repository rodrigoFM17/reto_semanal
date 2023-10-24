import Image from 'next/image'
import styles from './page.module.css'
import Productos from '@/components/Productos/Productos'


export default function Home() {
  return (
    <main className={styles.main}>
      <Productos/>
    </main>
  )
}
