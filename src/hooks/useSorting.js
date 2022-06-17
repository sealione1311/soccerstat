export const useSorting = (items, query) => {
  if(query) {
    const filtredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    return [filtredItems, filtredItems.length]
  }
  return [items, items.length];
}
