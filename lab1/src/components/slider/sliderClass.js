import { Component } from "react";
import './slider.css';

class SliderClass extends Component{
    constructor(props) {
        super(props);
        this.state = {
          slideIndex: 0,
          intervalId: null,
          imagePaths: [
            process.env.PUBLIC_URL + '/images/slide1.jpg',
            process.env.PUBLIC_URL + '/images/slide2.jpg',
            process.env.PUBLIC_URL + '/images/slide3.jpg',
          ],
        };
      }
    
      componentDidMount() {
        this.showSlide(this.state.slideIndex);
      }
    
      nextSlide() {
        this.setState((prevState) => ({
          slideIndex: (prevState.slideIndex + 1) % prevState.imagePaths.length,
        }), () => {
          this.showSlide(this.state.slideIndex);
        });
      }
    
      previousSlide() {
        this.setState((prevState) => ({
          slideIndex:
            (prevState.slideIndex - 1 + prevState.imagePaths.length) % prevState.imagePaths.length,
        }), () => {
          this.showSlide(this.state.slideIndex);
        });
      }
    
      startSlideShow() {
        const intervalId = setInterval(() => {
          this.setState((prevState) => ({
            slideIndex: (prevState.slideIndex + 1) % prevState.imagePaths.length,
          }), () => {
            this.showSlide(this.state.slideIndex);
          });
        }, 2000);
        this.setState({ intervalId });
      }
    
      stopSlideShow() {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
      }
    
      showSlide(n) {
        const slides = document.getElementsByTagName('img');
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.add('hidden');
        }
        slides[n].classList.remove('hidden');
      }
    
      isActive(imagePath) {
        return this.state.imagePaths[this.state.slideIndex] === imagePath;
      }
    
      render() {
        return (
          <div className="slider">
            <div className="slider-wrapper">
              {this.state.imagePaths.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={this.isActive(image) ? '' : 'hidden'}
                  alt="Slide"
                />
              ))}
            </div>
            <button className="prev" onClick={() => this.previousSlide()}>&#10094;</button>
            <button className="next" onClick={() => this.nextSlide()}>&#10095;</button>
            <div className="slide-btns">
              <button onClick={() => this.startSlideShow()}>Slide</button>
              <button onClick={() => this.stopSlideShow()}>Stop</button>
            </div>
          </div>
        );
      }
}

export default SliderClass;