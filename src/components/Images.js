import React, { memo } from 'react';
import { useGetGoogleApiQuery } from '../serves/api';
import { Rings } from 'react-loader-spinner';

import { useResultContext } from '../contexts/ResultSearchContext';


const Images = () => {
  const { endLink } = useResultContext()
  const { data, isFetching } = useGetGoogleApiQuery(endLink.pathname)
  const images = data?.image_results
  const getStringFinal = (string) => {
    var stringArray = string.split(/(\s+)/);

    return stringArray[stringArray.length - 1]
  }
  if (isFetching) {
    return (
      <div className='loader'>
        <Rings color="#012264" height={200} width={200} />
      </div>
    )
  }
  return (
    <div className='m-10'>
      <div className='flex flex-wrap'>
      {images.map((image) => (
        <div className='images__container mx-3'>
          <a target="_blank" href={image.link.href} className='news__link'>
            <div>
              <img src={image.image.src} />
              <p className='images__text'>
              {getStringFinal(image.link.domain)}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
    </div>

  );
};

export default memo(Images);
