import Base from './components/Base'
import Index from './pages/Index'
import Discover from './pages/Discover'
import Account from './pages/Account'
import Slot from './pages/Slot'

import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
     <Base>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/slot' element={<Slot/>}/>
      </Routes>
     </Base>
    </>
  )
}

export default App
