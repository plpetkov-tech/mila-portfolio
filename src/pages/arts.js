import React, { useEffect } from "react"
import { navigate } from "gatsby"

const Arts = () => {
  useEffect(() => {
    navigate("/projects")
  }, [])

  return null
}

export default Arts