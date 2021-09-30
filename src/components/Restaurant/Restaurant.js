import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Error from '../Error/Error';
import Food from '../Food/Food';


const Restaurant = () => {
    const [foods, setFoods] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [searchText])
    const handleSearch = e => {
        const searchVal = e.target.value;
        setSearchText(searchVal);
    }
    return (

        <Container>
            <div className="search-container w-50 mx-auto my-3">
                <input onChange={handleSearch} type="text" className="form-control" placeholder="Search food here..." />
            </div>
            {
                foods !== null ?
                    <Row xs={1} md={3} className="g-4">
                        {foods.map(food => <Food
                            key={food.idMeal}
                            food={food}></Food>)}
                    </Row> : <Error></Error>
            }


        </Container>

    );
};

export default Restaurant;