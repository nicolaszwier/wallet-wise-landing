"use client"

import { CONSTANTS } from "@/app/app-constants"
import Link from "next/link"
import { FormEvent, useState } from "react"

enum PageState {
  initial,
  success,
}

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [pageState, setPageState] = useState<PageState>(PageState.initial)
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const response = await fetch(`${CONSTANTS.apiBaseUrl}/users/support`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({name, email, subject, message, origin: 'web'})
      });

      const json = await response.json()

      if (json?.statusCode < 200 || json?.statusCode > 299) {
        console.log(json);
        throw new Error(json?.message)
      }

      if (response.status >= 200 && response.status <= 299) {
        setPageState(PageState.success)
      }      
      
    } catch (error) {
      setShowError(true)
      console.log("error on submitting form: ", error)
    }
  }

  return (
    <>
      {pageState === PageState.initial && (
        <form className="space-y-8" onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name*</label>
            <input 
              type="text" 
              id="name" 
              className="shadow-sm border bg-blue-100 text-black text-sm rounded-lg block w-full p-2.5" 
              placeholder="Your full name" 
              required 
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email*</label>
            <input 
              type="email" 
              id="email" 
              className="shadow-sm border bg-blue-100 text-black text-sm rounded-lg block w-full p-2.5" 
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
              className="block p-3 w-full text-sm text-black bg-blue-100 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500" 
              placeholder="Let us know how we can help you" 
              required 
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message*</label>
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
          {showError && (
            <div className="border border-blue-400 rounded-md p-2 flex justify-center flex-col items-center">
              <h3 className="question-btn flex items-start gap-x-5 justify-between rounded-lg text-center text-green text-lg font-bold py-2" data-toggle="answer-1">
                Oops! Something went wrong.
              </h3>
              <p className="answer pt-2 pb-5 text-sm lg:text-base text-blue-100 text-center">
                We couldn’t send your message. Please try again later or contact us directly at
                <Link className="font-bold cursor-pointer text-green text-center" href="mailto:contact@walletwise.cash?subject=WalletWise%20support%20request"> contact@walletwise.cash </Link>
              </p>
            </div>
          )}
          <button 
            type="submit" 
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-green w-full lg:w-fit float-end hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
              Send message
          </button>
        </form>
      )}

      {pageState === PageState.success && (
        <div className="border border-blue-400 rounded-md p-2 flex justify-center flex-col items-center">
          <h3 className="question-btn flex items-start gap-x-5 justify-between rounded-lg text-center text-green text-lg font-bold py-2" data-toggle="answer-1">
              Thank you for reaching out!
          </h3>
          <p className="answer pt-2 pb-5 text-sm lg:text-base text-blue-100 text-center">
            We’ve received your message and will get back to you as soon as possible. In the meantime, feel free to explore WalletWise or check out our 
            <Link className="font-bold cursor-pointer text-green text-center" href="/frequently-asked-questions"> FAQ </Link>
            page for quick answers.
          </p>
        </div>
      )}

    </>
  )
}