interface ISegment {
  classOfServiceCode: number,
  classOfService: {
    uid: string,
    caption: string,
  },
  departureAirport: {
    uid: string,
    caption: string,
  },
  departureCity: {
    uid: string,
    caption: string,
  },
  aircraft: {
    uid: string,
    caption: string,
  },
  travelDuration: number,
  arrivalCity: {
    uid: string,
    caption: string,
  },
  arrivalDate: string,
  flightNumber: number,
  techStopsInfos: [],
  departureDate: string,
  stops: number,
  servicesDetails: {
    freeCabinLuggage: {},
    paidCabinLuggage: {},
    tariffName: string,
    fareBasis: {
      ADULT: string
    }, freeLuggage: {
      ADULT: {
        pieces: number,
        nil: boolean,
        unit: string
      }
    },
    paidLuggage: {}
  },
  airline: {
    uid: string,
    caption: string,
    airlineCode: string
  },
  starting: boolean,
  arrivalAirport: {
    uid: string,
    caption: string,
  },
  operatingAirline?:{
    uid:string,
    caption: string,
    airlineCode:string
  }
}

export interface IFlight {
  hasExtendedFare: boolean,
  flight: {
    carrier: {
      uid: string,
      caption: string,
      airlineCode: string
    },
    price: {
      total: {
        amount: string,
        currency: string,
        currencyCode: string
      },
      totalFeeAndTaxes: {
        amount: string,
        currency: string,
        currencyCode: string
      },
      rates: {
        totalUsd: {
          amount: string,
          currencyCode: string
        },
        totalEur: {
          amount: string,
          currencyCode: string
        }
      },
      passengerPrices: {
        total: {
          amount: string,
          currency: string,
          currencyCode: string
        },
        passengerType: {
          uid: string,
          caption: string,
        },
        singlePassengerTotal: {
          amount: string,
          currency: string,
          currencyCode: string
        },
        passengerCount: number,
        tariff: {
          amount: string,
          currency: string,
          currencyCode: string
        },
        feeAndTaxes: {
          amount: string,
          currency: string,
          currencyCode: string
        }
      }[]
    },
    servicesStatuses: {
      baggage: {
        uid: string,
        caption: string
      },
      exchange: {
        uid: string,
        caption: string
      },
      refund: {
        uid: string,
        caption: string
      }
    },
    legs: {
      duration: number,
      segments: ISegment[]
    }[],
    exchange: {
      ADULT: {
        exchangeableBeforeDeparture: boolean,
        exchangeAfterDeparture: {
          amount: string,
          currency: string,
          currencyCode: string
        },
        exchangeBeforeDeparture: {
          amount: string,
          currency: string,
          currencyCode: string
        },
        exchangeableAfterDeparture: boolean
      }
    },
    isTripartiteContractDiscountApplied: boolean,
    international: boolean,
    seats: {
      count: number,
      type: {
        uid: string,
        caption: string
      }
    }[],
    refund: {
      ADULT: {
        refundableBeforeDeparture: boolean,
        refundableAfterDeparture: boolean
      }
    }
  },
  flightToken:string
}

export interface IFlights {
  flights: IFlight[]
  bestPrices:any
}
