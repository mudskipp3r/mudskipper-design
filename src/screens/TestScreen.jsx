import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import HorizontalStack from '../components/Layout/HorizontalStack';
import braveAdmin01 from '../images/brave-admin_01.png';
import braveAdmin02 from '../images/brave-admin_02.png';
import { useSwipeable } from 'react-swipeable';

function TestScreen(props) {
    const [slideIndex, setSlideIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    function nextSlide() {
        if (slideIndex === 2) {
            return;
        } else {
            setSlideIndex(slideIndex + 1);
        }
    }
    function prevSlide() {
        if (slideIndex === 0) {
            return;
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }

    return (
        <div style={{ backgroundColor: 'black', padding: '40px' }}>
            <div
                style={{
                    backgroundColor: 'grey',
                    padding: '32px',
                    borderRadius: '16px',
                }}
            >
                <StyledCarousel {...handlers}>
                    <StyledCarouselInner
                        style={{
                            transform: `translateX(${-slideIndex * 100}%)`,
                        }}
                    >
                        <StyledCarouselItem backgroundColor="red">
                            <img
                                style={{ width: '100%', height: 'auto' }}
                                src={braveAdmin01}
                                alt
                            />
                        </StyledCarouselItem>
                        <StyledCarouselItem backgroundColor="yellow">
                            <img
                                style={{ width: '100%', height: 'auto' }}
                                src={braveAdmin02}
                                alt
                            />
                        </StyledCarouselItem>
                        <StyledCarouselItem backgroundColor="yellow">
                            <img
                                style={{ width: '100%', height: 'auto' }}
                                src={braveAdmin02}
                                alt
                            />
                        </StyledCarouselItem>
                    </StyledCarouselInner>
                </StyledCarousel>
            </div>
            <button onClick={prevSlide}>Prev slide</button>
            <button onClick={nextSlide}>Next slide</button>
        </div>
    );
}

const StyledCarousel = styled.div`
    width: 100%;
    height: auto;
    overflow-x: hidden;
`;

const StyledCarouselInner = styled.div`
    transition: transform 0.5s;
    white-space: nowrap;
    height: 100%;
`;

const StyledCarouselItem = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    pointer-events: none;
`;

export default TestScreen;
