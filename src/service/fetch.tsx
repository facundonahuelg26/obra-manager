export const fetchData = async ({
  vs_currency = 'usd',
}: {
  vs_currency?: string
}) => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&per_page=10&page=1`

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0', // Evita errores de "Too Many Requests"
      },
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener los datos:', (error as Error).message)
    return []
  }
}
