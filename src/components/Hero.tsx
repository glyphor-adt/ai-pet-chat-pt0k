import React from 'react'

function Hero() {
  return (
    <section className="relative py-24 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">Unleash the Chatter: AI for Cats & Dogs</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200ms">
            Finally, an AI that understands what your furry friends are trying to say. Decode barks, meows, and purrs into human-readable conversations.
          </p>
          <div className="mt-12 flex justify-center animate-fade-in delay-400ms">
            <a href="#" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg text-primary-foreground shadow-xl transition-all duration-300 aria-label="Start Decoding Now">Start Decoding Now</a>
            <a href="#" className="ml-4 border-2 border-gray-500 hover:border-blue-500 text-gray-300 px-8 py-4 rounded-xl transition-all duration-300 aria-label="Learn More">Learn More</a>
          </div>
        </div>
        <div className="mt-16 animate-slide-up">
          <img
            src="https://images.unsplash.com/photo-1561948955-570b270e7c36?w=800&h=600"
            alt="Two cute pets"
            className="rounded-2xl shadow-2xl mx-auto"
            aria-label="A happy cat and dog using the AI chat app"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
