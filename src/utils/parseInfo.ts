import {IFlight} from "@/models/flights"
import {IAirline} from "@/models/interfaces"
import {Transfer} from "@/models/types"

interface IAirlineExtended extends IAirline {
  minPrice: number
}


export default (flights: IFlight[]) => {
  let transfers: number[] = []
  let airlines: IAirlineExtended[] = []

  const getAirlines = (flight: IFlight) => {
    const isAirline = airlines.find(a => a.uid === flight.flight.carrier.uid)
    if (!isAirline) {
      airlines.push({
        uid: flight.flight.carrier.uid,
        caption: flight.flight.carrier.caption,
        maxPrice: +flight.flight.price.total.amount,
        minPrice: +flight.flight.price.total.amount
      })
    } else {
      if (isAirline.maxPrice < +flight.flight.price.total.amount) {
        airlines = airlines.map(a => {
          return a.uid === flight.flight.carrier.uid ? {...a, maxPrice: +flight.flight.price.total.amount} : a
        })
      }
      if (isAirline.minPrice > +flight.flight.price.total.amount) {
        airlines = airlines.map(a => a.uid === flight.flight.carrier.uid ? {
          ...a,
          minPrice: +flight.flight.price.total.amount
        } : a)
      }
    }

  }

  const getTransfers = (flight: IFlight) => {
    flight.flight.legs.forEach(leg =>
      transfers.includes(leg.segments.length - 1) ? null : transfers.push(leg.segments.length - 1)
    )
  }

  flights.forEach(flight => {

    getAirlines(flight)
    getTransfers(flight)

  })

  const maxPrice = airlines
    .reduce((max, airline) => {
      return airline.maxPrice > max ? airline.maxPrice : max
    }, 0)

  const parsedTransfers: Transfer[] = transfers
    .sort((a, b) => b - a)
    .map(transfer => [transfer, false])

  const parsedAirlines = airlines
    .sort((a, b) => a.minPrice - b.minPrice)
    .map(airline => ({...airline, checked: false}))


  return {maxPrice, parsedTransfers, parsedAirlines}
}
