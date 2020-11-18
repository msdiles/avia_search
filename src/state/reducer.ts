import {Actions, ActionsType} from "./actions"
import {IFlight} from "@/models/flights"
import {IAirline} from "@/models/interfaces"

export type SortBy = 'ascending' | 'descending' | 'time' | 'default'

export interface IState {
  flights: IFlight[],
  sortBy: SortBy,
  countTransfer: number[],
  priceFrom: number,
  priceTo: number | undefined,
  airlines: IAirline[] | []
}

export const initialState: IState = {
  flights: [],
  sortBy: 'default',
  countTransfer: [],
  priceFrom: 0,
  priceTo: undefined,
  airlines: []
}

export const appReducer: React.Reducer<IState, ActionsType> = (state, action) => {
  switch (action.type) {
    case Actions.SET_FLIGHTS:
      return {
        ...state, flights: action.payload
      }
    case Actions.SET_SORT_BY:
      return {
        ...state, sortBy: action.payload
      }
    case Actions.SET_AIRLINES:
      return {
        ...state, airlines: action.payload
      }
    case Actions.SET_COUNT_TRANSFER:
      return {
        ...state, countTransfer: action.payload
      }
    case Actions.SET_PRICE_FROM:
      return {
        ...state, priceFrom: action.payload
      }
    case Actions.SET_PRICE_TO:
      return {
        ...state, priceTo: action.payload
      }
  }
  return state
}

export type Reducer = typeof appReducer
