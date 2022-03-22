import React from 'react'
import './collectionPreviewStyle.scss'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'

const CollectionPreviewComponent = ({title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => (
          <CollectionItemComponent key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPreviewComponent