import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  getTeamsList = () => {
    const {teamsList} = this.state
    return (
      <div className="container">
        <div className="logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>

        <ul className="teams-list">
          {teamsList.map(eachItem => (
            <TeamCard teamData={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  toggleSpinner = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="dashboard-home-page">
        {isLoading ? this.toggleSpinner() : this.getTeamsList()}
      </div>
    )
  }
}

export default Home
