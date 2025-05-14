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
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
type Props = {
    data: {
      prices: [number, number][] // [timestamp, price]
      market_cap: [number, number][]
      total_volume: [number, number][]
    }
  }

export const Charts: React.FC<Props> = ({
    data
}) => {
    const [chartData, setChartData] = useState<any>(null)
  return (
    <div>Charts</div>
  )
}
