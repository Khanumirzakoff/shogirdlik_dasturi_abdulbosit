import React from 'react'
import { Users, UserCheck, BookOpen, TrendingUp, Calendar, Award, Clock, AlertCircle } from 'lucide-react'
import StatsCard from '../components/StatsCard'
import RecentActivity from '../components/RecentActivity'
import ProgressChart from '../components/ProgressChart'

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Jami Shogirdlar',
      value: '156',
      change: '+12%',
      changeType: 'increase' as const,
      icon: Users,
      color: 'primary'
    },
    {
      title: 'Faol Ustalar',
      value: '24',
      change: '+3%',
      changeType: 'increase' as const,
      icon: UserCheck,
      color: 'success'
    },
    {
      title: 'Dasturlar',
      value: '8',
      change: '+1',
      changeType: 'increase' as const,
      icon: BookOpen,
      color: 'warning'
    },
    {
      title: 'Tugatish foizi',
      value: '87%',
      change: '+5%',
      changeType: 'increase' as const,
      icon: TrendingUp,
      color: 'error'
    }
  ]

  const upcomingEvents = [
    {
      title: 'Web Development kursi boshlanishi',
      date: '2025-01-15',
      type: 'course',
      participants: 15
    },
    {
      title: 'Oylik baholash',
      date: '2025-01-20',
      type: 'assessment',
      participants: 156
    },
    {
      title: 'Ustalar yig\'ilishi',
      date: '2025-01-25',
      type: 'meeting',
      participants: 24
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Bosh sahifa
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Shogirdlik dasturi nazorat paneli
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button className="btn-primary">
            <Calendar className="h-4 w-4 mr-2" />
            Yangi tadbirlar
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Progress Chart */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Oylik taraqqiyot</h3>
              <select className="input w-auto">
                <option>So'nggi 6 oy</option>
                <option>So'nggi yil</option>
              </select>
            </div>
            <ProgressChart />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <RecentActivity />
          
          {/* Upcoming Events */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Yaqinlashayotgan tadbirlar</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex-shrink-0">
                    {event.type === 'course' && <BookOpen className="h-5 w-5 text-primary-500" />}
                    {event.type === 'assessment' && <Award className="h-5 w-5 text-warning-500" />}
                    {event.type === 'meeting' && <Users className="h-5 w-5 text-success-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <p className="text-xs text-gray-500">{event.date}</p>
                      <span className="text-xs text-gray-400">•</span>
                      <p className="text-xs text-gray-500">{event.participants} ishtirokchi</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="card bg-warning-50 border-warning-200">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-warning-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-warning-800">Diqqat talab qiladi</h4>
            <p className="text-sm text-warning-700 mt-1">
              3 ta shogird so'nggi 2 haftada darsga kelmagan. Ularning holati tekshirilishi kerak.
            </p>
            <button className="btn-warning mt-3 text-xs">
              Batafsil ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard