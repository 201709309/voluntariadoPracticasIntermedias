import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsProject() {
  return (
    <div className='cards'>
      <h1>Check out these Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/repinta_01.jpg'
              text='Project description...'
              label='Project name'
              path='/Project'
            />
            <CardItem
              src='images/repinta_02.jpeg'
              text='Project description...'
              label='Project name'
              path='/project'
            />
            <CardItem
              src='images/repinta_03.jpeg'
              text='Project description...'
              label='Project name'
              path='/project'
            />
            <CardItem
              src='images/repinta_team.jpeg'
              text='Team description...'
              label='Team'
              path='/project'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProject;
