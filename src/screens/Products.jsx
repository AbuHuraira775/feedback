import React, { useState } from 'react'
import InpCom from '../components/InpCom'
import BtnCom from '../components/BtnCom'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Check from '../components/Check'

function Products() {

  const state = useSelector(state => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [val, setVal] = useState('')
  const user = localStorage.getItem('user')


  const addPost = () => {
    console.log('val by button : ', val)
    dispatch({
      type: 'add',
      data: {
        name: val
      }
    })
    setVal('')
  }

  const goToHome = () => {
    navigate('/')
  }

  return (
    <div className='container products'>
      <div className=" productHead flex mb1">
        <div className="productHeading">
          <h2 className='bold'>Products Page</h2>
        </div>

        <div className="productAdd">
          <Link to={`/products/${user}/add-product`}><BtnCom btnText="Add Product" /></Link>
        </div>
      </div>

      {/* <div className="apiData productData"> */}
      <div className="allPopularHeadphones">
        {state.map((product, ind) => {
          return (
            <div className='section headphonesComponents singleProduct' key={ind}>
              <div className="popularBackgroundImage productImage">
                <img src={product.image} alt=""  />
              </div>
              <div className="popularContent productContent">

                <div className="productTitle ">
                  <h2 className='h2'>{product.title}</h2>
                </div>
                <div className="productDescriptio">
                  <p className="p">{product.description}</p>
                </div>
              </div>
              <div className="popularreview flex mb2">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <div className="popularCart">
                <BtnCom btnText="Add to Cart" />
              </div>
            </div>
          )
        })}
      </div>


      {/* <Check /> */}
    </div>


  )
}

export default Products