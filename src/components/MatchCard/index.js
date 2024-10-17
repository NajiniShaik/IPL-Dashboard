import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const isWin = matchStatus === 'Won' ? 'win' : 'loss'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-title">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-card-status ${isWin}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
