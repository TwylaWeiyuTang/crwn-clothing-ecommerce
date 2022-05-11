import {useEffect, useState, lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { db, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';
import { onSnapshot, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverview = lazy(() => import ('../../components/collections-overview/CollectionsOverview'))
const CollectionComponent = lazy(() => import ('../collections/CollectionPageComponent'))

const ShopComponent = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const collectionRef = collection(db, 'collections')
       
        const unsubscribeFromCollections = onSnapshot(collectionRef, async (doc) => {
            const collectionsMap = convertCollectionsSnapshotToMap(doc)
            dispatch(updateCollections(collectionsMap))
            setLoading(false)
        })

        return () => {
            unsubscribeFromCollections()
        } // clean up from the useEffect, this is like componentWillUnmount
    }, [dispatch])
 
        return (
        <div className='shop-page'>
            <Suspense fallback={<WithSpinner />}>
            <Routes>
                <Route path='/' element = {loading ? (<WithSpinner />): (<CollectionsOverview />)} />
                {/* since we are in shop component, React router already knows we are in /shop router,
                so we just need to use '/' to specify the route we are in now */}
                <Route path=':collectionId' element={loading ? (<WithSpinner />) : (<CollectionComponent />)} />
                {/* this is like '/shop/:collectionId */}
            </Routes>
            </Suspense>
        </div>
        )
    }



export default ShopComponent