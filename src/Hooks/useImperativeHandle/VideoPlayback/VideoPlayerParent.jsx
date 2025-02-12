import React, { useRef } from "react";
import { topDivStyles } from "../../../tailwindStyles";
import VideoPlayer from "./VideoPlayer";

const VideoPlayerParent = () => {
  const videoRef = useRef(null);

  return (
    <div className={`${topDivStyles}  flex flex-col items-center`}>
      <h2>Video Player</h2>
      <p className="text-sm">
        The parent wants to play, pause, mute/unmute a video component.
      </p>
      <VideoPlayer ref={videoRef} />
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => videoRef.current.playVideo()}
          className="bg-green-500 px-4 py-2 text-white rounded"
        >
          Play
        </button>
        <button
          onClick={() => videoRef.current.pauseVideo()}
          className="bg-red-500 px-4 py-2 text-white rounded"
        >
          Pause
        </button>
        <button
          onClick={() => videoRef.current.muteVideo()}
          className="bg-yellow-500 px-4 py-2 text-white rounded"
        >
          Mute
        </button>
        <button
          onClick={() => videoRef.current.unMuteVideo()}
          className="bg-blue-500 px-4 py-2 text-white rounded"
        >
          Unmute
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerParent;
