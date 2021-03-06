import React from 'react';
import './style.scss';
//import Header from '../../components/header/header';
import birthday from '../../assets/img/cakes/birthday/birthday.jpg';
//import birthday1 from '../../assets/img/cakes/birthday/birthday1.jpg';
import birthday2 from '../../assets/img/cakes/birthday/birthday2.jpg';
import birthday3 from '../../assets/img/cakes/birthday/birthday3.jpg';
//import birthday4 from '../../assets/img/cakes/birthday/birthday4.jpg';
import birthday5 from '../../assets/img/cakes/birthday/birthday5.jpg';
//import flat from '../../assets/img/flat-cake.jpg';

import cup from '../../assets/img/cakes/cup/cup.jpg';
import cup1 from '../../assets/img/cakes/cup/cup1.jpg';
//import cup2 from '../../assets/img/cakes/cup/cup2.jpg';
import cup3 from '../../assets/img/cakes/cup/cup3.jpg';
//import cup4 from '../../assets/img/cakes/cup/cup4.jpg';

import other1 from '../../assets/img/other1.jpg';

const LandingPage = () => {
  return (
    <div className='landing'>
      <div className='header'>
        {/* <div className='text-cta'> */}
        <h2 className='header-text'>Find out the sweet story behind our Mastery.</h2>
        <p className='header-subtext'>
          Everything we offer is made right here, from cookies to pasteries to cakes. Name them, we've got you covered.
        </p>
        {/* </div> */}
        {/* <div className='image-cta'>
          <img src={flat} className='img-intro' alt='a very flat cake' />
        </div> */}
      </div>

      {/* landing body */}
      <div className='landing-body'>
        <div className='call-to-action'>
          <div className='call-buttons'>
            <button>Wedding</button>
            <button>Birthday</button>
            <button>Cup cake</button>
            <button>Chocolate</button>
          </div>

          <div className='action call-products'>
            <figure>
              <img src={birthday2} className='product' alt='' />
              <figcaption>
                <p className='name'>Raspberry cake</p>
                <p className='price'>$980</p>
                <button>Place your order</button>
              </figcaption>
            </figure>
            <figure>
              <img src={cup} className='product' alt='' />
              <figcaption>
                <p className='name'>Strawberry</p>
                <p className='price'>$560</p>
                <button>Place your order</button>
              </figcaption>
            </figure>
            <figure>
              <img src={birthday5} className='product' alt='' />
              <figcaption>
                <p className='name'>Cookie cake</p>
                <p className='price'>$899</p>
                <button>Place your order</button>
              </figcaption>
            </figure>
            <figure>
              <img src={birthday} className='product' alt='' />
              <figcaption>
                <p className='name'>Choco creme</p>
                <p className='price'>$700</p>
                <button>Place your order</button>
              </figcaption>
            </figure>
            <figure>
              <img src={cup1} className='product' alt='' />
              <figcaption>
                <p className='name'>Lemon cupcake</p>
                <p className='price'>$50</p>
                <button>Place your order</button>
              </figcaption>
            </figure>
            <figure>
              <img src={birthday3} className='product' alt='' />
              <figcaption>
                <p className='name'>Strawberry creme</p>
                <p className='price'>$399</p>
                <button>Place your order</button>
              </figcaption>
            </figure>
            <figure>
              <img src={cup3} className='product' alt='' />
              <figcaption>
                <p className='name'>3-layer cupcake</p>
                <p className='price'>$90</p>
                <button>Place your order</button>
              </figcaption>
            </figure>
            <figure>
              <img src={other1} className='product' alt='' />
              <figcaption>
                <p className='name'>Chocolate cake</p>
                <p className='price'>$1000</p>
                <button>Place your order</button>
              </figcaption>
            </figure>

            {/* The Modal */}
            <div id='myModal' className='modal'>
              {/* The Close Button */}
              <span className='close'>&times;</span>

              {/* Modal Content (The Image) */}
              <img className='modal-content' id='img01' alt='' />

              {/* Modal Caption (Image Text) */}
              <div id='caption'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
