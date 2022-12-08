import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment({content}) {
  return(
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/brunoferrots.png"  
        boderDefinition={true}
      />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Ferro</strong>
              
              <time title='29 de novembro às 16h30' dateTime='2022-11-29 16:30:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}