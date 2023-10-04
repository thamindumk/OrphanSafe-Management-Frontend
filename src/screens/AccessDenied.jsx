import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {useLogoutMutation} from '../slices/userApiSlice'

const AccessDenied = () => {
  const navigate = useNavigate()
  const [logout, {isLoading, isError}] = useLogoutMutation();
  useEffect(() => {
    setTimeout(async () => {
      const response = await logout();
      navigate("/auth/login")
    }, 3000);
  })
  return (
    <div className="col text-center pt-5">
      <img
        src="/app-icon.png"
        alt=""
        style={{ height: "50px", width: "50px", marginBottom: "30px" }}
      />
      <h5>Unauthorized access! Redirecting, Please wait...</h5>
    </div>
  )
}

export default AccessDenied