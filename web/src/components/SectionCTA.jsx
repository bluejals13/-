export default function SectionCTA({ text, buttonText }) {
  return (
    <section className="px-6 py-20 bg-blue-500 text-white text-center rounded-lg mx-6 md:mx-20">
      <h2 className="text-3xl font-bold mb-4">{text}</h2>
      <button className="px-8 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100">
        {buttonText}
      </button>
    </section>
  );
}