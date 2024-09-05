export default function FeatureItem({ title, description }: { title: string, description: string }) {
  return (
      <a
        className="flex flex-col items-center group rounded-lg border border-transparent px-5 py-4 transition-colorsmb-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          {title}
        </h2>
        <p className="m-0 mb-6 max-w-[30ch] text-lg font-light">
          {description}
        </p>
      </a>
  )
}