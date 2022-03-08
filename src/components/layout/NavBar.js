import List from './nav_components/List.js'

import styles from "./NavBar.module.css"

function NavBar() {
    return(
        <nav className={styles.navbar}>
            <div>
                <img src="https://via.placeholder.com/40" />
                <List />
            </div>
            <img className={styles.navbar_user} src="https://via.placeholder.com/40" />
            
        </nav>
    )
}

export default NavBar