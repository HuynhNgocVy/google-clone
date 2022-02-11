import React, { memo } from 'react';
import { useGetGoogleApiQuery } from '../serves/api';
import { Rings } from 'react-loader-spinner';

import { useResultContext } from '../contexts/ResultSearchContext';
const Videos = () => {
  const { endLink } = useResultContext()
  const { data, isFetching } = useGetGoogleApiQuery(endLink.pathname)
  console.log(data);
  return <div>Videos</div>;
};

export default Videos;
