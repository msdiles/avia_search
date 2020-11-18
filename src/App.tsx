import React from "react"
import Sidebar from "./Components/Sidebar"
import FlightsList from "./Components/FlightsList"
import '@/styles/main.scss'
import {useSetState} from "./hooks/useSetState"
import StateProvider from "./Components/StateProvider"

const App = () => {
  const {state, dispatch} = useSetState()
  return <div className="main">
    <StateProvider state={state} dispatch={dispatch}>
      <Sidebar/>
      <FlightsList/>
    </StateProvider>
  </div>
}

export default App
