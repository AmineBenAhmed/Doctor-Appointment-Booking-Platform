import React, { createContext, useState } from 'react'
import { doctors } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [doctors, setDoctors] = useState([])
  const currencySymbol = '$'
  const backendUrl = import.meta.env.VITE_BACKEN_URL

  const getDoctorsData = async () => {
    try {
      const {data} = await axios.get(`${backendUrl}/api/doctor/list`)
      if (data.success) {
        setDoctors(data.doctors)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const value = {
    doctors, currencySymbol
  }

  return (
    <AppContext.Provider value={value} >
      {props.children}
    </AppContext.Provider>
  )
}


export default AppContextProvider