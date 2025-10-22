import styles from './Header.module.css'

const Header = ({userName}) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>lockboard</h1>
            <h2>Time is of the essence.</h2>
        </div>
    )
}

export default Header