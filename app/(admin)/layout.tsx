import React from 'react'
import NavBar from './admin/components/navbar'


const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <NavBar />
      {children}
    </div>
  )
}

export default layout
