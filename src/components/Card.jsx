import data from '../data.json'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../redux/jobSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'

function Card() {
  const dispatch = useDispatch()
  const jobData = useSelector((data) => data.job.data)
  const [values, setValues] = useState(data)

  const handleClick = (e) => {
    const val = e.target.textContent
    const valid = jobData.some((test) => test.name === val)
    if (!valid) {
      dispatch(addData({ id: nanoid(), name: val }))
    }
  }

  useEffect(() => {
    if (jobData.length === 0) {
      setValues(data)
      return
    }
    const filterJobName = jobData.map((item) => {
      return item.name
    })
    const filteredJobs = data.filter((job) => {
      const { role, level, languages, tools } = job
      const tags = [role, level, ...languages, ...tools]
      return filterJobName.every((filter) => tags.includes(filter))
    })
    setValues(filteredJobs)
  }, [jobData])

  return values.map((val) => {
    return (
      <div
        className="bg-white shadow-xl rounded-md flex flex-col md:flex-row items-start md:items-center justify-between p-6 relative gap-y-4 md:gap-y-0 hover:bg-light-grayish-cyan-background cursor-pointer hover:scale-105 hover:border-l-4 hover:border-desaturated-dark-cyan"
        key={val.id}
      >
        <div className="flex items-center gap-5 flex-col md:flex-row mt-3 md:mt-0">
          <img
            src={val.logo}
            alt=""
            className="absolute -top-6 left-5 w-11 h-11 md:w-[88px] md:h-[88px] md:relative md:top-0 md:left-0"
          />
          <div className="flex flex-col gap-y-1 ">
            <ul className="flex gap-x-4 items-center">
              <li className="text-desaturated-dark-cyan font-medium">
                {val.role}
              </li>
              {val.new && (
                <li className="bg-desaturated-dark-cyan text-white py-[2px] px-[6px]  rounded-xl uppercase text-xs">
                  New!
                </li>
              )}
              {val.featured && (
                <li className="bg-very-dark-grayish-cyan text-white uppercase py-[2px] px-[6px] text-xs rounded-xl">
                  Featured
                </li>
              )}
            </ul>
            <div className="font-bold">{val.position}</div>
            <ul className="flex text-gray-400 gap-x-2 ">
              <li>{val.postedAt}</li>
              <li>&#183;</li>
              <li>{val.contract}</li>
              <li>&#183;</li>
              <li>{val.location}</li>
            </ul>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full md:hidden"></div>
        <div>
          <ul className="flex  flex-wrap md:flex-nowrap gap-4">
            <li
              onClick={handleClick}
              className="bg-light-grayish-cyan-background text-desaturated-dark-cyan p-2 cursor-pointer rounded-md hover:text-white hover:bg-desaturated-dark-cyan"
            >
              {val.role}
            </li>
            <li
              onClick={handleClick}
              className="bg-light-grayish-cyan-background text-desaturated-dark-cyan p-2 cursor-pointer rounded-md hover:text-white hover:bg-desaturated-dark-cyan"
            >
              {val.level}
            </li>
            {val.languages.concat(val.tools).map((x, i) => {
              return (
                <li
                  onClick={handleClick}
                  className="bg-light-grayish-cyan-background text-desaturated-dark-cyan p-2 cursor-pointer rounded-md hover:text-white hover:bg-desaturated-dark-cyan"
                  key={i}
                >
                  {x}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  })
}
export default Card
