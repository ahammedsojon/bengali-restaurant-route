import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Food = (props) => {
    console.log(props.food);
    const { strMeal, strMealThumb, idMeal } = props.food;
    const history = useHistory();
    const url = `/food/${idMeal}`;
    const handleFoodDetails = () => {
        history.push(url);
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Link to={url}>Details</Link>
                    <br />
                    <Link to={url}>
                        <button className="btn btn-danger mt-2">Details</button>
                    </Link>
                    <button
                        onClick={handleFoodDetails}
                        className="btn btn-primary mt-2 ms-3">Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Food;