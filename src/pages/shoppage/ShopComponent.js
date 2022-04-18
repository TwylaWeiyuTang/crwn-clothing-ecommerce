import {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionComponent from '../collections/CollectionPageComponent';
import { db, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';
import { onSnapshot, collection } from 'firebase/firestore';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const ShopComponent = ({updateCollections}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionRef = collection(db, 'collections')
       
        const unsubscribeFromCollections = onSnapshot(collectionRef, async (doc) => {
            const collectionsMap = convertCollectionsSnapshotToMap(doc)
            updateCollections(collectionsMap)
            setLoading(false)
        })

        return () => {
            unsubscribeFromCollections()
        } // clean up from the useEffect, this is like componentWillUnmount
    }, [updateCollections])
 
        return (
        <div className='shop-page'>
            <Routes>
                <Route path='/' element = {loading ? (<WithSpinner />): (<CollectionsOverview />)} />
                {/* since we are in shop component, React router already knows we are in /shop router,
                so we just need to use '/' to specify the route we are in now */}
                <Route path=':collectionId' element={loading ? (<WithSpinner />) : (<CollectionComponent />)} />
                {/* this is like '/shop/:collectionId */}
            </Routes>
        </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect (null, mapDispatchToProps) (ShopComponent)