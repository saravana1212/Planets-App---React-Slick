// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {name, imageUrl, description} = planetsDetails

  return (
    <div className="app-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="head">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}
export default PlanetItem
