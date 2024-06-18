// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

// sample data
// const data = [
//   {group_name: "Group A",boys: 200,girls: 400,},
//   {group_name: "Group B",boys: 3000,girls: 500,},
//   {group_name: "Group C",boys: 1000,girls: 1500,},
//   {group_name: "Group D",boys: 700,girls: 1200,},
// ]

// Api data
// const data = [
//   {dose1: 7, dose2: 3, vaccineDate: '18th May'},
//   {dose1: 2, dose2: 3, vaccineDate: '19th May'},
//   {dose1: 11, dose2: 3, vaccineDate: '20th May'},
//   {dose1: 4, dose2: 8, vaccineDate: '21st May'},
//   {dose1: 3, dose2: 3, vaccineDate: '22nd May'},
//   {dose1: 5, dose2: 4, vaccineDate: '23rd May'},
//   {dose1: 2, dose2: 5, vaccineDate: '24th May'},
// ]

// ;<div className="coverage-card">
//   <h1 className="card-heading">Vaccination Coverage</h1>
//   <div className="coverage-bar-card">
//     <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
//   </div>
// </div>

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props
  console.log('4', last7DaysVaccination)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="coverage-card">
      <h1 className="card-heading">Vaccination Coverage</h1>
      <div className="coverage-bar-card">
        <BarChart
          width={900}
          height={400}
          data={last7DaysVaccination}
          margin={{top: 5}}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="Boys" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose2" name="Girls" fill="#f54394" barSize="20%" />
        </BarChart>
      </div>
    </div>
  )
}

export default VaccinationCoverage
