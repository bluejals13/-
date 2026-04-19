export default function SectionHero({ title, subtitle, buttonText }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-gray-100">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
          {buttonText}
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="/hero-image.png" alt="Hero" className="w-full" />
      </div>
    </section>
  );
}