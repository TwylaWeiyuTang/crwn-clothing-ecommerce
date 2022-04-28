import React from 'react'
import { useNavigate } from 'react-router-dom'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './CollectionPreviewStyle'

const CollectionPreviewComponent = ({title, items, routeName}) => {
  let navigate = useNavigate()
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(`/shop/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items.filter((item, idx) => idx < 4).map((item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreviewComponent