import { createSelector } from "reselect";
import memoize from 'lodash.memoize'

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

// map string value to its number value for id

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = memoize((collectionUrlParam) => 
    // collectionUrlParam is a dynamic argument, which means it can change
    // so to memoize selectCollection, we actually have to memoize the whole function using a 
    // memoize helper function
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    ))