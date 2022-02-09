import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';

export default function Footer() {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
    </div>
  );
}
