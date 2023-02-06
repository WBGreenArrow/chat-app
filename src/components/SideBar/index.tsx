import styles from './SideBar.module.scss'
import searchIcon from '../../assets/search_icon.svg'
import moreIcon from '../../assets/more_icon.svg'
import { PersonCard } from '../PersonCard'

export const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarHeaderContainer}>
        <div className={styles.sideBarHeaderContent}>
          <div className={styles.sideBarHeaderSearchInput}>
            <input type="text" name="search_person" placeholder="Persons, Groups, Chats" />
            <span>
              <img src={searchIcon} alt="search icon" />
            </span>
          </div>
          <span>
            <img src={moreIcon} alt="more icon" />
          </span>
        </div>
      </div>
      <div className={styles.sideBarMessagesContainer}>
        <div className={styles.sideBarMessagesContent}>
          <PersonCard />
        </div>
      </div>
    </div>
  )
}
