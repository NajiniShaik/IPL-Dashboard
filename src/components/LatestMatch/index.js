import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="latest-match-container">
      <div className="card">
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <hr className="hr-line" />
      <div className="card last-card">
        <p className="category">First Innings</p>
        <p className="value">{firstInnings}</p>
        <p className="category">Second Innings</p>
        <p className="value">{secondInnings}</p>
        <p className="category">Man Of The Match</p>
        <p className="value">{manOfTheMatch}</p>
        <p className="category">Umpires</p>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
