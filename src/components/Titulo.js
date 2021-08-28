import React from 'react';
import '../App';
import './Titulo.css';

export default function Titulo(props){
    return <h1 className='titulo tituloProject'>{props.nombre}</h1>
}