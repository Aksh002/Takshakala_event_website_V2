import { HButtonLight } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'
import { useState } from 'react'
import styles from '../../styles/About.module.css'
import Button from './Button'
import { Date } from './Date'
import Timer from './Timer'

const About = () => {
    const [showTimer, setShowTimer] = useState(true)

    return (
        <div className={styles.container} id = 'AboutUS'>
            <div className={styles.title_container}>
                <h1 className={styles.title} >
                  
                    What is -<span>MBOSC&nbsp;?</span>
                </h1>

                <p className={styles.content}>
                    MBOSC is one of the biggest Techincal community in the campus hosting a variety of events 
                    <br />
                    <br />
                    Dive into the world of  Open Source and other Technologies  where innovation meets implementation.
                    Join us to explore cutting-edge technologies, develop groundbreaking solutions, and shape the future! at
                    <h2>TAKSHAKALA 2.0</h2>

                </p>
                {/* <div className={styles.btn_container}>
                    <HButtonLight name="About Us" icon = {<ImArrowUpRight2/>}/>
                </div> */}
            </div>
            <div className={styles.date_container}>
                <div className={styles.left_date} >
                    <Date day="27" month="January" subtxt="th" />
                </div>
                <hr className={styles.line} />
                <div className={styles.right_date} >
                    <Date day="28" month="January" subtxt="th" />
                </div>
            </div>
            <br />
            <div className={styles.timer_container}>
                {showTimer ? (
                    <Timer setShowTimer={setShowTimer} />
                ) : (
                    <h1 className={styles.title}>
                        It&#39;s Show<span>time</span>
                    </h1>
                )}
            </div>
        </div>
    )
}

export default About