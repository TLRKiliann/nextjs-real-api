import styles from '@/styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.ulnavbar}>
        <li className={styles.linavbar}>
          <a href={"/"} className={styles.anavbar}>
            Home
          </a>
        </li>
        <li className={styles.linavbar}>
          <a href={"/news"} className={styles.anavbar}>
            News
          </a>
        </li>
        <li className={styles.linavbar}>
          <a href={"/events"} className={styles.anavbar}>
            Events
          </a>
        </li>
        <li className={styles.linavbar}>
          <a href={"/dashboard"} className={styles.anavbar}>
            Dashboard
          </a>
        </li>
      </div>
      <hr />
    </div>
  )
}
export default Navbar