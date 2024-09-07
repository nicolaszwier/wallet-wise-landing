"use client"

import { FormEvent, useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      
      const response = await fetch("http://localhost:3100/api/users/support", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({name, email, subject, message, origin: 'web'})
      });

      const json = await response.json()
      console.log("json", json);
      
      
    } catch (error) {
      console.log("error on submitting form: ", error)
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name*</label>
      <input 
        type="text" 
        id="name" 
        className="shadow-sm bg-gray-50 border  bg-blue-100 text-black text-sm rounded-lg block w-full p-2.5" 
        placeholder="Your full name" 
        required 
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {/* <small className="pl-2 font-light text-[#ff6767]">Name is required</small> */}
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email*</label>
      <input 
        type="email" 
        id="email" 
        className="shadow-sm bg-gray-50 border  bg-blue-100 text-black text-sm rounded-lg block w-full p-2.5" 
        placeholder="name@email.com" 
        required 
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
    <div>
      <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject*</label>
      <input 
        type="text" 
        id="subject" 
        className="block p-3 w-full text-sm text-black bg-blue-100 rounded-lg  shadow-sm focus:ring-primary-500 focus:border-primary-500" 
        placeholder="Let us know how we can help you" 
        required 
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message*</label>
      <textarea 
        id="message" 
        rows={6} 
        required 
        className="block p-2.5 w-full text-sm text-black  bg-blue-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" 
        placeholder="Leave a comment..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
    </div>
    <button 
      type="submit" 
      className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-yellow w-full lg:w-fit float-end hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
        Send message
    </button>
</form>
  )
}