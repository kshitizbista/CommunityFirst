import React from 'react'
import Card from "react-bootstrap/Card";

const AboutCard = (props) => {
    return (
        <div>
            <Card style={{ width: '8rem' }}>
                <Card.Img variant="top" src={props.source} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )

}

export default AboutCard;
