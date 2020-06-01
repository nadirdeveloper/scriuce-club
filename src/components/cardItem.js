import React from 'react'
import imgUser from '../images/other_user.png';
import {Image} from 'react-bootstrap'
export default function CardItem(props) {
    return (
        <div className="card">
            <div className="card-cont">
            <div className="card-tag" style={{backgroundColor:props.color}}>
                <h6>Suspense</h6>
            </div>
            <div className="card-data">
                <div className="title-img">
                    <div className="card-title">
                    <h6>
                        Title Of the Book
                    <br />
                        <span className="card-writer">
                    Writer Name
                    </span>
                    </h6>
                    </div>
                    <div className="card-img">
                    <Image src={imgUser} height="40" />
                    </div>
                </div>
                <div className="card-detail">
                <p>Phasellus nec sem in justo pellentesque facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada egestas. <span>Read More</span> </p>
                </div>
                <div className="card-percentage">

                </div>
                <div className="card-react">
                    <div className="card-icon"><i className="fa fa-heart-o"></i><span> 34</span></div>
                    <div className="card-icon"><i className="fa fa-comment-o"></i><span> 34</span></div>
                    <div className="card-icon"><i className="fa fa-paper-plane-o"></i><span> 34</span></div>
                </div>
            </div>
            </div>
           </div>
    )
}
