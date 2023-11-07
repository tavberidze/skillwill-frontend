import React from 'react'
import './CategoryListItem.css'

const CategoryListItem = (props) => {
  return (
    <div className='category-list-item'>
        <div className='category-list-icon'>
            <img className='category-list-icon-img' src={ props.img } alt={ props.title } />
        </div>
        <div className='category-list-section'>
            <h3 className='category-list-item-title'>
                { props.title }
            </h3>
        <div className='category-list-item-desc'>
            { props.desc }
        </div>
            <a className='category-list-item-link' href="">Learn More →</a>
        </div>
    </div>
  )
}

export default CategoryListItem