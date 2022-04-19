import React from 'react'
import { useSelector } from 'react-redux'
import MenuItemComponent from '../menu-item/MenuItemComponent'
import { selectDirectorySections } from './directorySelectors'

import { DirectoryMenuContainer } from './DirectoryStyle'

const Directory = () => {
    const sections = useSelector(selectDirectorySections)
        return (
            <DirectoryMenuContainer>
                {sections.map(({id, ...otherSectionPros})=> (
                    <MenuItemComponent key={id} {...otherSectionPros} />
                ))}

                {/* ...otherSectionProps is the same as declaring , title, imageUrl, size, linkUrl*/}
            </DirectoryMenuContainer>
        )
}

export default Directory