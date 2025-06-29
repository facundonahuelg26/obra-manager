export const truncateText = (text: string, maxLength: number = 25): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
