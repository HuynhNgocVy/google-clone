import React from 'react';

const Footer = () => {
  const year = new Date()

  return <div className='text-center p-10 mt-10 border-t'>
    <p>⚙️{year.getFullYear()} Google Clone ⚙️</p>
  </div>;
};

export default Footer;
