'use client';

import { useEffect, useRef, useState } from 'react';
import { Viewer } from 'photo-sphere-viewer'; 
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

const PhotoSphereViewerComponent = ({ imageUrl }) => {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures this runs after the component is mounted
  }, []);

  useEffect(() => {
    if (!isMounted || !viewerRef.current) return;

    if (!viewerInstance.current) {
      viewerInstance.current = new Viewer({
        container: viewerRef.current,
        panorama: imageUrl,
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

  return <div ref={viewerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default PhotoSphereViewerComponent;