import React from 'react'
import useSidebar from "@/hooks/useSidebar"
import "./sidebar.scss"

const Sidebar = () => {
  const {
    airlines,
    maxPrice,
    price,
    transfers,
    sort,
    airlinesHandler,
    priceHandler,
    transferHandler,
    sortByHandler
  } = useSidebar()

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sort">
          <h4 className="title">Сортировать</h4>
          <p>
            <input
              id="ascending-price"
              type="radio"
              checked={sort === "ascending"}
              onChange={() => sortByHandler('ascending',)}
            />
            <label htmlFor="ascending-price"> - по возрастанию цены</label>
          </p>
          <p>
            <input
              id="descending-price"
              type="radio"
              value={price.from}
              checked={sort === "descending"}
              onChange={() => sortByHandler('descending',)}
            />
            <label htmlFor="descending-price"> - по убыванию цены</label>
          </p>
          <p>
            <input
              id="time"
              type="radio"
              value={price.to}
              checked={sort === "time"}
              onChange={() => sortByHandler('time',)}
            />
            <label htmlFor="time"> - по времени в пути</label>
          </p>
        </div>

        <div className="filter">
          <h4 className="title">Фильтровать</h4>
          {(transfers as []).map(transfer =>
            (
              <p key={transfer[0]}>
                <input id={`transfer${transfer[0]}`}
                       checked={transfer[1]}
                       type="checkbox"
                       onChange={() => transferHandler(transfer)}
                />
                <label htmlFor={`transfer${transfer[0]}`}>
                  {transfer[0] === 0 ? ' - без пересадок' : ` - ${transfer[0]} пересадка`}
                </label>
              </p>
            ))}
        </div>

        <div className="price">
          <h4 className="title">Цена</h4>
          <p>
            <label htmlFor="price-from">От</label>
            <input
              id="price-from"
              type="number"
              name="from"
              min="0"
              max={maxPrice}
              placeholder="0"
              onChange={priceHandler}
            />
          </p>
          <p>
            <label htmlFor="price-to">До</label>
            <input
              id="price-to"
              type="number"
              name="to"
              min="0"
              max={maxPrice}
              placeholder={maxPrice.toString()}
              onChange={priceHandler}
            />
          </p>
        </div>

        <div className="airlines">
          <h4 className="title">Авиакомпании</h4>
          {airlines.map(airline => (
            <div className="airline" key={airline.uid}>
              <input
                id={`airline${airline.uid}`}
                type="checkbox"
                checked={airline.checked}
                onChange={(e) => airlinesHandler(airline.uid, e)}
              />
              <label htmlFor={`airline${airline.uid}`}> - {airline.caption} </label>
              <p className="price"> &nbsp;от {airline.minPrice}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Sidebar
