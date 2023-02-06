import styles from './PersonCard.module.scss'

export const PersonCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <span>
          <img
            src="https://avatars.githubusercontent.com/u/40796286?s=400&u=2e35648d47b8131896091bc3f1890ab56b347185&v=4"
            alt="profile image"
          />
        </span>
        <div className={styles.cardInfo}>
          <span>Wellson E Brito</span>
          <span>11:04</span>
        </div>
      </div>
    </div>
  )
}
