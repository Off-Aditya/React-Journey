import React from 'react'
import Card from './components/Card'
import jobOpenings from './components/data'


const App = () => {
  
  return (
    <>
      <div className="parent">
        {/* <Card /> */}
        {jobOpenings.map((item,idx)=>
          <div key={idx}>
            <Card brandLogo={item.brandLogo} companyName={item.companyName} datePosted={item.datePosted} post={item.post} tag1={item.tag1} tag2={item.tag2} pay={item.pay} location={item.location} />
          </div>
          
        )}
      </div>

    </>

  )
}

export default App