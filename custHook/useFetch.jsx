 import { useState, useEffect } from "react";

export function useFetch() {
    const [Profile, setProfile] = useState([]);
    const [numberOfProfiles, updateNumberOfProfiles] = useState("");

    async function generateProfile() {
        const rand = Math.floor(Math.random() * 10000);
        const response = await fetch(`https://api.github.com/users?since=${rand}&per_page=${numberOfProfiles}`);
        const data = await response.json();

        setProfile(data);
    };

    useEffect(() => {
        generateProfile();
    }, []);

    return {Profile, setProfile, numberOfProfiles, updateNumberOfProfiles,generateProfile};
}