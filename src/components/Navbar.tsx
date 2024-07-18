import { useEffect, useState } from "react";

interface GeoInfo {
    city: string;   
}

export default function Navbar() {
    const [geoInfo, setGeoInfo] = useState<GeoInfo | null>(null); // Define the type of geoInfo

    useEffect(() => {
        const fetchGeoInfo = async (ip: string) => {
            try {
                const response = await fetch(`http://ip-api.com/json/${ip}`); // Switch to http
                const data = await response.json(); // Parse the response as JSON
                setGeoInfo(data);
            } catch (error) {
                console.error("IP Error:", error);
            }
        };

        const getVisitorIP = async () => {
            try {
                const response = await fetch(`https://api.ipify.org`);
                const data = await response.text();
                fetchGeoInfo(data);
            } catch (error) {
                console.error("IP Error:", error);
            }
        };

        getVisitorIP();
    }, []);

    return (
        <div>
            <p>{geoInfo ? geoInfo.city : "Loading..."}</p>
        </div>
    );
}