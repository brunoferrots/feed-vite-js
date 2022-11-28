import { Header } from './Components/Header'
import { Post } from './Components/Post'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './Components/Sidebar'

export function App() {
  
  return (
    <div>
      <Header />

      
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author='Bruno'
            content='Ainda não foi definido um texto complexo'
          />
          <Post 
            author='Ferro'
            content='Logo será escrito algo relevante'
          />
          
        </main>
      </div>


    </div>
  )
}


