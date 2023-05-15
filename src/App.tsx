import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Views/Navbar'
import FactsView from './Views/Facts'
import HistoricalEventsView from './Views/HistoricalEvents'
import BucketListView from './Views/BucketList'
import RiddleView from './Views/Riddles'
import NutritionalValuesView from './Views/NutritionalValues'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='top-0'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Navbar />} /> */}
          <Route path='/facts' element={<FactsView />} />
          <Route path='/historical-events' element={<HistoricalEventsView />} />
          <Route path='/bucket-list' element={<BucketListView />} />
          <Route path='/riddles' element={<RiddleView />} />
          <Route path='/nutritional-values' element={<NutritionalValuesView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
