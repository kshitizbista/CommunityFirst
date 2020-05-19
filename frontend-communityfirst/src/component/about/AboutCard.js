import React from 'react'
import Card from "react-bootstrap/Card";
import '../home/Background.css'

const AboutCard = (props) => {
    return (
        <div>
            <a style={{textDecoration:"none", color: "black"}} href={props.linkedin}>
            <Card style={{ width: '8rem' }}>
                <Card.Img variant="top" src={props.source} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
            </Card>
                </a>
        </div>
    )

}

export default AboutCard;
