import React from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import history from '../history';
import { All, News, Images, Videos } from '.';
import { useResultContext } from '../contexts/ResultSearchContext';

const Routess = () => {
  const { resultSearch } = useResultContext()
  return (
    <Routes history={history}>
      <Route
          path="/"
          element={<Navigate to="/search/:id" />}
      />
      <Route exact path='/search/:id' element={<All />}/>
      <Route exact path='/news/:news' element={<News />}/>
      <Route exact path='/images/:id' element={<Images />}/>
      <Route exact path='/videos/:id' element={<Videos />}/>

    </Routes>
  )
};

export default Routess;
