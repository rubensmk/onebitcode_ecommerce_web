import React from 'react'
import styles from '../../../styles/BlueBackground.module.css'

const BlueBackground: React.FC<any> = ({ children }) => {
  return <div className={styles.main}>{children}</div>
}

export default BlueBackground
