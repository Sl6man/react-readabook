import React from "react";
import { Card, Placeholder} from "react-bootstrap";

export default function CardLoading(){
    return(
        <div className="books-scroll">
            <Card bg="dark" style={{  minWidth:'23rem' }} className="mb-4 card-book">
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                </Card.Body>
            </Card>
            <Card bg="dark" style={{  minWidth:'23rem' }} className="mb-4 card-book">
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                </Card.Body>
            </Card>
            <Card bg="dark" style={{  minWidth:'23rem' }} className="mb-4 card-book">
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                </Card.Body>
            </Card>

        </div>
    )
}