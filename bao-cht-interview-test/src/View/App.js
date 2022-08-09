import './Style/App.css';
import logo from '../Image/Logo.png'
import iconMyPack from '../Image/icon 1.png'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import icon from '../Image/Product/icon_neutron_pack_rare_v001_00000.png';
import icon1 from '../Image/Product/icon_neutron_pack_epic_v001_00000.png';
import icon2 from '../Image/Product/icon_neutron_pack_legendary_v001_00000.png';
import background from '../Image/Product/light.png';
import background1 from '../Image/Product/light2.png';
import background2 from '../Image/Product/light1.png';

function App() {
  
  var checkWidth = window.screen.width < 400;
  var dataMyPacks = [
    {
      id: 1,
      img: icon,
      name: 'Jubpiter Pack',
      amount: 3
    },
    {
      id: 2,
      img: icon1,
      name: 'Mars Pack',
      amount: 2
    },
    {
      id: 3,
      img: icon2,
      name: 'Venus Pack',
      amount: 6
    }
  ]

 /**
  * 
  */
  const [products, setProducts] = useState([]);
  const [myPacks] = useState(dataMyPacks);
  const url = '/packs';
  useEffect(() => {
    axios.get(url).then(res => {
      setProducts(res.data);
    });
  }, [url])
  function dropdowMyPack() {
    var element = document.getElementById('dropdow');
    var checkExist = element.style.display === 'block';
    if (checkExist) {
      element.style.display = 'none';
      
    } else {
      element.style.display = 'block';
      
    }
  }
  window.addEventListener('resize', function (event) {
    checkWidth = window.screen.width < 400;
    if (checkWidth) {
      document.querySelector('.MyPack-text').style.display = 'none'
      document.querySelector('.MyPack-dropdow').style.display = 'none'
    } else {
      document.querySelector('.MyPack-text').style.display = 'block'
      document.querySelector('.MyPack-dropdow').style.display = 'block'
    }
  });

  console.log('return');
  return (
    <div className="background">
      <div className='header'>
        <div className='logo' >
          <img src={logo} alt='abc' />
        </div>
        <div className='MyPacks' onClick={dropdowMyPack} >
          <img className='icon' src={iconMyPack} alt='abc' />
          <p className='MyPack-text' >my packs</p>
          <div className='MyPack-dropdow' ></div>
          <ul id='dropdow'>
            {
              myPacks.map((myPack) => (
                <a href='#' key={myPack.id}>
                  <li >
                    <div className='myPack-icon-img'><img src={myPack.img}></img></div>
                    <div className='myPack-icon-content'>
                      <div className='myPack-icon-name'>{myPack.name}</div>
                      <div className='myPack-icon-amount'>x{myPack.amount}</div>
                    </div>
                  </li>
                </a>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='container'>
        <h1 className='title'>ino campaign</h1>
        <h1 className='time-start'>LAUNCHING AT 09 P.M MARCH 15, 2022</h1>
        <div className='time-existence'>
          <div className='time-existence--number'>
            <div className='time-existence-up'></div>
            <div className='time-existence-dow'></div>
            <div className='time-existence-display'>12</div>
            <div className='time-existence-text'>Days</div>
            <div className='time-existence-between'>
              <div className='time-existence-between-box '></div>
              <div className='time-existence-between-box'></div>
            </div>
          </div>
          <div className='time-existence--number'>
            <div className='time-existence-up'></div>
            <div className='time-existence-dow'></div>
            <div className='time-existence-display'>18</div>
            <div className='time-existence-text'>Hourse</div>
            <div className='time-existence-between'>
              <div className='time-existence-between-box '></div>
              <div className='time-existence-between-box'></div>
            </div>
          </div>
          <div className='time-existence--number'>
            <div className='time-existence-up'></div>
            <div className='time-existence-dow'></div>
            <div className='time-existence-display'>54</div>
            <div className='time-existence-text'>Minutes</div>
            <div className='time-existence-between'>
              <div className='time-existence-between-box '></div>
              <div className='time-existence-between-box'></div>
            </div>
          </div>
          <div className='time-existence--number'>
            <div className='time-existence-up'></div>
            <div className='time-existence-dow'></div>
            <div className='time-existence-display'>32</div>
            <div className='time-existence-text'>Second</div>
          </div>
        </div>
      </div>
      <div className='product'>

        <form className='product-pack'>
          <div className='frame'>
            <div className='product-img' style={{ backgroundImage: `url(${background})` }}>
              <img src={icon} alt='error' />
            </div>

          </div>
          <div className='product-title'>Jubpiter Pack</div>
          <div className='product-price'>PRICE:  <p>20</p> <div></div></div>
          <ul className='packs-infor'>
            <li>
              <p>Totel Packs:</p>
              <p>120.000</p>
            </li>
            <li>
              <p>Available:</p>
              <p>20.000</p>
            </li>
          </ul>
          <div className='product-MaxOpvalue'>Max Opening Value: 190.000 BTC</div>
          <p className='product-init-price'>-190 BUSD with BTC initial price at 0.001 BUSD</p>
          <button className='btn-packs'>
            <p className='btn-packs-text'>BUY NOW</p>
          </button>
        </form>

        <form className='product-pack'>
          <div className='frame'>
            <div className='product-img' style={{ backgroundImage: `url(${background1})` }}>
              <img src={icon1} alt='error' />
            </div>

          </div>
          <div className='product-title'>Jubpiter Pack</div>
          <div className='product-price'>PRICE:  <p>20</p> <div></div></div>
          <ul className='packs-infor'>
            <li>
              <p>Totel Packs:</p>
              <p>120.000</p>
            </li>
            <li>
              <p>Available:</p>
              <p>20.000</p>
            </li>
          </ul>
          <div className='product-MaxOpvalue'>Max Opening Value: 190.000 BTC</div>
          <p className='product-init-price'>-190 BUSD with BTC initial price at 0.001 BUSD</p>
          <button className='btn-packs'>
            <p className='btn-packs-text'>BUY NOW</p>
          </button>
        </form>

        <form className='product-pack'>
          <div className='frame'>
            <div className='product-img' style={{ backgroundImage: `url(${background2})` }}>
              <img src={icon2} alt='error' />
            </div>

          </div>
          <div className='product-title'>Jubpiter Pack</div>
          <div className='product-price'>PRICE:  <p>20</p> <div></div></div>
          <ul className='packs-infor'>
            <li>
              <p>Totel Packs:</p>
              <p>120.000</p>
            </li>
            <li>
              <p>Available:</p>
              <p>20.000</p>
            </li>
          </ul>
          <div className='product-MaxOpvalue'>Max Opening Value: 190.000 BTC</div>
          <p className='product-init-price'>-190 BUSD with BTC initial price at 0.001 BUSD</p>
          <button className='btn-packs'>
            <p className='btn-packs-text'>BUY NOW</p>
          </button>
        </form>

      </div>
    </div>

  );
}

export default App;
