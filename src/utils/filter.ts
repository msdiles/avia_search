import {IFlight} from "@/models/flights"
import {IAirline} from "@/models/interfaces"

interface IFunction {
  flights: IFlight[],
  airlines: IAirline[],
  priceTo: number | undefined,
  priceForm: number,
  countTransfer: number[]
}

export default function ({airlines, countTransfer, flights, priceForm, priceTo}: IFunction) {
  return flights.filter(flight =>
    (airlines.length ? filterAirlines(flight, airlines) : true) &&
    (typeof priceTo === "undefined" ? true : filterPriceTo(flight, priceTo)) &&
    (priceForm === 0 ? true : filterPriceFrom(flight, priceForm)) &&
    (countTransfer.length ? filterCountTransfer(flight, countTransfer) : true)
  )

}


const filterAirlines = (flight: IFlight, airlines: IAirline[]) => {
  return airlines
    .map(airline => airline.uid)
    .includes(flight.flight.carrier.uid)
}

const filterPriceTo = (flight: IFlight, priceTo: number) => {
  return +flight.flight.price.total.amount < priceTo
}

const filterPriceFrom = (flight: IFlight, priceFrom: number) => {
  return +flight.flight.price.total.amount > priceFrom
}

const filterCountTransfer = (flight: IFlight, countTransfer: number[]) => {
  return flight.flight.legs.map(leg => countTransfer.includes(leg.segments.length - 1)).every(el=>el===true)
}
