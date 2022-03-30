import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import CollectionItemComponent from '../../components/collection-item/CollectionItemComponent'
import { selectCollection } from '../../redux/shop/shopSelectors'
import './collectionPageStyle.scss'


const CollectionComponent = () => {
  const { collectionId } = useParams()
  const collection = useSelector((state) => selectCollection(collectionId)(state))
  // this is like mapStateToProps
  
  console.log(collection)
  return (
    <div className='collection'>
        <h2>Collection PAGE</h2>
    </div>
  )
}


export default CollectionComponent