'use client';

import { useEffect, useRef, useState } from 'react';
import { Viewer } from '@photo-sphere-viewer/core'; 
// import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import '@photo-sphere-viewer/core/index.css';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';

// import '@photo-sphere-viewer/core/style.css';

const PhotoSphereViewerComponent = ({ imageUrl }) => {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !viewerRef.current) return;

    if (!viewerInstance.current) {
      viewerInstance.current = new Viewer({
        container: viewerRef.current,
        panorama: imageUrl,
        plugins: [
          GyroscopePlugin,
        ],
        navbar: [
          "gyroscope",
          "fullscreen",
        ]
      });

    } else {
      viewerInstance.current.setPanorama(imageUrl);
    }

    return () => {
      if (viewerInstance.current) {
        viewerInstance.current.destroy();
        viewerInstance.current = null;
      }
    };
  }, [imageUrl, isMounted]);


  return <div ref={viewerRef} style={{ width: '100%', height: '100dvh' }} />;
};

export default PhotoSphereViewerComponent;