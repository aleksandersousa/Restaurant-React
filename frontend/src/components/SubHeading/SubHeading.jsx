import { images } from '../../constants';

export default function SubHeading({ title }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
}
