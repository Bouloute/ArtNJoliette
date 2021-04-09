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

    render() {
        return (
            <div>
                <div className="mySlides">
                    <img src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Bleu%20De%20Chine%2F142333638_814197942645417_8376132969989383353_n.jpg?alt=media&token=eb86a82c-9dda-4da3-8fda-401ddba74aec"/>
                </div>

                <div className="mySlides" style={{display:"none"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/art-n-joliette.appspot.com/o/Evasion%2F142270641_2861122120773263_7514090664490430334_n.jpg?alt=media&token=8ac125f4-d07a-46d6-be87-a99371460d54"/>
                </div>

                <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
            </div>
        );
    }
}

export default Gallery;