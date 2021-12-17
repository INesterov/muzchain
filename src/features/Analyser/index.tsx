import React from 'react';
import Wad from 'web-audio-daw';

import { StyledCanvas } from './styled';

type Props = {
  input: Wad;
}

export function Analyser(props: Props): JSX.Element {
  const { input } = props;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(
    () => {
      if (!input) return;

      const canvasContext = canvasRef.current?.getContext('2d');
        
      if (!canvasContext) return;

      canvasContext?.clearRect(0, 0, 300, 150);
      canvasContext.fillStyle = '#0d1117';
      canvasContext.fillRect(0, 0, 300, 150);
      
      input.setUpExternalFxOnPlay = function(arg, context){
        const analyser = context.createAnalyser();

        this.soundSource.connect(analyser);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        analyser.fftSize = 2048;

        function draw() {
          const canvasCtx = canvasRef.current?.getContext('2d') as CanvasRenderingContext2D;

          if (!canvasCtx) return;

          requestAnimationFrame(draw);

          analyser.getByteTimeDomainData(dataArray);

          canvasCtx.fillStyle = '#0d1117';
          canvasCtx.fillRect(0, 0, 300, 150);
          canvasCtx.lineWidth = 2;
          canvasCtx.strokeStyle = '#94fcfd';
          canvasCtx.beginPath();
          
          const sliceWidth = 300 * 1.0 / bufferLength;
          let x = 0;

          for(let i = 0; i < bufferLength; i++) {

            const v = dataArray[i] / 128.0;
            const y = v * 150/2;
    
            if(i === 0) {
              canvasCtx.moveTo(x, y);
            } else {
              canvasCtx.lineTo(x, y);
            }
    
            x += sliceWidth;
          }

          canvasCtx.lineTo(300, 150/2);
          canvasCtx.stroke();
        }

        draw();
      };
    },
    [input],
  );

  return (
    <StyledCanvas ref={canvasRef} />
  );
}
