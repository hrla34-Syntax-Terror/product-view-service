import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

var ImageMagnify = (props) => {
  return (
    <div className = "KL-zoom-container">
      <ReactImageMagnify {...{
          smallImage: {
              isFluidWidth: true,
              src: props.picture,
          },
          largeImage: {
              src: props.picture,
              width: 1905,
              height: 1500,
              
          },

          enlargedImageContainerStyle: {
            zIndex: "4"
          },
          // lensStyle: {
          //     width:2000,
          //     height:400,
          //     cursor: none
          // },
          
          enlargedImageContainerDimensions: {
            width: 350,
            height: 500
          }

      }} />
    </div>
  );
}

export default ImageMagnify