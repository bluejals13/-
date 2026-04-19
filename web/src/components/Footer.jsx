export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>&copy; 2026 MyCompany</div>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
}