import React, { useRef, useState } from 'react';
import intro from 'assets/meal.mp4';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const handlePlay = () => {
    setPlayVideo(!playVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="h-screen relative">
      <video
        src={intro}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
        className="w-full h-full object-cover"
      />
      <div className="overlay absolute inset-0 flex justify-center items-center">
        <div
          onClick={handlePlay}
          className="play w-[100px] h-[100px] rounded-full border-primary border-[1px] cursor-pointer flex justify-center items-center"
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
};

export default Intro;
