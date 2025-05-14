import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Success = () => {
  return (
    <Layout>
      <Seo
        title="Message Sent - Meelah | UI UX Designer"
        description="Thank you for contacting Meelah. Your message has been sent successfully."
      />
      <div className="max-w-7xl mx-auto mt-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl mb-8">Your message has been sent successfully.</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-pink to-purple px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  )
}

export default Success 