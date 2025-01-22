import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import Head from 'next/head'
import { Event } from '@components/AllEvents/Event'
import styles from '../styles/Team.module.css'

const team = () => {
    return (
        <>
            <Head>
                <title>MBOSC - EVENTS </title>
                <meta
                    name="description"
                    content="MBOSC - TAKSHAKALA"
                />
                <link rel="icon" href="https://res.cloudinary.com/dnzxcafqa/image/upload/v1737528171/MBOSC_nfba7r.png" />
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Event />
            </div>
            <Footer />
        </>
    )
}

export default team
