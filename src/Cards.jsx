import React from 'react';
import Images from './Images';
import Heading from './Heading';

function Card(gaga){ // Component name card
    return(
      <>
      <div className="cards">
        <div className="card">
          <Images imgSrc={gaga.imgSrc}/>
          <Heading userId={gaga.userId} />
          {/* <img src={gaga.imgSrc} alt="mypics" className="card__img" width="200px"/> */}
          <div className="card__info">
              <span className="card__category">{gaga.cate}</span>
              <h3 className="card__title">{gaga.title}</h3>
              <a href={gaga.link} target="_blank" rel="noreferrer">
                <button className="button_new">Watch Now</button>
              </a>
          </div>
        </div>
      </div>
    </>    
    )
  }

  export default Card