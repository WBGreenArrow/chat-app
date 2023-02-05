import styles from './MessageContent.module.scss'
import settingsIcon from '../../assets/settings_icon.svg'
import callIcon from '../../assets/call_icon.svg'
import videoCallIcon from '../../assets/video_call_icon.svg'

export const MessageContent = () => {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageHeader}>
        <div className={styles.messageHeaderInfo}>
          <span />
          <span>Raul Fernandez</span>
          <span>
            <img src={settingsIcon} alt="Setting icon" />
          </span>
        </div>
        <div className={styles.messageHeaderButtonsContainer}>
          <span>
            <img src={callIcon} alt="call icon" />
          </span>
          <span>
            <img src={videoCallIcon} alt="video call icon" />
          </span>
        </div>
      </div>
    </div>
  )
}
