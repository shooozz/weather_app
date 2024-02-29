import React from 'react'

function fetchDataWheather() {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=188003afc1c09b4c89de6e03eed25efb',
      )
      console.log(response)
      const json = await response.json()
      setData(json)
    }

    fetchData()
  }, [])

  if (!data) return null

  return (
    <>
      <h2>{data.city.name}</h2>
    </>
  )
}

export default fetchDataWheather
