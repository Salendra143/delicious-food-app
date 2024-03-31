// import React from 'react'
// import Mind from './Mind'
// import { useState, useEffect } from 'react'
// import { SwiggyFetchMindAPI } from '../utlis/constants';
// import SkeletionMind from '../skeletion/SkeletionMind';


// function Minds() {
//     const [carosel, setcarosel] = useState([]);
   
//   useEffect(() => {
//         fetchapi();
//     }, []);

//     const fetchapi = async () => {
//         const data = await fetch(SwiggyFetchMindAPI);
//         const json = await data.json();
//         setcarosel(json.data.cards[0].card.card.gridElements.infoWithStyle.info)
//     };

//     if (carosel.length === 0) { return <SkeletionMind/>  }
//     return (
            
//         <>
//             <div className="  w-[1100px] mx-auto   flex  overflow-x-hidden ">
//                 {
//                     carosel.map((res) => (<Mind key={res.id} restobj={res} />))
//                 }
//             </div>
//         </>
//     )
// }

// export default Minds






// // import React from 'react';
// // import Mind from './Mind';
// // import { useState, useEffect } from 'react';
// // import { SwiggyFetchMindAPI } from '../utlis/constants';
// // import SkeletionMind from '../skeletion/SkeletionMind';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// // function Minds() {
// //   const [carosel, setCarosel] = useState([]);

// //   useEffect(() => {
// //     fetchApi();
// //   }, []);

// //   const fetchApi = async () => {
// //     const data = await fetch(SwiggyFetchMindAPI);
// //     const json = await data.json();
// //     setCarosel(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
// //   };

// //   if (carosel.length === 0) {
// //     return <SkeletionMind />;
// //   }

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 1,
// //           infinite: true,
// //           dots: true,
// //         },
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1,
// //           initialSlide: 1,
// //         },
// //       },
// //     ],
// //   };

// //   return (
// //     <>
// //       <div className="w-full mx-auto mb-9">
// //         <Slider {...settings}>
// //           {carosel.map((res) => (
// //             <Mind key={res.id} restobj={res} />
// //           ))}
// //         </Slider>
// //       </div>
// //     </>
// //   );
// // }

// // export default Minds;




import React, { useState, useEffect } from 'react';
import Mind from './Mind';
import SkeletionMind from '../skeletion/SkeletionMind';
import { SwiggyFetchMindAPI } from '../utlis/constants';

function Minds() {
  const [carousel, setCarousel] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(SwiggyFetchMindAPI);
    const json = await data.json();
    setCarousel(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
  };

  const handleClick = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex - 6 < 0 ? carousel.length - Math.abs(prevIndex - 6) : prevIndex - 6));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 6 >= carousel.length ? prevIndex + 6 - carousel.length : prevIndex + 6));
    }
  };

  if (carousel.length === 0) {
    return <SkeletionMind />;
  }

  return (
    <>
      <div className="   xl:w-[1100px]  mx-auto relative">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-300 focus:bg-orange-500 active:bg-gray-500 rounded-full w-8 h-8" onClick={() => handleClick('left')}>
          {'<'}
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-300 focus:bg-orange-500 active:bg-gray-500 rounded-full w-8 h-8" onClick={() => handleClick('right')}>
          {'>'}
        </button>
        <div className="flex overflow-x-hidden">
          {carousel.map((res, index) => (
            <div key={res.id} style={{ display: index >= currentIndex && index < currentIndex + 6 ? 'block' : 'none' }}>
              <Mind restobj={res} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Minds;
