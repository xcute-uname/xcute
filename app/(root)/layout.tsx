import PrimeNav from '@/components/codes/PrimeNav'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <PrimeNav/>
      <main className='mt-16'>
        {children}
      </main>
    </div>
  )
}

export default layout
