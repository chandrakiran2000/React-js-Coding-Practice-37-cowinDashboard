// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'
// sample data
// const data = [
//   {count: 809680, language: 'Telugu'},
//   {count: 4555697, language: 'Hindi'},
//   {count: 12345657, language: 'English'},
// ]

// Api data
// const data = [
//   {age: '18-44', count: 482792375},
//   {age: '45-60', count: 206837094},
//   {age: 'Above 60', count: 160391841},
// ]

// ;<div className="age-card">
//   <h1 className="card-heading">Vaccination by age</h1>
//   <div className="coverage-full-pie-card">
//     <VaccinationByAge vaccinationByAge={vaccinationByAge} />
//   </div>
// </div>

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <div className="age-card">
      <h1 className="card-heading">Vaccination by age</h1>
      <div className="coverage-full-pie-card">
        <PieChart width={900} height={400}>
          <Pie
            cx="50%"
            cy="40%"
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByAge
