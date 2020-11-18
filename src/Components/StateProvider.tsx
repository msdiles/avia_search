import React, {createContext, ReactNode} from "react"
import {IState} from "@/state/reducer"
import {ActionsType} from "@/state/actions"

interface IContext {
  state: IState,
  dispatch: React.Dispatch<ActionsType>
}

export const StateContext = createContext({} as IContext)

interface IProps {
  children: ReactNode,
  state: IState,
  dispatch: React.Dispatch<ActionsType>
}

const StateProvider = ({children, state, dispatch}: IProps) => {
  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
