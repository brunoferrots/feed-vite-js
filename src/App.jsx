import { Header } from './Components/Header'
import { Post } from './Components/Post'

import styles from './App.module.css'
import { Sidebar } from './Components/Sidebar'
import './global.css'

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/brunoferrots.png',
        name: 'Bruno Ferro',
        role: 'Front-end Developer'
      },
      content: [
        { type: 'paragrafy', content: 'Fala galera' },
        { type: 'paragrafy', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui consectetur, culpa quod porro ad veniam numquam, modi vitae nostrum sit ducimus sunt nulla distinctio repellendus mollitia laboriosam amet odit labore.'},
        { type: 'link', content:'bru.fer/developer' }
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/brunoferrots.png',
        name: 'Bruno Ferro',
        role: 'Front-end Developer'
      },
      content: [
        { type: 'paragrafy', content: 'Fala galera' },
        { type: 'paragrafy', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui consectetur, culpa quod porro ad veniam numquam, modi vitae nostrum sit ducimus sunt nulla distinctio repellendus mollitia laboriosam amet odit labore.'},
        { type: 'link', content:'bru.fer/developer' }
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
    },
  ]


  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return(
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
          
        </main>
      </div>


    </div>
  )
}


