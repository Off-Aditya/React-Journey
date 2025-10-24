import React from 'react'
import Card from './components/Card'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
  <>
    <div className="parent">
      <div className="card">
        
        <div className="top">
          <img src="https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png" alt="" />
          <button>Save <Bookmark/> </button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
    </div>
  
  </>
    
  )
}

export default App