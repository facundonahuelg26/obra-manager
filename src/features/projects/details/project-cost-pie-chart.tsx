// components/ProjectCostPieChart.tsx
'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import { useTheme } from 'next-themes'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ProjectCostPieChart = () => {
  const colorPalette = [
    '#4b7ed6',
    '#a66fd1',
    '#8fbe54',
    '#d6a418',
    '#e06666',
    '#76c2af',
    '#d484d4',
    '#f5a623',
  ]
  const categoryData = [
    { name: 'Cimientos', cost: 3000 },
    { name: 'Techo', cost: 4500 },
    { name: 'Pisos', cost: 1500 },
    { name: 'Paredes', cost: 2000 },
    { name: 'Electricidad', cost: 1800 },
    { name: 'Ventanas', cost: 1200 },
    { name: 'Instalaciones', cost: 1600 },
  ]

  const categories = categoryData.map((item) => item.name)
  const series = categoryData.map((item) => item.cost)
  const colors = categories.map((_, i) => colorPalette[i % colorPalette.length])
  const { theme } = useTheme()
  const options: ApexOptions = {
    // labels: ['Cimientos', 'Techo', 'Pisos', 'Paredes'],
    //colors: ['#4b7ed6', '#a66fd1', '#8fbe54', '#d6a418'],
    labels: categories,
    colors,
    stroke: {
      show: true,
      width: 2,
      colors: [theme === 'dark' ? '#374151' : '#f9fafb'], // por ejemplo: gray-800 para dark mode
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'radial', // o 'horizontal' / 'vertical'
        shadeIntensity: 0.5,
        //gradientToColors: ['#b3df72', '#cc95e9', '#b3df72', '#FFCA28'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: theme === 'dark' ? '#f9fafb' : '#374151', // texto claro para dark mode (tailwind: gray-200)
      },
    },
    dataLabels: {
      style: {
        colors: [theme === 'dark' ? '#f9fafb' : '#374151'], // casi blanco (tailwind: gray-50)
      },
    },
    // theme: {
    //   mode: 'light', // 🌙 Activa dark mode
    // },
    chart: {
      background: 'transparent', // sin fondo blanco
    },
  }

  // const series = [3000, 4500, 1500, 2000] // costos por categoría

  return (
    <Chart
      options={options}
      series={series}
      type='donut'
      width='100%'
      height={300}
      key={theme}
    />
  )
}

export default ProjectCostPieChart
