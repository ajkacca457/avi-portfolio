import React from 'react'

const Form = () => {
  return (
    <div class="w-full p-8 bg-slate-800 border-[1px] border-purple-500 rounded-md shadow-md form-container">
    <h2 class="text-3xl font-bold text-purple-400 mb-6">Lets Connect!</h2>
    <form action="https://fabform.io/f/insert-form-id" method="POST">
      <div class="mb-4">
        <label for="name" class="block text-purple-500 text-sm font-bold mb-2">Your Name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500 bg-gray-500 text-white" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-purple-500 text-sm font-bold mb-2">Your Email</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500 bg-gray-500 text-white"/>
      </div>
      <div class="mb-6">
        <label for="message" class="block text-purple-500 text-sm font-bold mb-2">Your Message</label>
        <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500 bg-gray-500 text-white"></textarea>
      </div>
      <button type="submit"
        class="bg-slate-800 text-purple-500 px-4 py-2 rounded-md border-[1px] border-purple-700 transition duration-200 hover:bg-purple-700 hover:text-white">
        Submit
      </button>
    </form>
  </div>
  )
}

export default Form