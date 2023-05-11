import { IoClose } from 'react-icons/all'
import { useDispatch, useSelector } from 'react-redux'
import { clearAll, deleteFilterData } from '../redux/jobSlice'

function FilterBar() {
  const data = useSelector((state) => state.job.data)
  const dispatch = useDispatch()
  const handleClear = () => {
    dispatch(clearAll())
  }

  return (
    <div className="bg-white py-4 rounded-md mb-12 md:mb-4 shadow-xl flex items-center justify-between px-8">
      <div className="flex gap-4 flex-wrap">
        {data?.map((val) => {
          return (
            <div
              className="bg-light-grayish-cyan-background rounded-sm flex items-center gap-2 pl-2"
              key={val.id}
            >
              <div>{val.name}</div>
              <button
                onClick={() => dispatch(deleteFilterData(val?.id))}
                className="bg-desaturated-dark-cyan py-1 px-[6px] rounded-sm hover:bg-very-dark-grayish-cyan text-white"
              >
                <IoClose />
              </button>
            </div>
          )
        })}
      </div>
      <button
        className="hover:text-desaturated-dark-cyan hover:underline"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  )
}
export default FilterBar
