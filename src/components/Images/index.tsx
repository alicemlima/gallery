import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from './styles.module.css';

interface imageProps {
  src: string;
  hgt: number;
  wdt: number;
}

export default function Images(props: imageProps) {
  console.log("src", props.src)
  return (
    <>
    
      <img 
       src={props.src}
       height={props.hgt}
       width={props.wdt}
      />
    </>
  )
}