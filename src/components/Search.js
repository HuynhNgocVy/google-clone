import React, { useState, useRef, memo } from 'react';
import { Link } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultSearchContext';
const Search = () => {
  const { resultSearch, setResultSearch } = useResultContext()

  const inputElement = document.querySelector("input")
  const inputRef = useRef()
  const handleInput = (e) => {
    inputRef.current = e.target.value
  }
  const handleSubmit = () => {
    setResultSearch(inputRef.current)
    inputElement.focus()
  }
  const handleClearInput = () => {
    inputElement.value = ''
    inputElement.focus()
  }

  return <div>
  <div className='ml-10'>
    <div className='flex text-center items-center'>
      <input type="text" href={inputRef} className='searchInput px-5 py-2 rounded-l-3xl' 
        onChange={handleInput}
      />
      <button type="button" className='btn bg-white text-base font-semibold text-black'
        onClick={handleClearInput}
      >X</button>
      <button type="button" className='btn bg-white rounded-r-3xl'
        onClick={handleSubmit}
      >
        <Link to={`/search/q=${resultSearch}`}>
          🔍
        </Link>
      </button>
    </div>
    <div className='my-4'>
      <Link className='mr-3' to={`/search/q=${resultSearch}`}>🔎 All</Link>
      <Link className='mr-3' to={`/news/q=${resultSearch}`}>📃 News</Link>
      <Link className='mr-3' to={`/images/q=${resultSearch}`}>📸 Images</Link>
      <Link className='mr-3' to={`/videos/q=${resultSearch}`}>📺 Videos</Link>
    </div>
  </div>
  </div>;
};

export default memo(Search);
