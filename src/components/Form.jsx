import React from 'react'

const Form = () => {
  return (
    <div className="col-span-full m768:col-span-1 w-full p-4 m768:p-8 bg-slate-800 border-[1px] border-emerald-600 rounded-md shadow-md form-container mt-[10vh] m768:mt-0">
    <h2 className="text-logo-heading font-bold text-emerald-600 mb-2 m768:mb-6">Lets Connect!</h2>
    <form action="https://fabform.io/f/insert-form-id" method="POST">
      <div className="mb-4">
        <label htmlFor="name" className="block text-emerald-500 text-sm font-bold mb-2">Your Name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-emerald-500 bg-gray-500 text-white" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-emerald-500 text-sm font-bold mb-2">Your Email</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-emerald-500 bg-gray-500 text-white"/>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-emerald-500 text-sm font-bold mb-2">Your Message</label>
        <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-emerald-500 bg-gray-500 text-white"></textarea>
      </div>
      <button type="submit"
        className="bg-slate-800 text-emerald-500 px-4 py-2 rounded-md border-[1px] border-emerald-500 transition duration-200 hover:bg-emerald-700 hover:text-white">
        Submit
      </button>
    </form>
  </div>
  )
}

export default Form