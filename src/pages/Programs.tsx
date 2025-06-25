import React from 'react'
import { Plus, BookOpen, Users, Clock, Calendar } from 'lucide-react'

const Programs: React.FC = () => {
  const programs = [
    {
      id: 1,
      title: 'Web Development',
      description: 'HTML, CSS, JavaScript, React va Node.js texnologiyalarini o\'rganish',
      duration: '6 oy',
      students: 45,
      mentors: 3,
      status: 'active',
      startDate: '2024-09-01',
      level: 'Boshlang\'ich'
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'React Native va Flutter yordamida mobil ilovalar yaratish',
      duration: '8 oy',
      students: 32,
      mentors: 2,
      status: 'active',
      startDate: '2024-10-01',
      level: 'O\'rta'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Python, Machine Learning va Data Analysis',
      duration: '10 oy',
      students: 28,
      mentors: 2,
      status: 'active',
      startDate: '2024-08-15',
      level: 'Yuqori'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD va dizayn tamoyillari',
      duration: '4 oy',
      students: 38,
      mentors: 2,
      status: 'active',
      startDate: '2024-11-01',
      level: 'Boshlang\'ich'
    },
    {
      id: 5,
      title: 'DevOps Engineering',
      description: 'Docker, Kubernetes, CI/CD va cloud texnologiyalar',
      duration: '12 oy',
      students: 15,
      mentors: 1,
      status: 'planning',
      startDate: '2025-02-01',
      level: 'Yuqori'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success-100 text-success-800'
      case 'planning':
        return 'bg-warning-100 text-warning-800'
      case 'completed':
        return 'bg-primary-100 text-primary-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Faol'
      case 'planning':
        return 'Rejalashtirilmoqda'
      case 'completed':
        return 'Tugallangan'
      default:
        return status
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Boshlang\'ich':
        return 'bg-green-100 text-green-800'
      case 'O\'rta':
        return 'bg-yellow-100 text-yellow-800'
      case 'Yuqori':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dasturlar
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Shogirdlik dasturlarini boshqaring va yangilarini yarating
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Yangi dastur
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BookOpen className="h-8 w-8 text-primary-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Jami dasturlar</dt>
                <dd className="text-lg font-medium text-gray-900">{programs.length}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-success-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Faol talabalar</dt>
                <dd className="text-lg font-medium text-gray-900">
                  {programs.filter(p => p.status === 'active').reduce((sum, p) => sum + p.students, 0)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Calendar className="h-8 w-8 text-warning-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Rejalashtirilgan</dt>
                <dd className="text-lg font-medium text-gray-900">
                  {programs.filter(p => p.status === 'planning').length}
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Clock className="h-8 w-8 text-error-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">O'rtacha davomiyligi</dt>
                <dd className="text-lg font-medium text-gray-900">7 oy</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {programs.map((program) => (
          <div key={program.id} className="card hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{program.description}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(program.status)}`}>
                  {getStatusText(program.status)}
                </span>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(program.level)}`}>
                  {program.level}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{program.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {new Date(program.startDate).toLocaleDateString('uz-UZ')}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{program.students} talaba</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{program.mentors} ustad</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
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

export default Programs