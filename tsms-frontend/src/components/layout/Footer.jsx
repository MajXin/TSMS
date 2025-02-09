const Footer = () => {
  return (
    <footer className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TSMS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 