import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AccessDenied = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
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