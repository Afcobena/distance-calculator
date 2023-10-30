import ConverterCard from '../../components/cards/ConverterCard/ConverterCard'
import SavedResultsCard from '../../components/cards/SavedResultsCard/SavedResultsCard'

function Home() {
  return (
    <div className='home'>
        <ConverterCard />

        <SavedResultsCard />
    </div>
  )
}

export default Home;