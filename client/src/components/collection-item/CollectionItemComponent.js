import React from 'react'
import { useDispatch} from 'react-redux'
import { addItem } from '../../redux/cart/cartActions'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './CollectionItemStyle'

const CollectionItemComponent = ({item}) => {
  const { name, price, imageUrl} = item // desrtucture all the properties from each item
  const dispatch = useDispatch()
  return (
    <CollectionItemContainer>
        <BackgroundImage  imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer> {name} </NameContainer>
            <PriceContainer> {price} </PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => dispatch(addItem(item))} inverted> 
          Add to cart 
        </AddButton>
    </CollectionItemContainer>
  )
}

export default CollectionItemComponent