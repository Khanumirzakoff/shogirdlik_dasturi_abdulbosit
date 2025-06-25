import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ProgressChart: React.FC = () => {
  const data = [
    { month: 'Yan', students: 120, completed: 15 },
    { month: 'Fev', students: 135, completed: 18 },
    { month: 'Mar', students: 142, completed: 22 },
    { month: 'Apr', students: 156, completed: 25 },
    { month: 'May', students: 148, completed: 20 },
    { month: 'Iyn', students: 162, completed: 28 }
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="students" 
          stroke="#3b82f6" 
          strokeWidth={3}
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
          name="Shogirdlar"
        />
        <Line 
          type="monotone" 
          dataKey="completed" 
          stroke="#10b981" 
          strokeWidth={3}
          dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
          name="Tugatganlar"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ProgressChart