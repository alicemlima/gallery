import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from '../../styles/Images.module.css';

interface imageProps {
  src: string;
  hgt?: number;
  wdt?: number;
}

export default function Images(props: imageProps) {
  console.log("src", props.src)
  return (
    <div className={styles.padding}>
      <img 
       src={props.src}
       height={props.hgt}
       width={props.wdt}
      />
    </div>
  )
}