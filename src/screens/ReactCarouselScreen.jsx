import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

function ReactCarouselScreen() {
    return (
        <div>
            Hi
            <Carousel
                showArrow={true}
                swipeable={true}
                emulateTouch={true}
                infiniteLoop={true}
            >
                <div style={{ backgroundColor: 'blue', height: ' 300px' }}>
                    Hello
                </div>
                <div>There</div>
            </Carousel>
        </div>
    );
}

export default ReactCarouselScreen;
