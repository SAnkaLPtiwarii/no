import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-gray-600 mb-8">This is a starter template for your Vite + React project</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
