export const formatText = (a: string, b: string) => `${a}, ${b}`
export const getTimeShort = (date: string) =>
  new Intl.DateTimeFormat('ru-RU', {hour: "2-digit", minute: "2-digit"})
    .format(new Date(date))

export const getTimeFull = (date: number) => {
  return `
  ${Math.floor(date / 60)} ч 
  ${Math.floor(date % 60)} мин
`
}

export const getDate = (date: string) => {
  let newDate = new Intl.DateTimeFormat('ru', {month: "short", weekday: "short", day: "numeric"})
    .format(new Date(date))
    .split(",")
  return `${newDate[1]} ${newDate[0]}`
}
