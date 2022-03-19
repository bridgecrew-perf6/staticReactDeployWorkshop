import React from 'react';

const DisplayAnImage = () => {
  return (
      <img
        source={{
          uri: 'https://media.giphy.com/media/nJ6yoH4nBNCBa/giphy.gif',
        }}
        alt="Giphy Motivation"
      />
  );
}

export default DisplayAnImage;