import ContactForm from "@/components/contact-form";
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
            <ContactForm />
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}