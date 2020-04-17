import React from 'react';
import Beer from '../../images/beers/Beer.jpg';
import Book from '../../images/beers/Book.jpg';

const CoolStuff = ({ scrollHeight }) => {
  let imgStyle = {
    position: "relative",
    bottom: '170px',
    minWidth: '200px'
  };
  

  if (scrollHeight > .03 && scrollHeight < .34) {
    imgStyle = {
      position: "relative",
      bottom: `${170 - (scrollHeight * 500)}px`,
      minWidth: '200px'
    }
  } else if (scrollHeight > .34) {
    imgStyle = {
      position: "relative",
      bottom: "0",
      minWidth: '200px'
    }
  }


  return (
    <>
      <div id="chevron-attraction" />
      <div className="pt-6 pb-6 text-center special-events" style={{ color: '#332212', backgroundColor: '#fff' }}>
      <h1 className="text-center" style={{ fontSize: '3rem' }}>The BB Awards</h1>
                <div id="chevron" style={{ width: '30%', top: '25px', minWidth: '300px' }}/>
                <div className="row m-auto mt-6 justify-content-center align-items-center">
                <div className="col mb-5">
            <h1 className="mb-4">Book Of The Month</h1>
            <img className='img-fluid rounded shadow mb-3' src={Book} alt="beer" style={{minWidth: '200px'}} />
            <h2 className="">You Are A Badass</h2>
            <p>By: Jen Sincero</p>
            </div>
        </div>
        <div className="row m-auto mt-6 justify-content-center align-items-center">
          <div className="col mb-5">
          <h1 className="mb-4">Beer Of The Week</h1>
            <img className={`img-fluid rounded shadow mb-3 ${scrollHeight > .45 && 'animated tada'}`} src={Beer} alt="beer" style={{minWidth: '200px'}} />
            <h2 className="">Tommyknocker</h2>
            <p>From: Idaho Springs, Colorado</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default CoolStuff;
