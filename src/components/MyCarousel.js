import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'

import '../MyCarousel.css'

class MyCarousel extends Component {
    render() {
        return (
            <Carousel fade controls={false}>
                {this.props.imgs.map( (img, i) => {
                    return(
                        <Carousel.Item interval={3000} key={i}>
                            <img
                            className="d-block w-100"
                            src={img}
                            alt=""
                            />
                        </Carousel.Item>
                    )
                })}
                
            </Carousel>
        );
    }
}

/* {this.props.imgs.map( (img, i) => {
                    return(
                        <div className="carousel" key={i}> 
                            <img class="carousel-cell-image" data-flickity-lazyload={img} alt=""/> 
                        </div>
                    )
                })}*/
export default MyCarousel;