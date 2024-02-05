import React from 'react'
import { SectionTitle } from '@/components/atoms/typography'
import { CategoriesCard } from '@/components/molecules/categories'


const Categories = () => {
    return (
        <div className='mb-10'>
            <SectionTitle text='CATEGORY' className='mb-5' />
            <CategoriesCard />
        </div>
    )
}

export default Categories