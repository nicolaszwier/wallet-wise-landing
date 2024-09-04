export default function Footer() {
  return (
    <footer className="w-full flex bg-blue-400 p-4 gap-4 items-center">
      <p className="m-0 text-sm font-light text-center">
        Developed by Nicolas Zwierzykowski
      </p>
      <a href="http://nicolasz.dev/en" 
        className="text-sm font-bold cursor-pointer text-yellow text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        nicolasz.dev 
      </a>
  </footer>
  )
}