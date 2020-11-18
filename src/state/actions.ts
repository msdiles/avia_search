import {IFlight} from "@/models/flights"
import {SortBy} from "./reducer"
import {IAirline} from "@/models/interfaces"

export enum Actions {
  "SET_FLIGHTS" = "SET_FLIGHTS",
  "SET_SORT_BY" = "SET_SORT_BY",
  "SET_COUNT_TRANSFER" = "SET_COUNT_TRANSFER",
  "SET_PRICE_FROM" = "SET_PRICE_FROM",
  "SET_PRICE_TO" = "SET_PRICE_TO",
  "SET_AIRLINES" = "SET_AIRLINES"
}


interface SetFlights {
  type: Actions.SET_FLIGHTS,
  payload: IFlight[]
}

export const setFlights = (payload: IFlight[]): SetFlights => ({
  type: Actions.SET_FLIGHTS,
  payload
})

interface SetSortBy {
  type: Actions.SET_SORT_BY,
  payload: SortBy
}

export const setSortBy = (payload: SortBy): SetSortBy => ({
  type: Actions.SET_SORT_BY,
  payload
})

interface SetCountTransfer {
  type: Actions.SET_COUNT_TRANSFER,
  payload: number[]
}

export const setCountTransfer = (payload: number[]): SetCountTransfer => ({
  type: Actions.SET_COUNT_TRANSFER,
  payload
})

interface SetPriceFrom {
  type: Actions.SET_PRICE_FROM,
  payload: number
}

export const setPriceFrom = (payload: number): SetPriceFrom => ({
  type: Actions.SET_PRICE_FROM,
  payload
})

interface SetPriceTo {
  type: Actions.SET_PRICE_TO,
  payload: number | undefined
}

export const setPriceTo = (payload: number| undefined): SetPriceTo => ({
  type: Actions.SET_PRICE_TO,
  payload
})

interface SetAirlinesFilter {
  type: Actions.SET_AIRLINES,
  payload: IAirline[]
}

export const setAirlinesFilter = (payload: IAirline[]): SetAirlinesFilter => ({
  type: Actions.SET_AIRLINES,
  payload
})

export type ActionsType =
  SetFlights |
  SetAirlinesFilter |
  SetCountTransfer |
  SetPriceFrom |
  SetPriceTo |
  SetSortBy
