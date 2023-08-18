import React from 'react'

const Card = () => {
  return (
    <div className="card border p-5 rounded-lg">
      <img className="w-full rounded-lg" src="/1.jpg" alt="product image" />
      <div className="card-content py-6">
        <h4 className="text-xl font-semibold text-white">Blue Venus</h4>
      
        <div className="flex justify-between">
          <span className="text-xl font-bold text-white">$599</span>
          <a href="#" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Floor Price</a>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const cards = [
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
    },
    {
      title: "Samsung Galaxy Watch4 Classic, 42mm, Black",
      price: 399,
    },
    {
      title: "Fitbit Versa 3, Black",
      price: 299,
    },
    {
      title: "Garmin Forerunner 245, Black",
      price: 399,
    },
  ]

  return (
    <div className=''>
        <div className='flex mx-auto justify-center items-center max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-4xl  md:text-5xl  xl:text-6xl dark:text-white'><h1 className='items-center py-10'>NEW NFTs</h1></div>
      <div className="lg:w-4/5  mx-auto px-4 py-4 ">
        <div className=" grid lg:grid-cols-4 sm:grid-cols-4  gap-4">
          {cards.map((card, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <div className="py-6 flex justify-center ">
      <div className="flex items-center justify-center border w-auto rounded-lg px-24 py-4 w-62 mx-6 bg-gradient-to-r from-pink-500 to-indigo-500 ">
        <p className="text-xl text-gray-200">View More </p>
      </div>
    </div>
    </div>
  )
}

export default App
