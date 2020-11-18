import React, {useContext, useEffect, useState} from "react"
import {StateContext} from "@/Components/StateProvider"
import {SortBy} from "@/state/reducer"
import parseInfo from "../utils/parseInfo"
import {setAirlinesFilter, setCountTransfer, setPriceFrom, setPriceTo, setSortBy} from "../state/actions"
import {Transfer} from "@/models/types"

interface IAirline {
  uid: string,
  caption: string,
  maxPrice: number,
  minPrice: number,
  checked: boolean
}

const useSidebar = () => {
  const {state, dispatch} = useContext(StateContext)
  const [sort, setSort] = useState<SortBy>('default')
  const [transfers, setTransfers] = useState<Transfer[] | []>([])
  const [price, setPrice] = useState({from: 0, to: undefined})
  const [maxPrice, setMaxPrice] = useState(0)
  const [airlines, setAirlines] = useState<IAirline[]>([])

  useEffect(() => {
    const {parsedAirlines, parsedTransfers, maxPrice: extremumPrice} = parseInfo(state.flights)
    setTransfers(parsedTransfers)
    setAirlines(parsedAirlines)
    setMaxPrice(extremumPrice)
  }, [state.flights])

  const sortByHandler = (sortBy: SortBy) => {
    setSort(sortBy)
    dispatch(setSortBy(sortBy))
  }

  const transferHandler = (countOfTransfer: Transfer) => {
    const newTransfers: Transfer[] = (transfers as Transfer[])
      .map(transfer => transfer[0] === countOfTransfer[0] ? [transfer[0], !transfer[1]] : transfer)

    setTransfers(newTransfers)
    dispatch(setCountTransfer(newTransfers.filter(transfer => transfer[1]).map(transfer => transfer[0])))

  }

  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({...price, [e.target.name]: e.target.value})
    e.target.name === "from"
      ? dispatch(setPriceFrom(+e.target.value))
      : dispatch(setPriceTo((+e.target.value === 0 ? undefined : +e.target.value)))
  }

  const airlinesHandler = (uid: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newAirlines = airlines
      .map(airline => airline.uid === uid ? {...airline, checked: !airline.checked} : airline)

    setAirlines(newAirlines)
    dispatch(setAirlinesFilter(
      newAirlines
        .filter(airline => airline.checked)
        .map(airline => ({maxPrice: airline.maxPrice, uid: airline.uid, caption: airline.caption}))))
  }

  return {sort, transfers, price, maxPrice, airlines, sortByHandler, transferHandler, priceHandler, airlinesHandler}
}

export default useSidebar
