import React, { Component } from 'react';
import "../gallery.css"

class Gallery extends Component { 
    slideIndex = 1;
        
    plusSlides(n){ 
        return(this.showSlides(this.slideIndex += n))
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        if(slides.length != 0){
            slides[this.slideIndex-1].style.display = "block";
        }
    }

    renderImages = (imgs) => {
        return imgs.map( (img, i) => {
            if (i === 0){
                return (
                    <div className="mySlides"> 
                        <img src={img} alt=""/> 
                    </div>
                )
            }
            else {
                return (
                    <div className="mySlides" style={{display:'none'}}> 
                        <img src={img} alt=""/> 
                    </div>
                )
            }
        })
    }

    render() {
        return (
            <div>
                {this.renderImages(this.props.imgs)}
                
                <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
            </div>
        );
    }
}

export default Gallery;