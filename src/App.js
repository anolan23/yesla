import Navbar from './components/Navbar';
import styles from './sass/pages/App.module.scss';
function App() {
  return (
    <div className={styles['app']}>
      <Navbar />
    </div>
  );
}

export default App;
