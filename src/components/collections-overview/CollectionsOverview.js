import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './collectionsOverview.scss'
import CollectionPreviewComponent from '../collection-preview/CollectionPreviewComponent'
import { selectCollections } from '../../redux/shop/shopSelectors'

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreviewComponent key={id} {...otherCollectionProps} />
        ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect (mapStateToProps) (CollectionsOverview)