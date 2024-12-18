import { FC } from 'react'
import Hero from '../components/Hero/Hero'

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Card {item}</h3>
              <p className="text-gray-600">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
