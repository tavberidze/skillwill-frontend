import React from 'react'
import './CategoryListContainer.css'
import CategoryListItem from './CategoryListItem'
import imgOne from '../assets/img-01.png'
import imgTwo from '../assets/img-02.png'
import imgThree from '../assets/img-03.png'
import imgFour from '../assets/img-04.png'
import imgFive from '../assets/img-05.png'
import imgSix from '../assets/img-06.png'


const CategoryListContainer = () => {
  return (
    <div className='category-list-item-container'>
        <CategoryListItem img={ imgOne } title='Using Abstract' desc ='Abstract lets you manage, version, and document your designs in one place.'/>
        <CategoryListItem img={ imgTwo } title='Manage your account' desc='Configure your account settings, such as your email, profile details, and password.'/>
        <CategoryListItem img={ imgThree } title='Manage organizations, teams, and projects' desc='Use Abstract organizations, teams, and projects to organize your people and your work.'/>
        <CategoryListItem img={ imgFour } title='Manage billing' desc='Change subscriptions and payment details.'/>
        <CategoryListItem img={ imgFive } title='Authenticate to Abstract' desc='Set up and configure SSO, SCIM, and Just-in-Time provisioning.'/>
        <CategoryListItem img={ imgSix } title='Abstract support' desc='Get in touch with a human.'/>
    </div>
  )
}

export default CategoryListContainer