import React from 'react'
import imgUser from '../images/other_user.png';
import { Image } from 'react-bootstrap'
export default function CardItem(props) {
    return (
        <React.Fragment>
            {
                props.data.map((element) =>{
                    return(
                        <div className="card">
            <div className="card-cont">
                <div className="card-tag" style={{ backgroundColor: element.postTagColor }}>
                    <h6>{element.postTag}</h6>
                </div>
                <div className="card-data">
                    <div className="title-img">
                        <div className="card-title">
                            <h6>{element.postTitle}
                    <br />
                                <span className="card-writer">
                                    {element.postWriter}
                    </span>
                            </h6>
                        </div>
                        <div className="card-img">
                            <Image src={imgUser} height="40" />
                        </div>
                    </div>
                    <div className="card-detail">
                        <p>{element.postDescription} <span>Read More</span> </p>
                    </div>
                    <div className="card-percentage">
                        <p>Fund Needed</p>
                        <div className="progress-cont">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width:element.postFund+"%" ,height:"8px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>                        
                        </div>
                    <span>{element.postFund}%</span>
                        </div>
                        
                    </div>
                    <div className="card-react">
                    <div className="card-icon"><i className="fa fa-heart-o"></i><span> {element.postLike}</span></div>
                    <div className="card-icon"><i className="fa fa-comment-o"></i><span> {element.postComment}</span></div>
                    <div className="card-icon"><i className="fa fa-paper-plane-o"></i><span> {element.postShare}</span></div>
                    </div>
                </div>
            </div>
        </div>
                    )
                })
            }
        </React.Fragment>
    )
}
