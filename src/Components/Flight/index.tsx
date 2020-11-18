import React from "react"
import {formatText, getDate, getTimeFull, getTimeShort} from "@/utils/format"
import {IFlight} from "@/models/flights"
import "./flight.scss"

declare global {
  interface Array<T> {
    last: () => T
  }
}

Object.defineProperty(Array.prototype, "last", {
  value() {
    return this[this.length - 1] || this[0]
  },
  enumerable: false,
  writable: true,
  configurable: true
})


interface IProps {
  flight: IFlight
}

const Flight = ({flight}: IProps) => {
  return (
    <div className="flight">
      <div className="flight-title">
        <p className="airline-logo">{flight.flight.carrier.caption}</p>
        <div>
          <p className="title">{flight.flight.price.total.amount} &#8381;</p>
          <p className="title-message">Стоимость для одного взрослого пасажира</p>
        </div>
      </div>
      <div className="one-way-flight flight-there">
        <div className="destinations">
          <span>
            {
              formatText(
                flight.flight.legs[0].segments[0].departureCity.caption,
                flight.flight.legs[0].segments[0].departureAirport.caption
              )}
            <span className="side-color subtext">
              ({flight.flight.legs[0].segments[0].departureAirport.uid})
            </span>
          </span>
          <span className="side-color arrow">&#8594;</span>
          <span>
            {
              formatText(
                flight.flight.legs[0].segments.last().arrivalCity?.caption || "",
                flight.flight.legs[0].segments.last().arrivalAirport?.caption || ""
              )}
            <span className="side-color subtext">
              ({flight.flight.legs[0].segments.last().arrivalAirport.uid})
            </span>
          </span>
        </div>
        <div className="times">
          <p>
            <span className="time">
              {getTimeShort(flight.flight.legs[0].segments[0].departureDate)}
          </span>
            <span className="side-color">
              {getDate(flight.flight.legs[0].segments[0].departureDate)}
            </span>
          </p>
          <span>
            &#128336;
            {getTimeFull(
              flight.flight.legs[0].duration
            )}
          </span>
          <p>
            <span className="side-color">
               {getDate(flight.flight.legs[0].segments.last().arrivalDate)}
            </span>
            <span className="right-time">
              {getTimeShort(flight.flight.legs[0].segments.last().arrivalDate)}
            </span>
          </p>
        </div>
        {flight.flight.legs[0].segments.length - 1 > 0 ?
          (<div className="transfer">
            <p>{flight.flight.legs[0].segments.length - 1} пересадка</p>
          </div>) :
          (<div className="transfer empty">
            <p></p>
          </div>)
        }
        <div className="airline">
          <p>
            Рейс выполняется:
            {flight.flight.legs[0].segments.last().operatingAirline?.caption || flight.flight.carrier.caption}
          </p>
        </div>
      </div>
      <div className="one-way-flight">
        <div className="destinations">
          <span>
            {formatText(
              flight.flight.legs.last().segments[0].departureCity?.caption || "",
              flight.flight.legs.last().segments[0].departureAirport?.caption || ""
            )}
            <span className="side-color subtext">
              ({flight.flight.legs.last().segments[0].departureAirport.uid})
            </span>
          </span>
          <span className="side-color arrow">&#8594;</span>
          <span>
            {formatText(
              flight.flight.legs.last().segments.last().arrivalCity.caption,
              flight.flight.legs.last().segments.last().arrivalAirport.caption
            )}

            <span className="side-color subtext">
              ({flight.flight.legs.last().segments.last().arrivalAirport.uid})
            </span>
          </span>
        </div>
        <div className="times">
          <p>
            <span className="time">
              {getTimeShort(flight.flight.legs.last().segments[0].departureDate)}
          </span>
            <span className="side-color">
              {getDate(flight.flight.legs.last().segments[0].departureDate)}
            </span>
          </p>
          <span>
            &#128336;
            {getTimeFull(
              flight.flight.legs[1].duration
            )}
          </span>
          <p>
            <span className="side-color">
              {getDate(flight.flight.legs.last().segments.last().arrivalDate)}
            </span>
            <span className="right-time">
              {getTimeShort(flight.flight.legs.last().segments.last().arrivalDate)}
            </span>
          </p>
        </div>
        {flight.flight.legs.last().segments.length - 1 > 0 ?
          (<div className="transfer">
            <p>{flight.flight.legs.last().segments.length - 1} пересадка</p>
          </div>) :
          (<div className="transfer empty">
            <p></p>
          </div>)
        }
        <div className="airline">
          <p>
            Рейс выполняется:&nbsp;
            {flight.flight.legs.last().segments.last().operatingAirline?.caption || flight.flight.carrier.caption}
          </p>
        </div>
      </div>
      <div className="button">
        <button>Выбрать</button>
      </div>
    </div>
  )
}

export default Flight
