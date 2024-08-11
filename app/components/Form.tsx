import React from 'react'

const Form = () => {
    return (
        <form
            action="https://public.herotofu.com/v1/c2ac6a00-252d-11ee-be3e-d1dfc2754df2"
            method="post"
            acceptCharset="UTF-8"
            className="w-full"
        >
            <input type="hidden" name="_subject" value="New submission!"></input>
            <div className="mb-3">
                <label htmlFor="name" className="block mb-1 text-purple-300">
                    Full Name
                </label>
                <input
                    name="Name"
                    type="text"
                    placeholder="First and Last Name"
                    className="border border-gray-400 py-2 px-3 w-full rounded-md focus:outline-none focus:border-purple-600"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="block text-purple-300 mb-1">
                    Email
                </label>
                <input
                    name="Email"
                    type="email"
                    placeholder="Your email"
                    className="border border-gray-400 py-2 px-3 w-full rounded-md focus:outline-none focus:border-purple-600"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="block text-purple-300 mb-1">
                    Message
                </label>
                <textarea
                    name="Message"
                    rows={4}
                    placeholder="Enter your message here"
                    className="border border-gray-400 py-2 px-3 w-full rounded-md focus:outline-none focus:border-purple-600"
                ></textarea>
            </div>
            <div className="flex justify-between">
                <button
                    type="reset"
                    className="ml-auto bg-gray-400 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="ml-3 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default Form