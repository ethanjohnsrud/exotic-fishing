import React from 'react';
import './App.css';

function Services({...props}) {
    return (
      <div className="service">
        <section style={{display: 'flex', minHeight: '400px', justifyContent: 'center', alignItems: 'flex-end'}}>
        <img src={props.image} className='image'/>
        </section>
        <label className='subTitle'>{props.title}</label>
        <p className='description'>
        {props.description}
        </p>
      </div>
    );
  }
  
  export default Services;