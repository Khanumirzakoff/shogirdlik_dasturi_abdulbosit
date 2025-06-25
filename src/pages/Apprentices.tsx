import React, { useState } from 'react'
import { Plus, Search, Filter, MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react'

interface Apprentice {
  id: number
  name: string
  email: string
  program: string
  mentor: string
  status: 'active' | 'completed' | 'paused' | 'dropped'
  progress: number
  startDate: string
  avatar?: string
}

const Apprentices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const apprentices: Apprentice[] = [
    {
      id: 1,
      name: 'Alisher Karimov',
      email: 'alisher@example.com',
      program: 'Web Development',
      mentor: 'Sardor Umarov',
      status: 'active',
      progress: 75,
      startDate: '2024-09-15'
    },
    {
      id: 2,
      name: 'Malika Tosheva',
      email: 'malika@example.com',
      program: 'Mobile Development',
      mentor: 'Dilshod Rahimov',
      status: 'active',
      progress: 60,
      startDate: '2024-10-01'
    },
    {
      id: 3,
      name: 'Bobur Nazarov',
      email: 'bobur@example.com',
      program: 'Data Science',
      mentor: 'Aziza Saidova',
      status: 'completed',
      progress: 100,
      startDate: '2024-06-01'
    },
    {
      id: 4,
      name: 'Nigora Abdullayeva',
      email: 'nigora@example.com',
      program: 'UI/UX Design',
      mentor: 'Jasur Mirzayev',
      status: 'paused',
      progress: 45,
      startDate: '2024-11-01'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success-100 text-success-800'
      case 'completed':
        return 'bg-primary-100 text-primary-800'
      case 'paused':
        return 'bg-warning-100 text-warning-800'
      case 'dropped':
        return 'bg-error-100 text-error-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Faol'
      case 'completed':
        return 'Tugatgan'
      case 'paused':
        return 'To\'xtatilgan'
      case 'dropped':
        return 'Tashlab ketgan'
      default:
        return status
    }
  }

  const filteredApprentices = apprentices.filter(apprentice => {
    const matchesSearch = apprentice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apprentice.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apprentice.program.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || apprentice.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Shogirdlar
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Barcha shogirdlarni boshqaring va ularning taraqqiyotini kuzating
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Yangi shogird
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Shogirdlarni qidirish..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              className="input w-auto"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Barcha holatlar</option>
              <option value="active">Faol</option>
              <option value="completed">Tugatgan</option>
              <option value="paused">To'xtatilgan</option>
              <option value="dropped">Tashlab ketgan</option>
            </select>
            <button className="btn-secondary">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Apprentices Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shogird
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dastur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ustad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Holat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Taraqqiyot
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Boshlanish sanasi
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Amallar</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApprentices.map((apprentice) => (
                <tr key={apprentice.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center">
                          <span className="text-sm font-medium text-white">
                            {apprentice.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{apprentice.name}</div>
                        <div className="text-sm text-gray-500">{apprentice.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {apprentice.program}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {apprentice.mentor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(apprentice.status)}`}>
                      {getStatusText(apprentice.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${apprentice.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900 min-w-0">{apprentice.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(apprentice.startDate).toLocaleDateString('uz-UZ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-900 p-1 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-error-600 hover:text-error-900 p-1 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          <span className="font-medium">{filteredApprentices.length}</span> ta shogird ko'rsatilmoqda
        </div>
        <div className="flex space-x-2">
          <button className="btn-secondary">Oldingi</button>
          <button className="btn-primary">1</button>
          <button className="btn-secondary">2</button>
          <button className="btn-secondary">Keyingi</button>
        </div>
      </div>
    </div>
  )
}

export default Apprentices