import React from 'react';
import './valleMap.scss';

interface ValleMapInter {
  changeModalInfo: any;
}

const ValleMap = (props: ValleMapInter) => {
  let { changeModalInfo } = props;

    return(
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 674.09 626.39"
      className='valle-map'
    >
      <defs>
        <clipPath id="clip-path">
          <path
            id="SVGID"
            className="cls-1"
            d="M177.43,277.34a84.09,84.09,0,1,1-168.18,0c0-46.44-15.66-123.86,84.09-123.8C167.81,153.58,177.43,230.9,177.43,277.34Z"
          />
        </clipPath>
      </defs>
      <g className="cls-2">
        <g id="Capa_2" data-name="Capa 2">
          <g id="MAPA">
            <path
              className="cls-3"
              d="M400,88.27c5.07-1.39,9.46-4.59,14.41-6.33,13.43-4.73,28.27,1.82,42.4.14,4-.48,8.29-1.83,10.74-5.08,1.89-2.48,2.45-5.74,2.44-8.86a5.78,5.78,0,0,1,.5-3c1.14-1.87,3.86-1.58,6.05-1.49,4.82.2,11.77-2.37,14.59-6.29,3.43-4.78,4.33-10.86,6.28-16.41a45,45,0,0,1,33.76-28.79c2.79-.51,5.88-.66,8.39-2.09,1.95-1.1,3.18-3.11,5.15-4.21,3.1-1.74,5.69,0,8.72,1.15,10.25,4,22.07-5.58,32.39-1.75,5.35,2,8.89,7.22,10.65,12.65,2.25,6.94,13.09,3.61,18.72,3.46,1.25-4.21-.71-8.74-.13-13.09.35-2.67,2.64-5.52,4.27-7.49,2,4.83,7.82,3.66,12,4,8.77.67,15.35,8.55,23.87,10.75,3.74,1,8.3,1.12,10.42,4.36.82,1.25,1,2.94,1.95,4.09s2.66,1.62,3.68,2.74c2.49,2.73,2.95,5.66-.14,8.23-2.49,2.09-5.95,2.46-9.17,2.82-2.5.28-5.81.56-7.85,2.12-2.33,1.79-1,3.16-1,5.2,0,3.15-1,4.79-2.81,7.54a15.65,15.65,0,0,0-2.4,10.69A27.91,27.91,0,0,0,649.6,68c.6,1.63.93,3.26.07,4.86a62,62,0,0,1-4.5,7.58c-5,6.83-10.76,14.13-19,16.1-4.28,1-10,1.37-11.09,5.63a5.78,5.78,0,0,1-.54,1.8c-1.11,1.71-3.69.41-5.72.15-4.82-.62-7.35,5.32-10.38,9.13-4.23,5.3-11.3,7.19-17.76,9.27s-13.41,5.27-15.88,11.59c-1.3,3.32-1.32,7.41-4,9.75-2.53,2.18-6.45,1.82-9.44.33s-5.42-3.89-8.21-5.71c-7-4.56-16.15-5.16-24.14-2.68s-14.88,7.77-20.38,14.07-11.12,14.26-19.38,13.92c-4.3-.18-8.79-2.73-12.64-.82-2.39,1.19-3.7,3.75-5.51,5.7-9.87,10.6-14.12-21.88-15.59-27.22s-4-7.85-9.54-4.92c-2.79,1.46-5.06-2.59-6.07-5.58a24.94,24.94,0,0,0-9.71-12.8c-4.54-3-9.71-6.45-10.41-11.83-.28-2.16.23-4.37-.11-6.51s-2.06-4.4-4.22-4.11c-2.58.34-4.08,4-6.65,3.63C398,95,397.93,92.06,400,88.27Z"
            />
            <path
              className="cls-3"
              d="M454.2,170.76c-6.87-10.78-7.24-24-8.71-29.33-1.33-4.81-3.45-7.29-7.88-5.67a5.92,5.92,0,0,1-7.45-4,25,25,0,0,0-10-13.67c-4.54-3-9.71-6.45-10.41-11.83-.28-2.16.23-4.37-.11-6.51s-2.06-4.4-4.22-4.11c-2.58.34-4.08,4-6.65,3.63-.82-4.27-.85-7.25,1.26-11-4.57-.08-9.81-2.12-14.26-1-2.61.62-5.21,1.73-7.87,1.4-1.5-.18-2.74,0-4.23-.19-.07,3.68-4.36,5.9-8,5.84s-7.26-1.52-10.95-1.42c-2.34.06-4.55,0-6.6,1.07s-3.71,3.32-3.46,5.65c.19,1.83,1.46,3.33,2.43,4.89,6,9.75.23,22.64,3.06,33.72,1.71,6.68,6.33,12,11.6,16.63a2.84,2.84,0,0,1-2,5,5,5,0,0,0-4,1.08c-1.26,1.22-1.42,3.18-1.3,4.93.42,6.31,3.33,12.26,7.22,17.25s8.73,9.15,13.57,13.23c3.34,2.8,6.75,5.61,10.75,7.32,4.19,1.78,9.24,2.52,12,6.18,2,2.67,2.22,6.35,4.24,9,2.69,3.52,7.62,4.19,11.57,6.2,2.45,1.24,4.6,3.05,7.14,4.09s5.79,1.12,7.7-.85c2.6-2.66,1.3-7,.22-10.59s-1.15-8.5,2.33-9.82c1.18-.45,2.52-.32,3.71-.75,2.16-.79,3.26-3.25,3.39-5.54s-.49-4.55-.67-6.84c-.1-1.28.05-2.78,1.13-3.49a4.13,4.13,0,0,1,2.26-.45c3.78,0,7.78-.38,10.84-2.6s4.58-6.95,2.2-9.88c-1.13-1.39-2.9-2.16-3.9-3.64s-.33-4.21,1.44-4C452.4,170.72,453.65,171.53,454.2,170.76Z"
            />
            <path
              className="cls-3"
              d="M397.86,209.79c-2.72-3.66-7.77-4.4-12-6.18-4-1.71-7.41-4.52-10.75-7.32-4.84-4.08-9.68-8.23-13.57-13.23s-6.8-10.94-7.22-17.25c-.12-1.75,0-3.71,1.3-4.93s3.11-1.21,5-1a2.48,2.48,0,0,0,1.93-4.33c-5.63-4.8-10.67-10.33-12.47-17.38-2.83-11.08,2.92-24-3.06-33.72A15.31,15.31,0,0,1,345,97.58c-3.73,4.53-4.56,11.65-9.81,14.27-1.22.61-2.58.9-3.82,1.45-2.72,1.21-4.73,3.57-7,5.44-4.1,3.29-9.36,5.18-12.71,9.23-2.79,3.37-4,7.92-7.08,11-4.49,4.43-2.1,1.16-7.65,4.15-2.56,4.37-1,9.76,2.14,13.72s7.5,6.74,11.16,10.24,6.75,8.24,6.15,13.26c-.39,3.31-2.36,6.53-1.59,9.77.28,1.18.91,2.26,1.13,3.45.68,3.61-3.93,2.74-4.33,5.74s-4,4.12-7,4.38c-2.52.23-6,.48-7.51,2.79-2.54,3.87-.69,10.47.24,14.62a87.42,87.42,0,0,0,6.78,18.22c1.7,3.56,3.43,7.25,3.9,11.21a15,15,0,0,1-.3,5.78c-.48,1.7-2,3.26-1.61,5.14.45,2.36,4.12,2.69,5.77.95,2-2.15,2.58-5.22,3.13-7.83.88-4.17,2.61-4.51,6.28-3.71,5.1,1.11,9.18,3,14.31,1.78,4.83-1.2,9.81-.12,14.42,1.75,5.2,2.11-1.19-9.87-.89-11.44.46-2.5,3.28-2.52,5.18-3.07,2.37-.69,2.26-3.17,2.13-5.17-.16-2.53-.7-10.89,3.92-9.59,1.77.5,2.81,2.18,4.36,3.07,2.54,1.45,5.81.52,8.25-1.09s4.43-3.85,7-5.32,5.62-2.14,8.27-3.55A32.82,32.82,0,0,0,397.86,209.79Z"
            />
            <path
              className="cls-3"
              d="M142.25,157.79c2.27.37,4.5-.69,6.62-1.58A48.3,48.3,0,0,1,160.79,153c3.51-.48,7.35-.69,10-3,1.15-1,2-2.33,3.24-3.19,2.23-1.55,5.29-1.3,7.81-.3s4.73,2.65,7.17,3.86a6.6,6.6,0,0,0,3.61.87c2.24-.27,3.76-2.42,4.69-4.48,3.84-8.45,3-18.53,7.26-26.77,1.2-2.33,3.22-4.68,5.84-4.61a18.18,18.18,0,0,1,3.14.69c4.31.9,8.57-2.12,11-5.78s3.71-8,5.92-11.8a5.76,5.76,0,0,1,1.52-1.9c1.89-1.42,4.66-.5,6.48,1s3.2,3.55,5.24,4.75c1.88,1.11,4.15,1.38,6.09,2.39,3.83,2,5.7,6.42,6.61,10.64s1.23,8.67,3.23,12.49c2.66,5.08,8,8.37,10.6,13.46,2,3.83,2.95,9.12,7.11,10.25,3.77,1,6.54-3.16,10-5,2.17-1.17,5.55-3.11,8.23-3,1.7,6.57.27,9.36,3.42,13.32s7.5,6.74,11.16,10.24,6.75,8.24,6.15,13.26c-.39,3.31-2.36,6.53-1.59,9.77.28,1.18.91,2.26,1.13,3.45.68,3.61-3.93,2.74-4.33,5.74s-4,4.12-7,4.38c-2.52.23-6,.48-7.51,2.79-2.54,3.87-.69,10.47.24,14.62a87.42,87.42,0,0,0,6.78,18.22c1.7,3.56,3.43,7.25,3.9,11.21.27,2.34-.12,6.8-1.57,8.66-.2-3.24-3.81-8.6-6.58-10.28S294,247,291,246.31a33.23,33.23,0,0,1-15.58-8.39c-1.65-1.58-3.21-3.38-5.35-4.19a12.13,12.13,0,0,0-5.4-.4,52.82,52.82,0,0,0-14.8,3.61c-10.41-2.56-21.94,4.06-31.91.15-4.16-1.63-7.55-5-11.83-6.22-2.8-.83-5.78-.73-8.7-.81a38.29,38.29,0,0,1-16-3.47c-3.88-1.93-7.23-4.77-10.53-7.58l-11.42-9.7a11.11,11.11,0,0,1-3.1-3.53c-1.18-2.54-.29-5.51-.39-8.3s-1.31-5.69-2.5-8.36a31,31,0,0,0-4.21-7.52c-1.92-2.29-4.56-4.11-5.68-6.89a15,15,0,0,1-.79-4.9C142.62,165.8,142.45,161.8,142.25,157.79Z"
            />
            <path
              className="cls-4"
              d="M335.53,252.61c-5.13,1.26-9.21-.67-14.31-1.78-3.67-.8-5.4-.46-6.28,3.71-.54,2.59-1.63,6-3.54,7.9-2.5,2.53-7,.36-5-3.28-.2-3.24-3.81-8.6-6.58-10.28S294,247,291,246.31a33.23,33.23,0,0,1-15.58-8.39c-3.28-3.14-5.93-5-10.75-4.59-3.91.37-7.61,1.61-11.39,2.55s-7,.55-10.74.56a63.6,63.6,0,0,0-9,1.12c-5.16.78-10.59,1.49-15.58-.47-4.16-1.63-7.55-5-11.83-6.22-2.8-.83-5.78-.73-8.7-.81a38.29,38.29,0,0,1-16-3.47c-3.88-1.93-7.23-4.77-10.53-7.58l-11.42-9.7c-4.14-3.53-3.31-6.87-3.49-11.83-.1-2.93-1.31-5.69-2.5-8.36a30.93,30.93,0,0,0-4.2-7.52c-2.94-3.51-6-6.09-6.45-10.92-.44-5,.9-10.36-1.25-15.14-1.61-3.6-2.7-1.59-5,.24a26.11,26.11,0,0,1-7,3.75,44.88,44.88,0,0,1-27.31,1.27c-4-1.08-8.32-2.69-12-.86-4.08,2-6.59,7.93-10,10.91.79,2.68,3.26,4.44,4.74,6.81a14.24,14.24,0,0,1,1.74,10.77c-.65,2.71-3.59,4.39-5,6.7-2.42,3.86.91,4.93,2.1,8.34.84,2.43-.6,2.85-1.78,4.68-2.77,4.32.75,10.95,2.71,14.93,2.62,5.31,5.91,10.33,7.8,16,1.77,5.31,2.22,11,2.65,16.55a46.44,46.44,0,0,1,0,10.67c-.69,4.58-2.72,8.85-3.64,13.38-1,4.72-.76,9.73-.5,14.54.15,2.71,1.39,5.54.56,8.12s-2.19,5.15-2.45,7.9c-.36,3.94,1.47,4.95,4.52,6.63,2.25,1.25,3,4,3.61,6.56l4.54,19.86c.86,3.74,1.65,8-.4,11.2-.95,1.52-2.53,2.85-2.57,4.65,0,2.66,3.21,4.6,4.59,6.61,2.7,4,3.65,5.68,8.37,6.68,2.89.61,4.65,3.47,6.06,6.07l4.87,9a13.8,13.8,0,0,1,1.58,3.69c.69,3.19-3.35,12.73,1.6,14.08,1.88.52,2.57-1.18,4-1.87a8.28,8.28,0,0,1,3.68-.7c3.13,0,6.19,1.14,9.34.67,4.87-.73,9.09-3.94,13.94-4.77,2.55-.44,5.16-.19,7.74-.36a24.53,24.53,0,0,0,11.42-3.68,4.52,4.52,0,0,0,2-2c.57-1.41-.24-3-.14-4.51.14-2.34,2.31-4,4.35-5.15s4.33-2.41,5.07-4.63c.88-2.65-2.15-7.37-.08-9.5a3.35,3.35,0,0,1,2.62-.75,78.67,78.67,0,0,0,25.45-2.71c3.05-.83,5.65-.6,7.94,1.62,1.88,1.81,3.9,3.56,6.56,4,3.13.47,7.22-1.7,9.52,1.27,1.85,2.38.71,6.09,3,8.31,8,7.88,18.6,12.42,30,11.79,4.82-.27,10.35-1.25,13.9,2,1.05,1,1.81,2.23,2.94,3.09,2.53,1.93,6.4,1.26,8.73-.91,3.4-3.17,3.61-7.81,3.3-12.15-.25-3.52-2.06-9.29.66-12.21,5.94-6.35,21.63-.14,27.4,3.42,1.64,1,3.44,2.2,5.33,1.82,2.34-.47,3.77-2.79,6.25-3.21,4.62-.77,10.13,4.5,14.37,1,1.65-7.44,2.88-16.19-1.17-22.65-2.07-3.29-5.43-5.77-6.81-9.4a11.85,11.85,0,0,1-.57-5.73c.49-3.73,2.92-7.55,6.63-8.19,1.65-.29,3.34.08,5,0,5.09-.34,9.11-6,7.77-10.9-.94-3.48-3.88-6-6.41-8.53-6.74-6.81-11.36-15.4-15.87-23.86a3.78,3.78,0,0,1-.66-2.49,5.58,5.58,0,0,1,1.07-1.85c2.13-3.17.65-7.51-1.47-10.69s-4.92-6.16-5.5-9.94C336.59,257.89,337.76,254.57,335.53,252.61Z"
            />
            <path
              className="cls-3"
              d="M318,436.45a46.92,46.92,0,0,1-1.75-8.78c-.15-1.56,0-3.52,1.45-4.11,2-.8,4.26,1.9,6.12.86s1.37-3.28,2.11-4.88c1.32-2.84,6-5.94,8.76-3.27,3.33,3.23,8.86,2.6,11.85-1,1.92-2.27,4.36-5.15,7.77-4.38,3.17.71,5.12,4.05,8.42,4.54,2.27.33,3.46-1.51,3.21-3.63-.51-4.44,1-11-4.28-12.65a11.2,11.2,0,0,1-6.72-5.47,7.13,7.13,0,0,1,.46-7.47c2.23-3,0-8.17-3.27-9.79-1.51-.75-3.92-.78-5.6-1.32-1.88-.6-3.85-1.38-5.87-1-2.48.42-3.91,2.74-6.25,3.21-1.89.38-3.69-.81-5.33-1.82-5.77-3.56-21.46-9.77-27.4-3.42-2.72,2.92-.91,8.69-.66,12.21.31,4.34.1,9-3.3,12.15-2.33,2.17-6.2,2.84-8.73.91-1.13-.86-1.89-2.13-2.94-3.09-3.55-3.27-9.08-2.29-13.9-2a38.16,38.16,0,0,1-18.19-3.55,39.23,39.23,0,0,1-8-4.9c-3.77-3-6.27-6.3-10.76-2.43q-6.27,5.41-12.15,11.26c-2.95,2.94-5.88,6-7.59,9.83a7.74,7.74,0,0,0-.38,6,11,11,0,0,1,1.08,6c-.14,2.85,2.45,4.68,4.23,6.49,2.3,2.33,4.43,4.86,6.5,7.4a11.59,11.59,0,0,1,2.55,4.37c.59,2.47-.44,5-.38,7.58.1,3.47,2.2,6.53,3.33,9.81a18.25,18.25,0,0,1,.66,9.3c-.56,2.92-3.4,7.19.56,8.86,4.24,1.79,9.21,2.16,12.7,5.16,2.13,1.83,3.43,4.42,5.14,6.64,2.16,2.83,3.28-.31,4.47-2,2-2.8,5.81-3.95,9.11-3.51,3.47.47,5.86,4.64,9.47,3.12,1.74-.73,2.91-2.34,4-3.88l6.28-8.87a14,14,0,0,0,2.55-4.89c.79-3.65-1.42-7.58-.22-11.12,1.38-4,5.12.78,6.78,1.87,1.13-1.76,1.66-3.87,3-5.56a7.06,7.06,0,0,1,5.49-2.84c2.51.09,5.24,1.91,7.31.49,1.89-1.3,1.59-4.31,3.18-6C314,435.71,316.72,435.34,318,436.45Z"
            />
            <path
              className="cls-3"
              d="M215,408.46a7.74,7.74,0,0,1,.38-6c1.71-3.79,4.64-6.89,7.59-9.83q5.88-5.85,12.15-11.26c1.56-1.34,4.15-1.62,5.17-3.55s.06-4.13-1.14-5.67c-2.3-3-6.39-.8-9.52-1.27-2.66-.4-4.68-2.15-6.56-4-2.29-2.22-4.89-2.45-7.94-1.62A78.67,78.67,0,0,1,189.71,368c-6.09-.36-1.6,7.39-2.54,10.25-.74,2.22-3,3.47-5.07,4.63s-4.21,2.81-4.35,5.15c-.18,2.82,1,4.71-1.83,6.48-1.51.95-3.52,2.79-5.2,3.39-2,.7-7.05-1-5.86,2.65,1.82,5.55,8.15,6.94,13.24,7.15a61.27,61.27,0,0,1,10.1,1.24c4.43.91-.08,8.54,1.75,10.83,2.2,2.76,8.32-6.13,10.33-7.18a28.79,28.79,0,0,1,7.54-2.37C210.09,409.71,212.75,409,215,408.46Z"
            />
            <path
              className="cls-3"
              d="M126.54,405.89a8.89,8.89,0,0,1,6.94-3.25c3.13,0,6.19,1.14,9.34.67,4.87-.73,9.09-3.94,13.94-4.77a19.53,19.53,0,0,1,6.28-.3c2.29.44,2.59,4.62,4.51,6.24,2.85,2.42,6.93,3.06,10.55,3.21a61.52,61.52,0,0,1,10.11,1.24c4.84,1-.78,7.82,2.4,9.32.07,1.54-1.27,2.1-2.79,2.34s-3.08-.11-4.61,0-3.24.91-3.57,2.41c-.4,1.85,1.4,3.37,2.16,5.11,1.81,4.11-2,8.14-1.81,12.25.1,2.78,2.26,5,5,4.3,2.5-.62,3.69-2.51,6.19-.38,1.31,1.11,2.21,2.63,3.45,3.82,1.92,1.82,4.51,2.71,7,3.5,3.76,1.18,8.45,2.66,9.81,6.86,1.19,3.63-1.31,5.61-4.44,6.74-1.42.51-3,.66-4.41,1.25-2.07.89-3.14,2.77-4.8,4.17-3.67,3.08-9.45,2.58-13.24,0-1.5-1-2.87-2.31-4.63-2.67-3-.61-5.74,1.77-8.56,3-7.06,3.19-13.94-1.14-17-7.41-1.08-2.18-2.9-2-4.76-3.09s-3-2.94-5.1-3.47-4,.85-5.9,1.81-4.59,1.37-5.75-.39c-1.06-1.61,0-3.7.25-5.61.33-2.71-1.08-5.14-2.66-7.21-1.17-1.55-4.47-3.86-4.37-5.94.06-1.44,1.71-2.32,2.06-3.72.45-1.83-1.45-3.38-1.81-5.23s1-3.81.89-5.77c-.14-2.88-1.67-5.25-2.17-8.11C124.4,412.86,124,408.88,126.54,405.89Z"
            />
            <path
              className="cls-3"
              d="M233,459.4a18.25,18.25,0,0,0-.66-9.3c-1.13-3.28-3.23-6.34-3.33-9.81-.06-2.54,1-5.11.38-7.58a11.59,11.59,0,0,0-2.55-4.37c-2.07-2.54-4.2-5.07-6.5-7.4-1.78-1.81-4.37-3.64-4.23-6.49.1-1.89-1.58-4.17-1.08-6-2.28.5-4.94,1.25-7.21,1.75a28.79,28.79,0,0,0-7.54,2.37c-3.49,1.84-5,6.61-9.11,7.49-2.89.62-10.65-1.05-11.53,2.92-.4,1.85,1.4,3.37,2.16,5.11,1.81,4.11-2,8.14-1.81,12.25.1,2.78,2.26,5,5,4.3,2.5-.62,3.69-2.51,6.19-.38,1.31,1.11,2.21,2.63,3.45,3.82,1.92,1.82,4.51,2.71,7,3.5,3.76,1.18,8.45,2.66,9.81,6.86.69,2.11,1,4,3,5A17.3,17.3,0,0,0,221,465C226.05,465.56,231.76,465.94,233,459.4Z"
            />
            <path
              className="cls-3"
              d="M131.76,462.21a3.88,3.88,0,0,1,3.66-2.53,7.13,7.13,0,0,0,3.22-.83c1.88-1,3.85-2.32,5.9-1.81s3.3,2.45,5.1,3.47,3.68.91,4.76,3.09c3.1,6.27,10,10.6,17,7.41,2.82-1.27,5.53-3.65,8.56-3,1.76.36,3.13,1.67,4.63,2.67,3.79,2.55,9.57,3.05,13.24,0,1.66-1.4,2.73-3.28,4.8-4.17,1.39-.59,3-.74,4.41-1.25s2.2-.93,3.51-1.5a5.86,5.86,0,0,1,4.28,0A18.55,18.55,0,0,0,221,465c3.35.35,6.35.93,9.68,1.47a3.68,3.68,0,0,1,1.73.59c.32.25,1.08.79,1.18,1.18,4.24,1.79,9.21,2.16,12.7,5.16,2.13,1.83,3.43,4.42,5.14,6.64a11.89,11.89,0,0,1-2.79,7.18c-1.59,1.89-3.8,3.33-4.8,5.59-.64,1.47-.7,3.14-1.29,4.63-1.41,3.54-5.46,5.3-7.46,8.53-2.19,3.55-1.51,8.17,0,12s3.8,7.48,4.74,11.54c.62,2.65.64,5.4,1.09,8.09s1.4,5.43,3.47,7.21c1.5,1.29,3.51,2,4.72,3.58,1.86,2.41,1.16,5.84,1.72,8.84.68,3.7,3.37,6.88,3.63,10.64a8.71,8.71,0,0,1-4.88,8.26c-1.73.81-3.7,1-5.44,1.8a17.45,17.45,0,0,0-4.57,3.46l-9.72,9.2c-2.63-1.37-5.85-.09-7.79,2.15s-2.69,5.25-3.13,8.18a50.2,50.2,0,0,0-.52,9.17,7.52,7.52,0,0,1-.19,2.68,7.17,7.17,0,0,1-2.38,3l-8.39,7.34a9.82,9.82,0,0,1-3.47,2.26c-2.12.63-4.39-.22-6.37-1.2a44.26,44.26,0,0,1-9.23-6.14c-3.94-3.41-7.28-7.51-11.56-10.46s-10-4.63-14.71-2.46c-.49.22-1,.55-1.11,1.08s.18.92.12,1.37c-.11.82-1.11,1.13-1.93,1.21a16.11,16.11,0,0,1-13.33-5.35c-1.61-1.84-3-4.19-5.37-4.75-.76-.18-1.69-.24-2.08-.92a2.09,2.09,0,0,1-.07-1.4,22.18,22.18,0,0,1,10.39-14.71,2.38,2.38,0,0,0,1-3.15c-3.22-5.84-8.57-10.87-11.84-16.67-1.62-2.86-3.13-5.84-5.44-8.18-2.64-2.68-6.21-4.37-8.61-7.28-1.32-1.6-2.21-4-1.09-5.69,1.41-2.17,4.65-1.71,7.16-1.11,1.66.4,3.71.64,4.81-.67a3.88,3.88,0,0,0,.73-2.45c.09-2.81-.75-6,1.06-8.15.52-.62,1.23-1.08,1.77-1.69,1.67-1.88,1.44-4.8.5-7.14s-2.47-4.41-3.22-6.81c-1.15-3.73-.32-8-2-11.47-.65-1.38-1.67-2.59-2.11-4.05a3.53,3.53,0,0,1,.74-3.49c1.71-1.53,1.63-5,.55-7l-4.18-7.82c-1.09-2.05-2.23-4.32-1.77-6.6a14.22,14.22,0,0,1,2-4.15A41.6,41.6,0,0,0,131.76,462.21Z"
            />
            <g id="punticos">
              <circle className="cls-5" cx="206.45" cy="435.41" r="4.2" />
            </g>
            <g className="cls-6">
              <circle
                className="cls-7"
                cx="93.34"
                cy="277.34"
                r="88.71"
                transform="translate(-168.77 147.23) rotate(-45)"
              />
              <path
                className="cls-8"
                d="M93.34,193.26A84.09,84.09,0,1,1,9.25,277.34a84.08,84.08,0,0,1,84.09-84.08m0-9.25a93.34,93.34,0,1,0,93.33,93.33A93.44,93.44,0,0,0,93.34,184Z"
              />
            </g>
            <g className="cls-9">
              <path
                className="cls-10"
                d="M117.09,297.08c-9.84-5.36-7.16-31.31-7.16-31.31l-14.73,1v-1l-1.58.47L92,265.77v1l-14.74-1s2.69,26-7.15,31.31-68,8.06-61.74,68H178.82C185.09,305.14,126.93,302.45,117.09,297.08Z"
              />
              <path
                className="cls-10"
                d="M75.24,290.39q17.66-2.64,35.29-5.43a79,79,0,0,1-.6-19.19l-14.73,1v-1l-1.58.47L92,265.77v1l-14.74-1S78.86,280.84,75.24,290.39Z"
              />
              <path
              cursor='pointer'
              onClick={() => changeModalInfo(0)}
                className="cls-11"
                d="M126.54,300.1c-8,7.14-19.78,11.67-32.92,11.67S68.7,307.24,60.69,300.1c-19.36,5.21-57.4,15.9-52.28,65H178.82C184,316,145.91,305.31,126.54,300.1Z"
              />
              <path
                className="cls-12"
                d="M8,354.89a84.09,84.09,0,0,0,.43,10.19H178.82c2.23-21.3-3.68-35.36-12.66-44.89C113,329.48,60.33,341.6,8,354.89Z"
              />
              <path
                className="cls-13"
                d="M58.07,297.84l10.05,67.3H3.92S-3,307.9,58.07,297.84Z"
              />
              <path
                className="cls-13"
                d="M128.6,297.84l-10,67.3h64.2S189.71,307.9,128.6,297.84Z"
              />
              <path
                className="cls-14"
                d="M58.07,297.84l10.05,67.3L41.05,322.59,51.88,307.9,38,302.48A59.28,59.28,0,0,1,58.07,297.84Z"
              />
              <path
                className="cls-14"
                d="M128.6,297.84l-10,67.3,27.07-42.55L134.79,307.9l13.93-5.42A59.38,59.38,0,0,0,128.6,297.84Z"
              />
              <path
              cursor='pointer'
              onClick={() => changeModalInfo(0)}
                className="cls-15"
                d="M75.24,290.39q17.66-2.64,35.29-5.43a79,79,0,0,1-.6-19.19l-14.73,1v-1l-1.58.47L92,265.77v1l-14.74-1S78.86,280.84,75.24,290.39Z"
              />
              <path
                className="cls-10"
                d="M63.41,227.78c-2.9-9-9.77-6.91-10.41-6.69s-7.77,1.13-6.55,10.5,6.71,14.54,11.84,13C63.57,243.79,66.33,236.83,63.41,227.78Z"
              />
              <path
                className="cls-10"
                d="M121.31,227.78c2.9-9,9.76-6.91,10.41-6.69s7.77,1.13,6.54,10.5-6.7,14.54-11.83,13C121.15,243.79,118.39,236.83,121.31,227.78Z"
              />
              <path
                className="cls-15"
                d="M63.41,227.78c-2.9-9-9.77-6.91-10.41-6.69s-7.77,1.13-6.55,10.5,6.71,14.54,11.84,13C63.57,243.79,66.33,236.83,63.41,227.78Z"
              />
              <path
                className="cls-15"
                d="M121.31,227.78c2.9-9,9.76-6.91,10.41-6.69s7.77,1.13,6.54,10.5-6.7,14.54-11.83,13C121.15,243.79,118.39,236.83,121.31,227.78Z"
              />
              <path
              cursor='pointer'
              onClick={() => changeModalInfo(0)}
                className="cls-10"
                d="M59.35,216.11c1.22-14.07,3.95-22.64,9.59-27.84,9.7-9,23.84-8,23.84-8s12.09-.81,21.24,5.93c6.65,4.9,10.8,13.79,12.19,29.89,1.48,17.13-.24,30.55-5.16,41.23-4.47,9.71-6.22,14.63-15,19.24-6.92,3.64-17.69,3.64-24.59,0C73,272,69,264.3,64.59,254.81,59.67,244.13,57.87,233.24,59.35,216.11Z"
              />
              <path
                className="cls-16"
                d="M79.33,275.33s.41.65,3.57,1.9c8.7,3.44,14.88,2.42,20.43.53a16.08,16.08,0,0,0,5.11-2.52s3.69-23.59,1.11-24.74-29.25-1.18-31,1.1S79.33,275.33,79.33,275.33Z"
              />
              <path
                className="cls-17"
                d="M93.54,245.59a10.82,10.82,0,0,1,1.36-1.69,17,17,0,0,1,1.55-1.4,18.11,18.11,0,0,1,1.7-1.21,14.59,14.59,0,0,1,1.81-1l-.33.72q-.51-5.55-.94-11.09c-.28-3.7-.56-7.4-.74-11.11.63,3.66,1.16,7.33,1.71,11s1,7.35,1.5,11l0,.37-.38.35a17,17,0,0,1-1.62,1.32A19.86,19.86,0,0,1,97.48,244a20.59,20.59,0,0,1-1.88.94A10.34,10.34,0,0,1,93.54,245.59Z"
              />
              <path
                className="cls-7"
                d="M107.81,254.81c-7.13,6.93-18.25,6.48-27.4.3"
              />
              <path
                className="cls-18"
                d="M121.05,215.86a37.3,37.3,0,0,0-4.92-2.75,15.86,15.86,0,0,0-5-1.38,12.79,12.79,0,0,0-2.55.05c-.41.1-.83.2-1.26.27a2.62,2.62,0,0,0-.62.19l-.63.22a16.53,16.53,0,0,0-2.47,1.14c-.82.44-1.57,1-2.46,1.47a16.52,16.52,0,0,1,1.76-2.37,11.23,11.23,0,0,1,2.39-1.87,7.53,7.53,0,0,1,1.38-.72l1.5-.49a11.1,11.1,0,0,1,3.15-.2,11.94,11.94,0,0,1,5.75,2.12A12.8,12.8,0,0,1,121.05,215.86Z"
              />
              <path
                className="cls-18"
                d="M87.36,215.09a38.72,38.72,0,0,0-5.29-2.41,17.32,17.32,0,0,0-5.33-1,13,13,0,0,0-2.64.23c-.43.12-.86.25-1.29.35a2.33,2.33,0,0,0-.64.23l-.63.26a17,17,0,0,0-2.49,1.31c-.83.49-1.56,1.12-2.46,1.65a17.54,17.54,0,0,1,1.72-2.52,11.51,11.51,0,0,1,2.36-2,10.87,10.87,0,0,1,2.89-1.39,12,12,0,0,1,3.21-.41,12.72,12.72,0,0,1,6,1.69A13.52,13.52,0,0,1,87.36,215.09Z"
              />
              <path
                className="cls-18"
                d="M82.52,230.15a11.55,11.55,0,0,0-2.21-4.48,5.17,5.17,0,0,0-4-1.87,5.67,5.67,0,0,0-2.26.34,4.17,4.17,0,0,0-1.77,1.35,9.49,9.49,0,0,0-1.62,4.66,7.31,7.31,0,0,1,.72-5.27,5.11,5.11,0,0,1,2.14-1.95,7,7,0,0,1,2.82-.52,7.65,7.65,0,0,1,1.42.17,5.58,5.58,0,0,1,.69.23,2.47,2.47,0,0,1,.67.29,5.86,5.86,0,0,1,2.1,1.91A8.38,8.38,0,0,1,82.52,230.15Z"
              />
              <path
                className="cls-18"
                d="M116.08,229.61a11.55,11.55,0,0,0-2.21-4.48,5.21,5.21,0,0,0-4.05-1.88,5.86,5.86,0,0,0-2.26.34,4.34,4.34,0,0,0-1.77,1.36,9.49,9.49,0,0,0-1.62,4.66,7.31,7.31,0,0,1,.72-5.27,5.14,5.14,0,0,1,2.15-2,6.87,6.87,0,0,1,2.81-.52,7.65,7.65,0,0,1,1.42.17,5.58,5.58,0,0,1,.69.23,2.23,2.23,0,0,1,.67.29,5.69,5.69,0,0,1,2.1,1.91A8.38,8.38,0,0,1,116.08,229.61Z"
              />
              <path
                className="cls-19"
                d="M127.24,232.81c-.08-5-.5-10.53-1-16.7-1.39-16.1-5.54-25-12.19-29.89-9.15-6.74-21.24-5.93-21.24-5.93s-14.14-1-23.84,8c-5.64,5.2-8.37,13.77-9.59,27.84-.53,6.17-.92,11.68-1,16.7,0,0,1.88-20.19,5.79-26.35a13.85,13.85,0,0,0,2-5.13c.13-.8,1.15-6.08,1.38-6.86.76-2.6,43.93-4.55,47.82-1s2.83,10.91,8,19.16Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
    );
};

export default ValleMap;