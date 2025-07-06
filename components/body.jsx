import { useState, useEffect } from "react"


function Body() {
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


    return (
        <div id="profile">
            <div id="inputContainer">
                <input type="text" placeholder="Enter No. of profiles" value={numberOfProfiles} onChange={(e) => updateNumberOfProfiles(e.target.value)} />
                <button onClick={generateProfile}>Search</button>
            </div>
            <div id="cardsContainer" >
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
        </div>
    )
}

export default Body;


//UseCallBack & Try catch
// add one more seach by user name button