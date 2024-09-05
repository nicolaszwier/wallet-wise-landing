import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Contact() {
  return (
    <main className="flex md:min-h-screen flex-col items-center m-auto justify-between">
      <Header />
      <div className="max-w-7xl flex w-full p-3 lg:p-6 pt-8 gap-8">
        <div className="w-full flex bg-blue-500 justify-center items-center flex-col p-6 pt-8 pb-14 gap-10">
          <h1 className="max-w-7xl font-extrabold text-center text-4xl md:mt-10">Contact Us</h1>
          {/* <h2 className="max-w-7xl text-center text-xl">We’re Here to Help</h2> */}
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            If you have any questions, feedback, or need assistance with WalletWise, don’t hesitate to reach out. <br /> 
            Our team is here to ensure you have the best experience possible.
          </p>
        
          <section className="w-full max-w-screen-md">
              <form action="#" className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border  bg-blue-100 text-black text-sm rounded-lg block w-full p-2.5" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border  bg-blue-100 text-black text-sm rounded-lg block w-full p-2.5" placeholder="name@email.com" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-black bg-blue-100 rounded-lg  shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-black  bg-blue-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-yellow w-full lg:w-fit float-end hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
              </form>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}