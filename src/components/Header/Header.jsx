import styles from './Header.module.css'

const Header = ({userName}) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>lockboard</h1>
            <h1 className={styles.welcome}>Welcome, {userName}</h1>
        </div>
    )
}

export default Header