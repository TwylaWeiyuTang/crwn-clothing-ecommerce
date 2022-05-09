import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle} from './MenuItemStyles'

const MenuItemComponent = ({ title, imageUrl, size, linkUrl}) => {
    const navigate = useNavigate()
    const { pathname } = useLocation ()

  return (
    <MenuItemContainer size={size} onClick = {() => navigate(`${pathname}${linkUrl}`)}>
        <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
  )
}

export default MenuItemComponent