import React from 'react'
import { Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import './cropcard.css'

const CropCard = ({crop}) => {

    const {id, name, introduction, photo} = crop;


  return (
    <div className="crop_card">
            <Card>
                <div className="card_img">
                    <img src={photo} alt="crop-img" />
                </div>
    
                <CardBody className='card_body'>
                    <h5 className="card_title">
                        <Link to={`/crops/${id}`}>{name}</Link>
                    </h5>
                    <div className="card_bottom d-flex align-items-center justify-content-between ">
                        <h5 className='introduction' >
                            {introduction}
                        </h5>
                        <button className="morebtn">
                            <Link to={`/crops/${id}`}>More</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
  )
}

export default CropCard