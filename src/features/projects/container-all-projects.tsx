import { fetchData } from '@/service/fetch'
import React from 'react'
import AllProjects from './all-projects'

const ContainerAllProjects = async ({
  vs_currency,
}: {
  vs_currency?: string
}) => {
  const data = await fetchData({ vs_currency: vs_currency })
  console.log(data)
  return <AllProjects data={data} />
}

export default ContainerAllProjects
