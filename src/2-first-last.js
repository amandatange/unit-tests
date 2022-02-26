export const firstLast = (items) => {
  let message = '';
  if (items.length === 0) {
    message = "No items!"
  } else if (items.length === 1) {
    message = `Only item: ${items}`
  } else {
    message = `First: ${items[0]}, Last: ${items.at(-1)}`
  }
  return message
}
