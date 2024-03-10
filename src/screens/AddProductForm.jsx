import React, { useState } from 'react'
import BtnCom from '../components/BtnCom'
import InpCom from '../components/InpCom'
import { useNavigate } from 'react-router-dom'
import Check from '../components/Check'
import addProductImage from '../images/headphone1.png'
import { useDispatch, useSelector } from 'react-redux'
function AddProductPage() {

  const navigate = useNavigate()
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const state = useSelector(state=>state)
  const dispatch = useDispatch()
  const addProduct=()=>{
    if(productName.trim()!== '' && description.trim() !== '' && image!== ''){
      console.log('new product : ',productName,description,image)
      dispatch({type: 'add product',data: {
        productName,
        description,
        image
      }})
    }
  }

  const checkState=()=>{
    console.log('add product : ',state)
  }
  return (
    <div className=' addProduct'>

      <div className="addProductHeading">
        <h2 className="h2 center mb3">Add Your Favorite One</h2>
      </div>

      <div className="addProductFormRight">

        <div className="addProductLeftForBackground">
          <img src={addProductImage} alt="" />
        </div>
        <div className="addProductForm">
          <div className="addProductFields">

            <div className="addProductInputField grid">
              <label>Product Name </label>
              <InpCom getData={(productName) => setProductName(productName)} place="Product Name" />
            </div>

            <div className="addProductInputField">
              <label>Product Description </label>
              <InpCom getData={(description) => setDescription(description)} place="Product Description" />
            </div>

            <div className="addProductInputField">
              <label>Product Image </label>
              <InpCom type="file" getData={(image) => setImage(image)} place="Product Image" />
            </div>


          </div>
          <div className="addProductBtn">
            <BtnCom btnText="Add Product" btnFunction={addProduct}/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AddProductPage