import React from 'react';

import SHOP_DATA from './shopdata.js'
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent.js';

class ShopComponent extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render () {
        const {collections} = this.state

        return (<div className='shop-page'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreviewComponent key={id} {...otherCollectionProps} />
            ))}
        </div>)
    }
}

export default ShopComponent