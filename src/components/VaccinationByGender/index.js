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
//   {count: 4809680, gender: 'Male'},
//   {count: 4555697, gender: 'Female'},
//   {count: 12345657, gender: 'Others'},
// ]

// <div className="gender-card">
//   <h1 className="card-heading">Vaccination by gender</h1>
//   <div className="coverage-half-pie-card">
//     <VaccinationByGender vaccinationByGender={vaccinationByGender} />
//   </div>
// </div>

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="gender-card">
      <h1 className="card-heading">Vaccination by gender</h1>
      <div className="coverage-half-pie-card">
        <PieChart width={900} height={400}>
          <Pie
            cx="50%"
            cy="40%"
            data={vaccinationByGender}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
