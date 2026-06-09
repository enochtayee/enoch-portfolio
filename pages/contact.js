import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Head>
        <title>Contact - Enoch Tayee</title>
      </Head>

      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary">Enoch Tayee</h1>
          <div className="space-x-6">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <Link href="/about" className="hover:text-secondary">About</Link>
            <Link href="/projects" className="hover:text-secondary">Projects</Link>
            <Link href="/blog" className="hover:text-secondary">Blog</Link>
            <Link href="/contact" className="hover:text-secondary">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
        
        <div className="max-w-2xl">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
              />
            </div>
            
            <div>
              <label className="block font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
              />
            </div>
            
            <div>
              <label className="block font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
              />
            </div>
            
            <button
              type="submit"
              className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Enoch Tayee. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
