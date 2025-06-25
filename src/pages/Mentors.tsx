import React from 'react'
import { Plus, Users, Award, Star } from 'lucide-react'

const Mentors: React.FC = () => {
  const mentors = [
    {
      id: 1,
      name: 'Sardor Umarov',
      email: 'sardor@example.com',
      specialization: 'Web Development',
      apprentices: 8,
      rating: 4.9,
      experience: '5 yil',
      status: 'active'
    },
    {
      id: 2,
      name: 'Aziza Saidova',
      email: 'aziza@example.com',
      specialization: 'Data Science',
      apprentices: 6,
      rating: 4.8,
      experience: '7 yil',
      status: 'active'
    },
    {
      id: 3,
      name: 'Dilshod Rahimov',
      email: 'dilshod@example.com',
      specialization: 'Mobile Development',
      apprentices: 5,
      rating: 4.7,
      experience: '4 yil',
      status: 'active'
    },
    {
      id: 4,
      name: 'Jasur Mirzayev',
      email: 'jasur@example.com',
      specialization: 'UI/UX Design',
      apprentices: 7,
      rating: 4.9,
      experience: '6 yil',
      status: 'active'
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Ustalar
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Shogirdlik dasturidagi barcha ustalarni boshqaring
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Yangi ustad
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Jami ustalar</dt>
                <dd className="text-lg font-medium text-gray-900">{mentors.length}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Award className="h-8 w-8 text-success-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">O'rtacha reyting</dt>
                <dd className="text-lg font-medium text-gray-900">4.8</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-warning-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Jami shogirdlar</dt>
                <dd className="text-lg font-medium text-gray-900">
                  {mentors.reduce((sum, mentor) => sum + mentor.apprentices, 0)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="card hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-lg font-medium text-white">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                <p className="text-sm text-gray-500">{mentor.email}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Mutaxassislik:</span>
                <span className="text-sm font-medium text-gray-900">{mentor.specialization}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Shogirdlar:</span>
                <span className="text-sm font-medium text-gray-900">{mentor.apprentices} ta</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Tajriba:</span>
                <span className="text-sm font-medium text-gray-900">{mentor.experience}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Reyting:</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{mentor.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <button className="btn-primary flex-1">
                Batafsil
              </button>
              <button className="btn-secondary">
                Tahrirlash
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mentors