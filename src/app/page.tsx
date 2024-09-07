import Image from "next/image";
import Header from "../components/header";
import FeatureItem from "../components/feature-item";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center m-auto">
      <Header></Header>
      
      <div className="max-w-7xl flex flex-col-reverse sm:flex-row w-full p-6 pt-12 sm:min-h-[calc(100%-6rem)] gap-8">
        <div className="flex flex-col items-center justify-center min-w-64">
          <Image
            className="hidden dark:block" 
            src="/iphone.png"
            alt="Iphone image with a screenshot of the the app"
            width={300}
            height={800}
          />
          <Image 
            className="block dark:hidden"
            src="/iphone-light.png"
            alt="Iphone image with a screenshot of the the app"
            width={300}
            height={800}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <h1 className="font-serif text-center text-yellow text-5xl leading-tight md:leading-snug">Simplify your finances planning with WalletWise</h1>
          <h2 className="text-center text-xl">The easiest way to control your personal finances!</h2>
          <Image
            className="relative dark:invert cursor-pointer"
            src="/appstore.png"
            alt="AppStore link to download the app"
            width={180}
            height={37}
            priority
          />
        </div>
      </div>

      <div className="w-full flex bg-yellow justify-center items-center flex-col p-6" id="features">
        <h1 className="text-center text-4xl font-semibold mt-10 mb-10 text-black">What WalletWise Offers</h1>
        <div className="max-w-7xl grid text-center md:mb-0 md:w-full md:grid-cols-2 text-black">
          <FeatureItem title="Create Custom Plannings" description="Easily create multiple plannings tailored to your needs."/>
          <FeatureItem title="Add Transactions with Ease" description="Quickly log your expenses and incomes in a few taps."/>
          <FeatureItem title="Track Your Transactions" description="View your transactions in a clear, weekly timeline with balance updates."/>
          <FeatureItem title="Planning Dashboard" description="Get an overview of your balance and stay on top of upcoming payments."/>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col p-6">
        <h1 className="text-center text-4xl font-semibold mt-10 mb-10">Why WalletWise?</h1>
        <div className="max-w-7xl grid text-center md:mb-0 md:w-full md:grid-cols-2">
          <FeatureItem title="No Complexity" description="Focus on your finances without being overwhelmed by unnecessary details."/>
          <FeatureItem title="Clear Balance Overview" description="See your current and expected balances at a glance."/>
          <FeatureItem title="Never Miss a Due Date" description="Get alerts for upcoming expenses, so you`re always prepared."/>
          <FeatureItem title="Completely Free" description="All these features without any cost."/>
        </div>
      </div>
     
      <div className="w-full flex bg-blue-400 justify-center items-center flex-col p-6 pt-8 pb-14 gap-10" id="download">
        <h1 className="max-w-7xl text-center text-4xl font-semibold mt-10">Ready to Take Control of Your Finances?</h1>
        <h2 className="max-w-7xl text-center text-xl">Download WalletWise today and start simplifying your financial life.</h2>
        <Image
            className="relative dark:invert cursor-pointer"
            src="/appstore.png"
            alt="AppStore link to download the app"
            width={180}
            height={37}
            priority
          />
      </div>
      <div className="w-full flex bg-blue-500 justify-center items-center flex-col p-6 pt-8 pb-14 gap-10">
        <h1 className="max-w-7xl text-center text-4xl font-semibold mt-10">Contact Us</h1>
        <h2 className="max-w-7xl text-center text-xl">We’re Here to Help</h2>
        <p className="m-0 text-lg font-light text-center">
          If you have any questions, feedback, or need assistance with WalletWise, don’t hesitate to reach out. <br /> 
          Our team is here to ensure you have the best experience possible.
        </p>
        <Link className="text-lg font-bold cursor-pointer text-yellow text-center" href="/contact"> Contact Us {" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </Link>
      </div>

     <Footer/>

    </main>
  );
}
