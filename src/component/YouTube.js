import React from 'react'
import YouTube from 'react-youtube'

function Youtube() {
  return (
    <>
        <YouTube
            videoId={string}                  // defaults -> ''
            id={string}                       // defaults -> ''
            className={string}                // defaults -> ''
            iframeClassName={string}          // defaults -> ''
            style={object}                    // defaults -> {}
            title={string}                    // defaults -> ''
            loading={string}                  // defaults -> undefined
            opts={obj}                        // defaults -> {}
            onReady={func}                    // defaults -> noop
            onPlay={func}                     // defaults -> noop
            onPause={func}                    // defaults -> noop
            onEnd={func}                      // defaults -> noop
            onError={func}                    // defaults -> noop
            onStateChange={func}              // defaults -> noop
            onPlaybackRateChange={func}       // defaults -> noop
            onPlaybackQualityChange={func}    // defaults -> noop
        />
    </>
  )
}

export default Youtube