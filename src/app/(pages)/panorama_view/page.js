'use client';

import Head from 'next/head';
import PhotoSphereViewerComponent from '../../components/PhotoSphereViewer';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Panorama_view() {
    // const imageUrl = '/images/360/orange-garden-view3.JPG';
    const [loading, setLoading] = useState(true);
    const [locationSliced, setLocationSliced] = useState("");
    const searchParams = useSearchParams();

    useEffect(()=>{
        const location = searchParams.get("location");
        if (location) {
            const slicedLocation = location.startsWith("/") ? location.slice(1) : location;
            setLocationSliced(slicedLocation);
        }
        setLoading(false);

    }, [searchParams])


    useEffect(()=>{
        if(locationSliced){
            console.log(locationSliced)
        }
    }, [locationSliced])
    // console.log(locationSliced)

    return (
        <main>
            {/* <Head>
                <title>360 Viewer</title>
                <meta name="description" content="360-degree viewer using Photo-Sphere-Viewer" />
            </Head> */}
            {loading ? (
                <p>Loading...</p>
            ) : locationSliced ? (
                <PhotoSphereViewerComponent imageURL={`/images/360/${locationSliced}.JPG`} />
            ) : (
                <p>Error: No location provided</p> 
            )}            {/* <PhotoSphereViewerComponent imageURL={`/images/360/${locationSliced}.JPG`} /> */}
        </main>
    );
}