import { useState } from 'react';
import styles from './hamburger.module.css';

interface HamburgerProps {
  onHamburgerClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ onHamburgerClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onHamburgerClick(); // Call the callback function when the hamburger is clicked
  };

  return (
    <div className={styles.hamburger} onClick={handleClick}>
      <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
      <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
      <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
    </div>
  );
};

export default Hamburger;
