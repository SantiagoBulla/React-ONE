import './cardPartners.css'
import { AiOutlineCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import React from 'react'

function CardPartner(props) {

    const { name, position, photo, id, fav } = props.data;
    const { secondaryColor, onDeletePartner, handleLikeChange } = props;

    return (
        <div className="partner">
            <AiOutlineCloseCircle className='delete__icon' color='#F2F4F4' onClick={() => onDeletePartner(id)} />
            <div className="card__header" style={{ backgroundColor: secondaryColor }}>
                <img src={photo} alt={name} />
            </div>
            <div className="partner__information">
                <h4>{name}</h4>
                <h5>{position}</h5>
                {
                    fav ? <AiFillHeart color='red' onClick={() => handleLikeChange(id)} />
                        : <AiOutlineHeart onClick={() => handleLikeChange(id)} />
                }
            </div>
        </div>
    )
}

export default CardPartner