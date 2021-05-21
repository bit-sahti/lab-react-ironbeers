import React from 'react';
import { Link } from 'react-router-dom';

import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

import './Home.css'

const HomePage = () => {
    return (
        <div>
            <h1 className="title">Ironbeers</h1>
            <Link to="/beers" className="card-container">                
                <span className="card">
                    <img src={beersImage} className="image" alt="beers in glass bottles" />
                    <div className="body">
                        <h2 className="title">All beers</h2>
                        <p className="text">Etiam ut sagittis ex. In a lectus suscipit, vestibulum lacus at, imperdiet nibh. Nunc pellentesque erat sem, sit amet dictum turpis iaculis a. Sed nec fringilla turpis iaculis a.</p>
                    </div>
                </span>                
            </Link>

            <Link to="/randomBeer" className="card-container">                
                <span className="card">
                <img src={randomBeerImage} className="image" alt="beer dispenser" />
                    <div className="body">
                        <h2 className="title">Random beer</h2>
                        <p className="text">Sed nec fringilla turpis. Integer vitae accumsan urna. Praesent sollicitudin ipsum velit, nec consectetur arcu vehicula sit amet. In ex felis, ultricies imperdiet posuere nec, consequat quis augue. </p>
                    </div>
                </span>                
            </Link>

            <Link to="/newBeer" className="card-container">                
                <span className="card">
                <img src={newBeer} className="image" alt="beer bottle beside a glass of beer" />
                    <div className="body">
                        <h2 className="title">New beer</h2>
                        <p className="text">Mauris nec enim malesuada, dictum lacus sit amet, luctus eros. Fusce in feugiat enim. Vivamus id tortor ac libero vestibulum congue in quis ex. </p>
                    </div>
                </span>                
            </Link>

        </div>
    )
}

export default HomePage;