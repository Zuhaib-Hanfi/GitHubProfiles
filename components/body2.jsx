import { useState, useEffect } from "react";

function Body2() {
    const [Profile, setProfile] = useState([]);

    async function generateProfile() {
        const response = await fetch("https://api.github.com/users?since=6500&per_page=15");
        const data = await response.json();
        setProfile(data);
    };
    useEffect(() => {
        generateProfile();
    }, []);

    return (
        <div id="profile">

            {
                Profile.map((value) => {
                    return (
                        <div key={value.id} className="cards">
                            <img src={value.avatar_url} alt="profilePic" />
                            <h2>{value.login}</h2>
                            <a href={value.html_url}>GitHub Profile</a>
                        </div>
                    )
                })
            }

        </div>
    )
};

export default Body2;