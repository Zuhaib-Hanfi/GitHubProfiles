import { useState, useEffect } from "react"


function Body (){
    const [Profile, setProfile] = useState([]);

    async function generateProfile() {
        const response = await fetch("https://api.github.com/users?per_page=10");
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
                            <img src={value.avatar_url}></img>
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="_blank">GitHub Profile</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Body;