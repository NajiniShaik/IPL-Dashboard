import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    idValue: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
    }

    const formattedRecentMatches = data.recent_matches.map(each => ({
      result: each.result,
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: formattedMatchDetails,
      recentMatches: formattedRecentMatches,
      idValue: id,
      isLoading: false,
    })
  }

  getTeamsMatch = () => {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      idValue,
    } = this.state

    return (
      <div
        className={`team-matches-detailed-container ${idValue.toLowerCase()}`}
      >
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-matches-img"
        />

        <h1 className="title">Latest Matches</h1>

        <LatestMatch
          matchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />

        <ul className="matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  toggleSpinner = () => (
    <div testid="loader">
      {' '}
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  render() {
    const {isLoading} = this.state

    return <div>{isLoading ? this.toggleSpinner() : this.getTeamsMatch()}</div>
  }
}

export default TeamMatches
