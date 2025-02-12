import React, { forwardRef, useImperativeHandle, useRef } from "react";

const VideoPlayer = forwardRef((props, ref) => {
  const childVideoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    playVideo: () => childVideoRef.current.play(),
    pauseVideo: () => childVideoRef.current.pause(),
    muteVideo: () => (childVideoRef.current.muted = true),
    unMuteVideo: () => (childVideoRef.current.muted = false),
  }));
  return (
    <div>
      <video ref={childVideoRef} width="480" height="320" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

export default VideoPlayer;
