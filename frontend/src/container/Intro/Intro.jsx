import './Intro.css';
import { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

export default function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo(prev => !prev);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };

  return (
    <div className="app__video">
      <video src={meal} type="video/mp4" loop controls={false} muted ref={vidRef} />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
          onKeyPress={handleVideo}
          role="button"
          tabIndex={0}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}
