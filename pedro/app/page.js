'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { Box, Tooltip } from "@mui/material";

export default function Home() {

  const [audioPlayed, setAudioPlayed] = useState(false);
  const [errorState, setErrorState] = useState(false);


  useEffect(() => {
    // Start playing the audio when the component mounts
    const audio = new Audio('/audio/Pedro Pedro Pedro - Racoon Meme Full Version.mp3');
    audio.loop = true;
    // audio.play();

    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Automatic playback started!
        // Show playing UI.
      })
        .catch(error => {
          setErrorState(true)
        });
    }

    // Clean up audio when the component unmounts
    return () => {
      audio.pause();
    };
  }, [audioPlayed]);

  return (
    <React.Fragment>
      {
        errorState ?
          <Tooltip title={'Click here!'}>
            < Box
              onClick={() => {
                if (!audioPlayed) {
                  setAudioPlayed(true);
                }
              }
              }
              sx={{
                height: '100vh',
                width: '100%',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'black',
                color: 'white',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'white',
                  width: '30vw',
                  height: '30vw',
                  borderRadius: '50%',
                  backgroundImage: 'url(/images/mapache-pedro.gif)', 
                  animation: 'rotationReverse 30s linear infinite', 
                  '@keyframes rotationReverse': { 
                    'from': {
                      transform: 'rotate(0deg)',
                    },
                    'to': {
                      transform: 'rotate(-360deg)', 
                    },
                  },
                }}
              >
                {/* Content */}
              </Box>
            </Box >
          </Tooltip>
          :
          < Box
            onClick={() => {
              if (!audioPlayed) {
                setAudioPlayed(true);
              }
            }
            }
            sx={{
              height: '100vh',
              width: '100%',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'black',
              color: 'white',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                backgroundColor: 'white',
                width: '30vw',
                height: '30vw',
                borderRadius: '50%',
                backgroundImage: 'url(/images/mapache-pedro.gif)', // Assuming you have a GIF for the background
                animation: 'rotationReverse 30s linear infinite', // Animation properties
                '@keyframes rotationReverse': { // Keyframes for the reverse rotation animation
                  'from': {
                    transform: 'rotate(0deg)', // Starting rotation
                  },
                  'to': {
                    transform: 'rotate(-360deg)', // Ending rotation (negative for counter-clockwise direction)
                  },
                },
              }}
            >
              {/* Content */}
            </Box>
          </Box >
      }
    </React.Fragment>
  );
}
