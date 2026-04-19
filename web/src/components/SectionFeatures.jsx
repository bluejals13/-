export default function SectionFeatures({ features }) {
  return (
    <section className="px-6 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}