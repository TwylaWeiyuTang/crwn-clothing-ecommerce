import React from 'react'
import { useSelector } from 'react-redux'
import { CollectionsOverviewContainer } from './CollectionOverviewStyle'
import CollectionPreviewComponent from '../collection-preview/CollectionPreviewComponent'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview)
  return (
    <CollectionsOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreviewComponent key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
  )
}

export default CollectionsOverview