import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import CollectionItemComponent from '../../components/collection-item/CollectionItemComponent'
import { selectCollection } from '../../redux/shop/shopSelectors'
import { CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer} from './CollectionPageStyles'


const CollectionComponent = () => {
  const { collectionId } = useParams()
  const collection = useSelector(selectCollection(collectionId))
  // this is like mapStateToProps
  const {title, items} = collection

  return (
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map(item => <CollectionItemComponent key={item.id} item={item}/>)}
        </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}


export default CollectionComponent