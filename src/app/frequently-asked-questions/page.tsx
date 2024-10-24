
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Faq } from "@/model/Faq";

export default function Faqs() {
  
  const faqsData: Faq[] = [
    {
      question: 'How do I create a new planning in WalletWise?',
      answer: 'To create a new planning, simply navigate to the main dashboard and click on the selected planning, then click on the + icon.'
    },
    {
      question: 'How does WalletWise calculate the expected balance?',
      answer: 'The expected balance is calculated based on the total income and expenses entered for each planning. WalletWise automatically updates this balance as you log new transactions.'
    },
    {
      question: 'What’s the difference between the current balance and the expected balance?',
      answer: 'The current balance reflects the actual balance based on transactions that have been completed. The expected balance includes both completed and pending transactions, giving you a forecast of your future financial position.'
    },
    {
      question: 'How do I check my pending transactions?',
      answer: 'Pending transactions are highlighet on the dashboard and in the timeline with a red calendar icon if the transaction is expired, and a grey exclamation mark if it is pending.'
    },
    {
      question: 'How do I add a new transaction?',
      answer: 'To add a new transaction, go to the timeline and click on the + icon on the top right. Choose if it is an expense or an income, and enter the details such as amount, date, and category, and save the transaction to your planning.'
    },
    {
      question: 'How can I duplicate a transaction in WalletWise?',
      answer: 'To duplicate a transaction, go to the timeline, select the transactions you want to duplicate, and tap the “Duplicate” option. This will open a new screen with the selected transactions to duplicate where you can change the amount and date before duplicating.'
    },
    {
      question: 'How can I filter transactions by a specific period?',
      answer: 'To filter transactions by period, go to the timeline, and use the filter option to select the desired date range. WalletWise will display only the transactions that fall within the selected period.'
    },
    {
      question: 'Can I edit a transaction after it’s been added?',
      answer: 'Yes, you can edit any transaction by swiping the transaction to the left on the timeline and tapping the “Edit” button. Make the necessary changes and save the updated transaction.'
    },
    {
      question: 'Can I delete a transaction?',
      answer: 'Yes, you can delete any transaction by swiping the transaction to the left on the timeline and tapping the "Delete" button.'
    },
    {
      question: 'How can I pay a pending transaction?',
      answer: 'You can pay the pending transaction by swiping the transaction to the right on the timeline and tapping the "Pay" button.'
    },
  ]
  
  return (
    <main className="flex md:min-h-screen flex-col items-center m-auto justify-between">
      <Header />
      <div className="max-w-7xl flex w-full p-3 lg:p-6 pt-8 gap-8">
        <div className="w-full flex bg-blue-500 justify-center items-center flex-col p-6 pt-8 pb-14 gap-10">
          <h1 className="max-w-7xl font-extrabold text-center text-4xl md:mt-10">Frequently Asked Questions</h1>
          <h2 className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Find answers to common questions about WalletWise and get the most out of your personal finance tracker.
          </h2>
          <section className="max-w-7xl grid text-center md:mb-0 md:w-full lg:grid-cols-2 gap-8">
            {faqsData.map((faq, index) => (
              <div key={index} className="border-b border-blue-400">
                <h3 className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-green text-lg font-bold py-3" data-toggle="answer-1">
                    <span>{faq.question}</span>
                    {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className=" mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg> */}
                </h3>
                <p className="answer pt-2 pb-5 text-sm lg:text-base text-blue-100 text-left" id="answer-1">
                  {faq.answer}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}