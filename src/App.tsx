import { MessageContent } from './components/MessageContent'
import { SideBar } from './components/SideBar'
import styles from './styles/App.module.scss'

function App() {
  return (
    <div className="App">
      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <SideBar />
          <MessageContent />
        </div>
      </div>
    </div>
  )
}

export default App
