import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const FoodDetail = () => {
    const { mealId } = useParams();
    const [food, setFood] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFood(data.meals[0]));
    }, [mealId])
    const { strMeal, strYoutube, strMealThumb, strInstructions } = food;
    return (
        <div>
            <h2 className="my-5 text-white">Details of Food Number: {mealId}</h2>
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions?.substr(0, 200) || strInstructions}
                    </Card.Text>
                    <button className="btn btn-primary"><a className="text-decoration-none text-white" href={strYoutube}>Watch recipe</a></button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodDetail;