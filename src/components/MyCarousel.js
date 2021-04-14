import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'

class MyCarousel extends Component {
    render() {
        return (
            <Carousel slide={true} controls={false}>
                {this.props.imgs.map( (img, i) => {
                    return(
                        <Carousel.Item interval={5000} style={{width:'500px'}}>
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