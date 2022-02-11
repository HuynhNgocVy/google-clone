import React, { memo, useState } from 'react';
import { useGetGoogleApiQuery } from '../serves/api';
import { Rings } from 'react-loader-spinner';

import { useResultContext } from '../contexts/ResultSearchContext';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const News = () => {
  const { resultSearch, endLink } = useResultContext()
  const { data, isFetching } = useGetGoogleApiQuery(endLink.pathname)
  const news = data?.entries
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
          Khoảng {news.length} kết quả ({(data.ts).toFixed(2)} giây)
        </div>
        <div className='my-10'>
          {news.map((news) => (
            <a target="_blank" href={news.link} className='news__link'>
              <div className='border rounded-xl my-2 p-4'>
                <a target="_blank" href={news.source.href}>
                  <p className='text-sm'>{news.source.title}</p>
                </a>
                <h3 className='text-xl font-medium my-2'>{news.title > 20 ? `${news.title.subtring(0,20)}...` : news.title }</h3>
                <p className='text-xs'>{moment(news.published).startOf('ss').fromNow()}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
