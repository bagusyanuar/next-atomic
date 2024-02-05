import React from 'react'
import { SectionTitle, SectionSubTitle } from '@/components/atoms/typography'
import { ProductsCard } from '@/components/molecules/products'


function BestSeller() {
    return (
        <div className='mb-10'>
            <SectionTitle text='BEST SELLER' className='mb-1' />
            <SectionSubTitle text='Dapatkan produk - produk terbaik kami' className='mb-10' />
            <ProductsCard />
        </div>
    )
}

export default BestSeller