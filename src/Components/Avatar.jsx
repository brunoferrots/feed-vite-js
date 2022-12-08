import styles from './Avatar.module.css'

export function Avatar({boderDefinition, src}) {
  return(
    <img 
      className={boderDefinition ? styles.avatar : styles.avatarWithBorder} 
      src={src}
    />
  )
}