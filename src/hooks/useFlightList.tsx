import React, {useContext, useEffect, useState} from "react"
import {StateContext} from "@/Components/StateProvider"
import {IFlight} from "@/models/flights"
import filter from "../utils/filter"
import sort from "../utils/sort"

const useFlightsList = () => {
  const {state} = useContext(StateContext)

  const [flights, setFlights] = useState<IFlight[]>([])
  const [numbersOfShown, setNumbersOfShown] = useState(2)

  useEffect(() => {
    setFlights(state.flights)
  }, [state.flights])

  useEffect(() => {
    setFlights(sort(filter({
      countTransfer: state.countTransfer,
      priceForm: state.priceFrom,
      priceTo: state.priceTo,
      airlines: state.airlines,
      flights: state.flights
    }), state.sortBy))
  }, [state.airlines, state.priceTo, state.priceFrom, state.countTransfer, state.sortBy, state.flights])

  useEffect(() => {
    flights.length ? setFlights([...sort(flights, state.sortBy)]) : null
  }, [state.flights, state.sortBy])


  const showMore = () => setNumbersOfShown(numbersOfShown + 2)

  return {elements: flights, showMore, numbersOfShown}
}

export default useFlightsList
