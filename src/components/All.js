import React, { memo, useState } from 'react';
import { useGetGoogleApiQuery } from '../serves/api';
import { Rings } from 'react-loader-spinner';

import { useResultContext } from '../contexts/ResultSearchContext';
import { useParams } from 'react-router-dom';

const All = () => {
  const { id } = useParams()
  const { resultSearch, endLink } = useResultContext()
  const { data, isFetching } = useGetGoogleApiQuery(endLink.pathname)
  const searchs = data?.results
 
  if (isFetching) {
    return (
      <div className='loader'>
        <Rings color="#012264" height={200} width={200} />
      </div>
    )
  }
  return (
    <div className='mx-44'>
      <div className='search__container'>
        <div className='my-2 text-base'>
          Khoảng {searchs?.length} kết quả ({(data.ts).toFixed(2)} giây)
        </div>
        <div className='my-10'>
        {searchs?.map((search) => (
          <div className='my-5'>
            <a href={search.link} target="_blank" className='search__link'>
              <div className='text-sm no-underline'>{search.cite.domain}</div>
              <h2 className='text-xl font-semibold text-blue-700'>{search.title}</h2>
            </a>
            <p className='text-base'>{search.description ? `${search.description.substring(0,200)}...`: "No description"}</p>
          </div>
        ))}
        </div>
      </div>
      <div className=''></div>
    </div>
  );
};

export default memo(All);
