import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {

  return(
    <aside className={styles.sidebar}>
      <img 
        src='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
        className={styles.cover}
      /> 

      <div className={styles.profile}>
        <Avatar
          src='https://github.com/brunoferrots.png' 
        />
        <strong>Bruno Ferro</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href='#'>
          VISITAR PERFIL
        </a>
      </footer>
    </aside>
  )
}