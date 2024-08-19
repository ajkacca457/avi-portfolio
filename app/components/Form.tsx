import React from 'react'

const Form = () => {
    return (
        <form
            action="https://formspree.io/f/mgvwlkrj"
            method="post"
            acceptCharset="UTF-8"
            className="w-full"
        >
            <input type="hidden" name="_subject" value="New submission!"></input>
            <div className="mb-3">
                <label htmlFor="name" className="block mb-1 text-purple-300 text-sm md:text-base">
                    Full Name
                </label>
                <input
                    name="name"
                    type="text"
                    placeholder="First and Last Name"
                    className="border border-gray-400 py-2 px-3 w-full rounded-md focus:outline-none focus:border-purple-600 text-sm md:text-base"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="block text-purple-300 mb-1 text-sm md:text-base">
                    Email
                </label>
                <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="border border-gray-400 py-2 px-3 w-full rounded-md focus:outline-none focus:border-purple-600 text-sm md:text-base"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="block text-purple-300 mb-1 text-sm md:text-base">
                    Message
                </label>
                <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter your message here"
                    className="border border-gray-400 py-2 px-3 w-full rounded-md focus:outline-none focus:border-purple-600 text-sm md:text-base"
                ></textarea>
            </div>
            <div className="flex justify-between">
                <button type='submit' className="p-[1px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-500 text-white hover:bg-transparent text-sm md:text-base">
                        Send Message
                    </div>
                </button>

            </div>
        </form>
    )
}

export default Form