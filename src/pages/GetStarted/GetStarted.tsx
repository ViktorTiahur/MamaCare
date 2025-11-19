import { Link } from 'react-router-dom'
import styles from './GetStarted.module.scss'

const GetStarted = () => {
  return (
    <div className={styles.container}>
      <h1>This page in process...</h1>
      <p>Who will knows what will happen here 😄</p>

      <Link to='/' className={styles.backButton}>
      Return to home page
      </Link>
    </div>
  )
}

export default GetStarted