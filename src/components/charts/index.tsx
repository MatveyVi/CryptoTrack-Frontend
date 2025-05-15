import { Line } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js'
import 'chartjs-adapter-date-fns'
import crosshair from 'chartjs-plugin-crosshair'
import { useChartQuery } from '../../app/services/coinApi'
import { Spinner, Tab, Tabs } from '@heroui/react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  crosshair
)
type Interval = '1d' | '7d' | '30d' | '90d' | '1y'

type Props = {
  id: string
}

export const Charts: React.FC<Props> = ({ id }) => {
  const [chartData, setChartData] = useState<any>(null)

  // Стейт и тип для интервалов
  const [activeInterval, setActiveInterval] = useState<Interval>('1d')
  const intervals: Interval[] = ['1d', '7d', '30d', '90d', '1y']

  const { data, isLoading } = useChartQuery({
    coinId: id || '',
    interval: activeInterval,
  }, {
    refetchOnMountOrArgChange: true,
  }
  )
  useEffect(() => {
    if (chartData) console.log('🎨 chartData обновилось для:', activeInterval)
  }, [chartData])
  // ЛОГИРОВАНИЕ ОБНОВЛЕНИЙ СОСТОЯНИЯ АКТИВНОГО ИНТЕРВАЛА
  // useEffect(() => {
  //   console.log('Interval changed to:', activeInterval)
  // }, [activeInterval])

  // useEffect(() => {
  //   console.log('Fetched chart data:', data)
  // }, [data])
  // форматирование для графика
  const formatBillions = (num: number) => {
    return `$${(num / 1_000_000_000).toFixed(2)}B`
  }

  // юз еффект если меняются данные, которые получаем при триггере квери
  useEffect(() => {
    if (data) {
      // Форматируем данные в объект с x, y для цены, и добавляем marketCap и volume
      const formattedPrices = data.prices.map(([timestamp, price], i) => ({
        x: new Date(timestamp),
        y: price,
        marketCap: data.market_caps[i][1],
        volume: data.total_volumes[i][1],
      }))
      

      setChartData({
        labels: formattedPrices.map((p) => p.x),
        datasets: [
          {
            label: 'Цена (USD)',
            data: formattedPrices,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      })
    }
    console.log(chartData)
  }, [data])

  if (!chartData) return <Spinner className='size-120' />

  return (
    <div className=''>
      <div className='mb-5 flex justify-end'>
        <Tabs
          variant='underlined'
          selectedKey={activeInterval}
          onSelectionChange={(key) => setActiveInterval(key as Interval)}
        >
          {intervals.map((interval) => (
            <Tab
              key={interval}
              title={interval.toUpperCase()}
            />
          ))}
        </Tabs>
      </div>
      <div>
        <Line
          key={activeInterval}
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'nearest',
              intersect: false,
              axis: 'x',
            },
            elements: {
              line: {
                tension: 0.4,
                borderWidth: 2,
                borderColor: '#10b981',
              },
              point: {
                radius: 0,
                hoverRadius: 6,
                hoverBorderWidth: 2,
                hoverBorderColor: '#10b981',
                backgroundColor: '#10b981',
              },
            },
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                  tooltipFormat: 'PPpp',
                },
                grid: {
                  display: false,
                },
                ticks: {
                  color: '#9CA3AF',
                },
                border: {
                  display: false,
                },
              },
              y: {
                beginAtZero: false,
                position: 'right',
                ticks: {
                  callback: (value) => `$${value}`,
                  color: '#9CA3AF',
                },
                grid: {
                  color: 'rgba(200,200,200,0.1)',
                },
                border: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: false,
                backgroundColor: '#1F2937',
                titleColor: '#fff',
                bodyColor: '#D1D5DB',
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 10,
                cornerRadius: 6,
                callbacks: {
                  title: (contexts) => {
                    const date = contexts[0].parsed.x
                    return new Date(date).toLocaleString()
                  },
                  label: (context) => {
                    const dataPoint = context.raw as any
                    return [
                      `Цена: $${dataPoint.y.toFixed(2)}`,
                      `Объём: ${formatBillions(dataPoint.volume)}`,

                    ]
                  },
                },
                position: 'nearest',
              },
              crosshair: {
                line: {
                  color: '#10b981',
                  width: 1,
                  dashPattern: [6, 6],
                },
                sync: { enabled: false },
                zoom: { enabled: false },
                snap: { enabled: true },
              },
            },
            hover: {
              mode: 'nearest',
              intersect: false,
            },
          }}
          height={400}
        />
      </div>
    </div>
  )
}
