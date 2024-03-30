// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachplanets => (
          <PlanetItem key={eachplanets.id} planetsDetails={eachplanets} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
