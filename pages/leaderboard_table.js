import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import Head from 'next/head'
import Board from '@components/Leaderboard_Table/Board'
import styles from '../components/Leaderboard_Table/Leaderboard.module.css'

const leaderboard_table = () => {
    return (
        <>
            <Head>
                <title>NEURA AI </title>
                <meta
                    name="description"
                    content="Neura AI Flagship Tech Event"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>           
               <Board /> 
            </div>
            <Footer />
        </>
    )
}

export default leaderboard_table
