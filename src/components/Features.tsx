import React from 'react'
import { Zap, Shield, TrendingUp, MessageCircle, PawPrint, Heart } from 'lucide-react'

function Features() {
  const featuresData = [
    {
      icon: Zap,
      title: 'Instant Translation: Understand Every Woof and Meow',
      description: 'No more guessing games! Our AI accurately translates your pet’s vocalizations and body language in real-time.',
    },
    {
      icon: Shield,
      title: 'Secure & Private: Your Pet’s Data is Always Protected',
      description: 'We use state-of-the-art encryption to ensure that your pet’s conversations and personal information remain completely private.',
    },
    {
      icon: TrendingUp,
      title: 'Behavior Insights: Unlock the Secrets of Your Pet’s Mind',
      description: 'Gain a deeper understanding of your pet’s needs and motivations with our AI-powered behavioral analysis. Identify patterns and potential issues early on.',
    },
    {
      icon: MessageCircle,
      title: 'Interactive Chat: Engage in Meaningful Conversations',
      description: 'Our app allows you to respond to your pet in their own language, fostering a stronger bond and a more enriching relationship.',
    },
    {
      icon: PawPrint,
      title: 'Multi-Pet Support: Connect with All Your Furry Friends',
      description: 'Whether you have cats, dogs, or both, our AI supports multiple pets, allowing you to understand and interact with your entire animal family.',
    },
    {
      icon: Heart,
      title: 'Enhanced Bonding: Strengthen Your Connection with Your Pets',
      description: 'By bridging the communication gap, our AI helps you build a deeper and more meaningful connection with your beloved companions.',
    },
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12 animate-fade-in">Key Features to Unleash the Conversation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-gray-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slide-up delay-200ms">
              <feature.icon className="text-primary w-8 h-8 mb-4" aria-hidden="true"/>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
