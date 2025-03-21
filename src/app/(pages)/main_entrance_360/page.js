'use client';

import Head from 'next/head';
import PhotoSphereViewerComponent from '../../components/PhotoSphereViewer';

export default function MainEntrance360() {
  const imageUrl = '/images/360/main-entrance.JPG';

  return (
    <div>
      <Head>
        <title>360 Viewer</title>
        <meta name="description" content="360-degree viewer using Photo-Sphere-Viewer" />
      </Head>

      <PhotoSphereViewerComponent imageUrl={imageUrl} />
    </div>
  );
}