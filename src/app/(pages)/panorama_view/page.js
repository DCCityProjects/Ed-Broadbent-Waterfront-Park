'use client';

import Head from 'next/head';
import PhotoSphereViewerComponent from '../../components/PhotoSphereViewer';
import PanoramaPopup from '@/app/components/PanoramaPopup';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Panorama_view() {
    const [currentImage, setCurrentImage] = useState(null);
    const [currentImageURL, setCurrentImageURL] = useState(null);
    const searchParams = useSearchParams();


    useEffect(()=>{
        const imageList = {
            "about-ed-broadbent": "/Ed-Broadbent-Waterfront-Park/images/360/about-ed-broadbent.JPG",
            "amphitheatre-and-stage": "/Ed-Broadbent-Waterfront-Park/images/360/amphitheatre-and-stage.JPG",
            "garden-of-human-rights": "/Ed-Broadbent-Waterfront-Park/images/360/garden-of-human-rights.JPG",
            "orange-garden": "/Ed-Broadbent-Waterfront-Park/images/360/orange-garden.JPG"
        };

        function reactToSearchParams(){
            const contentParam = searchParams.get("content");
            console.log(contentParam);
            const image = imageList[contentParam];
            console.log(imageList)
            console.log(image)
            setCurrentImage(image);
        };
        reactToSearchParams();
    }, [searchParams]);

    return (
        <main>
            <Head>
                <title>360 Viewer</title>
                <meta name="description" content="360-degree viewer using Photo-Sphere-Viewer" />
            </Head>

            <PanoramaPopup />
            <PhotoSphereViewerComponent imageUrl={currentImage} />
        </main>
    );
}