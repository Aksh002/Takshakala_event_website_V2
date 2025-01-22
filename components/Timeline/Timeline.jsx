import styles from './TL.module.css'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import Dcard from '@components/Accessories/dcard'
import Ecard from '@components/Accessories/ecard'
// import event from './event.json';
import { event } from '@data/timeline'

export default function Timeline() {
    const [day1, setday1] = useState(false)
    const [day2, setday2] = useState(false)
    const [day3, setday3] = useState(false)
    const [day4, setday4] = useState(true)
    const [day5, setday5] = useState(false)
    const [day6, setday6] = useState(false)

    const handleday1 = () => {
        setday1(true)
        setday2(false)
        setday3(false)
        setday4(false)
        setday5(false)
        setday6(false)
    }
    const handleday2 = () => {
        setday2(true)
        setday1(false)
        setday3(false)
        setday4(false)
        setday5(false)
        setday6(false)
    }
    const handleday3 = () => {
        setday3(true)
        setday2(false)
        setday1(false)
        setday4(false)
        setday5(false)
        setday6(false)
    }
    const handleday4 = () => {
        setday4(true)
        setday3(false)
        setday2(false)
        setday1(false)
        setday5(false)
        setday6(false)
    }
    const handleday5 = () => {
        setday5(true)
        setday4(false)
        setday3(false)
        setday2(false)
        setday1(false)
        setday6(false)
    }
    const handleday6 = () => {
        setday6(true)
        setday5(false)
        setday4(false)
        setday3(false)
        setday2(false)
        setday1(false)
    }

    return (
        <div className={styles.main} id="Events">
            <div className={styles.header}>
                <p className={styles.err}>Timeline</p>
            </div>
            <div className={styles.tabs}>
                <div className={styles.days}>
                    <div onClick={handleday1}>
                        <Dcard name="Day 1" day={day1} />
                    </div>
                    <div onClick={handleday2}>
                        <Dcard name="Day 2" day={day2} />
                    </div>
                </div>
                <div
                    className={classNames(
                        styles.events,
                        !day1 && styles.events2,
                    )}
                >
                    {event.map((item,index) => {
                        if (item.day === 1) {
                            return (
                                <Ecard
                                    key={item.id}
                                    name={item.name}
                                    time={item.time}
                                    venue={item.venue}
                                    link={item.link}
                                />
                            )
                        }
                    })}
                </div>
                <div
                    className={classNames(
                        styles.events,
                        !day2 && styles.events2,
                    )}
                >
                    {event.map((item,index) => {
                        if (item.day === 2) {
                            return (
                                <Ecard
                                    key={item.id}
                                    name={item.name}
                                    time={item.time}
                                    link={item.link}
                                />
                            )
                        }
                    })}
                </div>
                <div
                    className={classNames(
                        styles.events,
                        !day3 && styles.events2,
                    )}
                >
                    {event.map((item,index) => {
                        if (item.day === 3) {
                            return (
                                <Ecard
                                    key={item.id}
                                    name={item.name}
                                    time={item.time}
                                    link={item.link}
                                />
                            )
                        }
                    })}
                </div>
                <div
                    className={classNames(
                        styles.events,
                        !day4 && styles.events2,
                    )}
                >
                    {event.map((item,index) => {
                        if (item.day === 4) {
                            return (
                                <Ecard
                                    key={item.id}
                                    name={item.name}
                                    time={item.time}
                                    link={item.link}
                                />
                            )
                        }
                    })}
                </div>
                <div
                    className={classNames(
                        styles.events,
                        !day5 && styles.events2,
                    )}
                >
                    {event.map((item,index) => {
                        if (item.day === 5) {
                            return (
                                <Ecard
                                    key={item.id}
                                    name={item.name}
                                    time={item.time}
                                    link={item.link}
                                />
                            )
                        }
                    })}
                </div>
                <div
                    className={classNames(
                        styles.events,
                        !day6 && styles.events2,
                    )}
                >
                    {event.map((item,index) => {
                        if (item.day === 6) {
                            return (
                                <Ecard
                                    key={item.id}
                                    name={item.name}
                                    time={item.time}
                                    link={item.link}
                                />
                            )
                        }
                    })}
                </div>
            </div>
            <div className={styles.mobile}>
                <div className={styles.mdays}>
                    <div onClick={handleday1}>
                        <Dcard name="Day 1" day={day1} />
                    </div>
                    <div className={styles.events}>
                        {event.map((item,index) => {
                            if (item.day === 1) {
                                return (
                                    <Ecard
                                        key={item.id}
                                        name={item.name}
                                        time={item.time}
                                        link={item.link}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
                <div className={styles.mdays}>
                    <div onClick={handleday2}>
                        <Dcard name="Day 2" day={day2} />
                    </div>
                    <div className={styles.events}>
                        {event.map((item,index) => {
                            if (item.day === 2) {
                                return (
                                    <Ecard
                                        key={item.id}
                                        name={item.name}
                                        time={item.time}
                                        link={item.link}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}