import React from "react";
import '../home/Home.css';
import Footer from "../layout/Footer";
import Menu from "../layout/Menu";
import AboutCard from "./AboutCard";

function AboutPage() {
    return (
        <div className="homepage">
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
                    />
                    </li>
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTEBVAK4Y-gd8c2d955289-512"
                        name = "Irenej"
                    /></li>
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTG7T8KU7-g6c1ea5986b1-512"
                        name = "Krishna"
                    /></li>
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTECFP0P7-f632d4343b37-512"
                        name = "Kshitiz"
                    /></li>
                </ul>
                <ul className="ProfileCard-Row">
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTEBVD5CY-3fd3ae00d4f7-512"
                        name = "Pallavi"
                    /></li>
                    <li className="ProfileCard-item" ><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTG7T7W15-064c17d2e546-512"
                        name = "Saloumi"
                    /></li>
                    <li className="ProfileCard-item"><AboutCard
                        source = "https://ca.slack-edge.com/TT8QR5H1D-UTDTWU30C-545156d0ba80-512"
                        name = "Sadia"
                    /></li>
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage;
