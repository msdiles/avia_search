import React from 'react'
import useFlightsList from "@/hooks/useFlightList"
import Flight from "@/Components/Flight"
import "./flightsList.scss"

const FlightsList = () => {
  const {showMore, elements, numbersOfShown} = useFlightsList()

  return (
    <div className="flights-list">
      <div className="list">
        {elements.slice(0, numbersOfShown).map(el => {
          return <Flight flight={el} key={el.flightToken}/>
        })}
        {elements.length === 0 &&
        <p className="not-found">Авиарейсов не найдено</p>}
      </div>

      {elements.length > 0 ?
        <div className="more">
          <button onClick={showMore}>Показать еще</button>
        </div> : null
      }

    </div>
  )
}

export default FlightsList
