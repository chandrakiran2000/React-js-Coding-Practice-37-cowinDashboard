// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

/* renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  } */

// <>
//       <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
//       <VaccinationByGender vaccinationByGender={vaccinationByGender} />
//       <VaccinationByAge vaccinationByAge={vaccinationByAge} />
//       <div className="coverage-card">
//         <h1 className="card-heading">Vaccination Coverage</h1>
//         <div className="coverage-bar-card">
//           <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
//         </div>
//       </div>
//       <div className="gender-card">
//         <h1 className="card-heading">Vaccination by gender</h1>
//         <div className="coverage-half-pie-card">
//           <VaccinationByGender vaccinationByGender={vaccinationByGender} />
//         </div>
//       </div>
//       <div className="age-card">
//         <h1 className="card-heading">Vaccination by age</h1>
//         <div className="coverage-full-pie-card">
//           <VaccinationByAge vaccinationByAge={vaccinationByAge} />
//         </div>
//       </div>
//     </>

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    last7DaysVaccination: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
  }

  componentDidMount() {
    this.renderApi()
  }

  getUpdated = last7 => {
    const updatedData = last7.map(each => ({
      dose1: each.dose_1,
      dose2: each.dose_2,
      vaccineDate: each.vaccine_date,
    }))

    return updatedData
  }

  renderApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    // console.log(response)
    // console.log(data)
    // console.log(data.vaccination_by_age)
    // console.log(data.vaccination_by_gender)
    if (response.ok === true) {
      const last7days = this.getUpdated(data.last_7_days_vaccination)

      this.setState({
        apiStatus: apiStatusConstants.success,
        last7DaysVaccination: last7days,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      })
      console.log(this.state)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-card">
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    </div>
  )

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <div className="failure-card">
      <img
        className="failure-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 style={{color: '#ffffff'}}>Something went wrong</h1>
    </div>
  )

  renderSuccess = () => {
    const {last7DaysVaccination, vaccinationByAge} = this.state
    const {vaccinationByGender} = this.state
    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  renderStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.success:
        return this.renderSuccess()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-card">
        <div className="main-bg-card">
          <div className="logo-card">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <h1 className="logo-heading">co-WIN</h1>
          </div>
          <div className="title-card">
            <h1 className="title-heading">CoWIN Vaccination in India</h1>
          </div>
          {this.renderStatus()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
