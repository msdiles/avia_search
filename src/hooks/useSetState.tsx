import React, {useEffect, useReducer} from "react"
import {IFlight} from "@/models/flights"
import json from "../assets/flights.json"
import {initialState, appReducer} from "@/state/reducer"
import {setFlights} from "@/state/actions"

interface IData {
  result: {
    flights:IFlight[],
    bestPrices:any
  }
}

export const useSetState = () => {

  const [state,dispatch]=useReducer(appReducer,initialState)

  useEffect(() => {
    dispatch(setFlights((json as unknown as IData)?.result.flights))
  }, [])


  return {state,dispatch}
}


