import { useSelector } from 'react-redux'
import Card from './components/Card'
import FilterBar from './components/FilterBar'
import bgImage from './images/bg-header-desktop.svg'
import bgImageMobile from './images/bg-header-mobile.svg'
import classNames from 'classnames'

function App() {
  const data = useSelector((state) => state.job.data)
  return (
    <div className="w-full h-full">
      <div className="bg-desaturated-dark-cyan">
        <img src={bgImage} alt="" className="hidden md:block md:w-full" />
        <img src={bgImageMobile} alt="" className=" md:hidden" />
      </div>
      <div className="max-w-5xl mx-auto -mt-16 p-4 relative flex gap-2 flex-col">
        {data.length > 0 && <FilterBar />}
        <div
          className={classNames({
            'flex flex-col gap-12 md:gap-6': true,
            'mt-20': data.length === 0,
          })}
        >
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
