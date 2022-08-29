import React from 'react'
import styles from "./Headers.module.css"
const Headers = () => {
  return (
    <div className={styles.wrapper}>

    <span><svg width="35" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span>

    <h2>نتایج زنده</h2>

    </div>
  )
}

export default Headers