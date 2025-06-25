import React from 'react'
import { Download, TrendingUp, Users, Award, Calendar } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'

const Reports: React.FC = () => {
  const monthlyData = [
    { month: 'Yan', students: 120, completed: 15, dropped: 5 },
    { month: 'Fev', students: 135, completed: 18, dropped: 3 },
    { month: 'Mar', students: 142, completed: 22, dropped: 4 },
    { month: 'Apr', students: 156, completed: 25, dropped: 2 },
    { month: 'May', students: 148, completed: 20, dropped: 8 },
    { month: 'Iyn', students: 162, completed: 28, dropped: 3 }
  ]

  const programData = [
    { name: 'Web Development', value: 45, color: '#3b82f6' },
    { name: 'Mobile Development', value: 32, color: '#10b981' },
    { name: 'Data Science', value: 28, color: '#f59e0b' },
    { name: 'UI/UX Design', value: 38, color: '#ef4444' },
    { name: 'DevOps', value: 15, color: '#8b5cf6' }
  ]

  const performanceData = [
    { month: 'Yan', performance: 78 },
    { month: 'Fev', performance: 82 },
    { month: 'Mar', performance: 85 },
    { month: 'Apr', performance: 87 },
    { month: 'May', performance: 84 },
    { month: 'Iyn', performance: 89 }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Hisobotlar
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Shogirdlik dasturi statistikalari va tahlillari
          </p>
        </div>
        <div className="mt-4 flex space-x-3 md:ml-4 md:mt-0">
          <button className="btn-secondary">
            <Calendar className="h-4 w-4 mr-2" />
            Vaqt oralig'i
          </button>
          <button className="btn-primary">
            <Download className="h-4 w-4 mr-2" />
            Eksport
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Jami shogirdlar</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">162</div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-success-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    12%
                  </div>
                </dd>
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
                <dt className="text-sm font-medium text-gray-500 truncate">Tugatish foizi</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">87%</div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-success-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    5%
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrendingUp className="h-8 w-8 text-warning-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">O'rtacha ball</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">4.2</div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-success-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    0.3
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-error-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Tashlab ketish foizi</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">13%</div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-error-600">
                    <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
                    2%
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Monthly Progress */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Oylik taraqqiyot</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#3b82f6" name="Shogirdlar" />
              <Bar dataKey="completed" fill="#10b981" name="Tugatganlar" />
              <Bar dataKey="dropped" fill="#ef4444" name="Tashlab ketganlar" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Program Distribution */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dasturlar bo'yicha taqsimot</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={programData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {programData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Trend */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Umumiy samaradorlik tendensiyasi</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="performance" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
              name="Samaradorlik (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Reports Table */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Batafsil hisobotlar</h3>
          <button className="btn-secondary text-sm">
            Barchasini ko'rish
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dastur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shogirdlar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tugatganlar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tugatish foizi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  O'rtacha ball
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {programData.map((program, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {program.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {program.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {Math.floor(program.value * 0.8)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {Math.floor(program.value * 0.8 / program.value * 100)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {(4.0 + Math.random() * 0.5).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Reports