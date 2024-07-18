import { useEffect, useState } from "react";

export default function Navbar() {
    const [ipAdd, setIpAdd] = useState('');
    const [geoInfo, setGeoInfo] = useState(null); // Initialize as null to check for loading state

    useEffect(() => {
        const fetchGeoInfo = async (ip) => {
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
                setIpAdd(data);
                fetchGeoInfo(data); // Fetch geolocation info after getting the IP
            } catch (error) {
                console.error("IP Error:", error);
            }
        };

        getVisitorIP();
    }, []);

    return (
        <div>
            <p>{geoInfo ? JSON.stringify(geoInfo, null, 2) : "Loading..."}</p>
            {geoInfo && geoInfo.region && (
                <div>
                    {geoInfo.region}
                </div>
            )}
        </div>
    );
}