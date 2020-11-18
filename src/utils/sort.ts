import {IFlight} from "@/models/flights"
import {SortBy} from "@/state/reducer"

export default function (flights: IFlight[], sortBy: SortBy) {
  switch (sortBy) {
    case "ascending":
      return flights.sort((a, b) => +a.flight.price.total.amount - +b.flight.price.total.amount)
    case "descending":
      return flights.sort((a, b) => +b.flight.price.total.amount - +a.flight.price.total.amount)
    case "time":
      return flights
        .sort((a, b) =>
          a.flight.legs.reduce((pre, segment) => pre + segment.duration, 0) -
          b.flight.legs.reduce((pre, segment) => pre + segment.duration, 0)
        )
    case "default":
      return flights
  }
}
