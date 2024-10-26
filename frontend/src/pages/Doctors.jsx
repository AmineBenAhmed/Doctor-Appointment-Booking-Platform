import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'
import { SPECIALITIES } from '../constants/specialities'


const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter( doc => doc.speciality === speciality))
    } else [
      setFilterDoc(doctors)
    ]
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  return (
    <div>
     <p className='text-gray-600' >Browse throough the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5' >
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)} >Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden'}`} >
          {
            SPECIALITIES.map((item, index) => 
              <p 
                key={index} 
                onClick={() => speciality === item ? navigate('/doctors') : navigate(`/doctors/${item}`)} 
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === item ? "bg-indigo-100 text-black" : ""}`}
              >
                {item}
              </p>
              )
          }
        </div>
     
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div 
                onClick={()=> navigate(`/appointment/${item._id}`)}
                key={index * 14}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
              >
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4' >
                  <div className='flex items-center gap-2 text-center text-green-500'  >
                    <p className='w-2 h-2 bg-green-500 rounded-full' ></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium' >{item.name}</p>
                  <p className='text-gray-600 text-sm' >{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Doctors