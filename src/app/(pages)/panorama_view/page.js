'use client';

import Head from 'next/head';
import PhotoSphereViewerComponent from '../../components/360/PhotoSphereViewer';
import PanoramaPopup from '@/app/components/360/PanoramaPopup';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Panorama_view() {
    const [currentImage, setCurrentImage] = useState(null);
    const [currentImageURL, setCurrentImageURL] = useState(null);
    const searchParams = useSearchParams();


    useEffect(()=>{
        const imageList = {
            "main-map-north": "/Ed-Broadbent-Waterfront-Park/images/360/mainMapNorth.webp",
            "about-ed-broadbent": "/Ed-Broadbent-Waterfront-Park/images/360/aboutEdBroadbent.webp",
            "amphitheatre-and-stage": "/Ed-Broadbent-Waterfront-Park/images/360/amphitheatreAndStage.webp",
            "garden-of-human-rights": "/Ed-Broadbent-Waterfront-Park/images/360/gardenOfHumanRights.webp",
            "orange-garden": "/Ed-Broadbent-Waterfront-Park/images/360/orangeGarden.webp",
            "main-map-south": "/Ed-Broadbent-Waterfront-Park/images/360/mainMapSouth.webp"
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