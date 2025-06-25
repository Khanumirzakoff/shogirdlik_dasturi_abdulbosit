import React from 'react'
import { UserPlus, Award, BookOpen, AlertCircle } from 'lucide-react'

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'user_joined',
      message: 'Alisher Karimov Web Development dasturiga qo\'shildi',
      time: '2 soat oldin',
      icon: UserPlus,
      color: 'text-success-600'
    },
    {
      id: 2,
      type: 'achievement',
      message: 'Malika Tosheva Mobile Development kursini tugatdi',
      time: '4 soat oldin',
      icon: Award,
      color: 'text-warning-600'
    },
    {
      id: 3,
      type: 'course_started',
      message: 'Data Science kursi boshlandi',
      time: '1 kun oldin',
      icon: BookOpen,
      color: 'text-primary-600'
    },
    {
      id: 4,
      type: 'alert',
      message: 'Bobur Nazarov 3 kun davomida darsga kelmadi',
      time: '2 kun oldin',
      icon: AlertCircle,
      color: 'text-error-600'
    }
  ]

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">So'nggi faoliyat</h3>
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, index) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {index !== activities.length - 1 && (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex space-x-3">
                  <div>
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-100`}>
                      <activity.icon className={`h-4 w-4 ${activity.color}`} />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-900">{activity.message}</p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      {activity.time}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecentActivity