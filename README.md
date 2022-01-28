#### Disney Plus clone Website

## Demo
![image](https://user-images.githubusercontent.com/86751419/151545427-c4daf5e1-1d96-455a-8ffc-c85c6b1fe908.png)

## Purpose of the project
- Learn how styled-component works
- Make responsive website
- Understand how OTT company websites are made by making a clone
- Learn how to make carousel using react-slick

## Used Skills
- React
- Styled-components
- React-slick

## Advanced Feature
- Useing React-slick for the carousel

    - Settings : 
        ```ts
        const setting={
            dots:true,
            infinte:true,
            speed:500,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:true,
        }
        ``` 

    - Used Slider : 
        ```ts
            <SliderWrap {...setting}>
                <SliderImage>
                    <img src="/image/slider-badag.jpg" alt=""/>
                </SliderImage>
                <SliderImage>
                    <img src="/image/slider-badging.jpg" alt=""/>
                </SliderImage>
                <SliderImage>
                    <img src="/image/slider-scale.jpg" alt=""/>
                </SliderImage>
                <SliderImage>
                    <img src="/image/slider-scales.jpg" alt=""/>
                </SliderImage>
            </SliderWrap>
        ```


## Things to Improve

- Lack of skills to use styled-component in globally
- Need to add detail information after clicking the contents
