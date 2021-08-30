import React from 'react'
import './App.css'
import { BasicTable } from './components/BasicTable'
import Barchart from "./components/BarChart"
import SortingTable from "./components/SortingTable";
function App() {
  return (
    <div className='App'>
       <SortingTable />
      <Barchart />
    </div>
  )
}

export default App