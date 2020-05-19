import React from "react";
import '../home/Background.css';
import Footer from "../layout/Footer";
import Menu from "../layout/Menu";
import AboutCard from "./AboutCard";

function AboutPage() {
    return (
        <div className="background">
            <Menu />
            <aside>
                <h1>About CommunityFirst</h1>
                <p className="description">This is a website, developed by 7 SDA students. We built this as a part of our final group project.
                    Project was run using scrum methodology.</p>

                <p className="description">
                    All the developers are very talented and currently on the swedish job market! Make sure you click on their profile to visit their LinkedIn Profile!
                </p>

            </aside>
            <main>
                <ul className="ProfileCard-Row">
                    <li className="ProfileCard-item" ><AboutCard
                    source = "https://ca.slack-edge.com/TT8QR5H1D-UTG7T7S6B-2be133b738c1-512"
                    name = "Ainura"
                    linkedin = "https://www.linkedin.com/in/ainura-polatoglu-dyussupova-b90bb664/"
                    />
                    </li>
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTEBVAK4Y-gd8c2d955289-512"
                        name = "Irenej"
                        linkedin = "https://www.linkedin.com/in/irenej-bozovicar-764a75123/"
                    /></li>
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTG7T8KU7-7a5a1d1d3548-512"
                        name = "Krishna"
                    /></li>
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTECFP0P7-f632d4343b37-512"
                        name = "Kshitiz"
                        linkedin = "https://www.linkedin.com/in/kshitiz-bista/"
                    /></li>
                </ul>
                <ul className="ProfileCard-Row">
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTEBVD5CY-3fd3ae00d4f7-512"
                        name = "Pallavi"
                        linkedin = "https://se.linkedin.com/in/pallavithanikonda"
                    /></li>
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTG7T7W15-064c17d2e546-512"
                        name = "Saloumi"
                        linkedin = "https://www.linkedin.com/in/sghabbour"
                    /></li>
                    <li className="ProfileCard-item"><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTDTWU30C-545156d0ba80-512"
                        name = "Sadia"
                        linkedin = "https://www.linkedin.com/in/sadia-chaudhary/"
                    /></li>
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage;
