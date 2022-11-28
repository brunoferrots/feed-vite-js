import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/brunoferrots.png' />

          <div className={styles.authorInfo}>
            <strong>Bruno Ferro</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title='28 de novembro às 8h13' dateTime='2022-11-28 08:13:30' >Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui consectetur, culpa quod porro ad veniam numquam, modi vitae nostrum sit ducimus sunt nulla distinctio repellendus mollitia laboriosam amet odit labore.</p>
        <p>
          <a href='#'>bru.fer/developer</a>
        </p>
        <p>
          <a href='#'>#newwork</a>
          <a href='#'>#imlearning</a>
        </p>
      </div>


      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>

        <textarea 
          placeholder='Deixe seu comentário'
        />

        <footer>
          <button type='submit'>Públicar</button>
        </footer>
      </form>
    </article>
  )
}