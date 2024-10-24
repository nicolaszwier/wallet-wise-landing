import Link from "next/link";

export default function MenuLinks() {

  return (
    <ul className="md:flex hidden items-center gap-6">
        <li className="cursor-pointer hover:text-green">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-green">
          <Link href="/#features">Features</Link>
        </li>
        <li className="cursor-pointer hover:text-green">
          <Link href="/#download">Download</Link>
        </li>
        <li className="cursor-pointer hover:text-green">
          <Link href="/frequently-asked-questions">FAQs</Link>
        </li>
        <li className="cursor-pointer hover:text-green">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
  )
}