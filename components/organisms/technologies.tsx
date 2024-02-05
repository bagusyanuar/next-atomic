import React from 'react'
import { SectionTitle } from '@/components/atoms/typography'
import { TechnologiesCard } from '@/components/molecules/technologies'

const Technologies = () => {
    return (
        <div className='mb-12'>
            <SectionTitle text='TECHNOLOGY' className='mb-5' />
            <TechnologiesCard />
        </div>
    )
}

export default Technologies