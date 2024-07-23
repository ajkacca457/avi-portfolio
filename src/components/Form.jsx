import React from 'react'

const Form = () => {
  return (
    <div class="w-full p-8 bg-purple-700 rounded-md shadow-md form-container">
    <h2 class="text-2xl font-semibold text-white mb-6">Say Something!</h2>
    <form action="https://fabform.io/f/insert-form-id" method="POST">
      <div class="mb-4">
        <label for="name" class="block text-gray-300 text-sm font-bold mb-2">Your Name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-300 text-sm font-bold mb-2">Your Email</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"/>
      </div>
      <div class="mb-6">
        <label for="message" class="block text-gray-300 text-sm font-bold mb-2">Your Message</label>
        <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"></textarea>
      </div>
      <button type="submit"
        class="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        Submit
      </button>
    </form>
  </div>
  )
}

export default Form