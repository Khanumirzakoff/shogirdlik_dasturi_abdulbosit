import React, { useState } from 'react'
import { Save, Bell, Shield, User, Globe, Database } from 'lucide-react'

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', name: 'Umumiy', icon: User },
    { id: 'notifications', name: 'Bildirishnomalar', icon: Bell },
    { id: 'security', name: 'Xavfsizlik', icon: Shield },
    { id: 'system', name: 'Tizim', icon: Database },
    { id: 'localization', name: 'Lokalizatsiya', icon: Globe }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Sozlamalar
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Tizim sozlamalarini boshqaring
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-100 text-primary-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <tab.icon
                  className={`mr-3 h-5 w-5 ${
                    activeTab === tab.id ? 'text-primary-500' : 'text-gray-400'
                  }`}
                />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="card">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Umumiy sozlamalar</h3>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="label">Tashkilot nomi</label>
                    <input
                      type="text"
                      className="input"
                      defaultValue="Shogirdlik Dasturi"
                    />
                  </div>
                  
                  <div>
                    <label className="label">Administrator email</label>
                    <input
                      type="email"
                      className="input"
                      defaultValue="admin@shogirdlik.uz"
                    />
                  </div>
                  
                  <div>
                    <label className="label">Telefon raqami</label>
                    <input
                      type="tel"
                      className="input"
                      defaultValue="+998 90 123 45 67"
                    />
                  </div>
                  
                  <div>
                    <label className="label">Vaqt zonasi</label>
                    <select className="input">
                      <option>Asia/Tashkent</option>
                      <option>Asia/Samarkand</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="label">Manzil</label>
                  <textarea
                    className="input"
                    rows={3}
                    defaultValue="Toshkent shahar, Chilonzor tumani"
                  />
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Bildirishnoma sozlamalari</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Email bildirishnomalar</h4>
                      <p className="text-sm text-gray-500">Muhim hodisalar haqida email orqali xabar olish</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">SMS bildirishnomalar</h4>
                      <p className="text-sm text-gray-500">Shoshilinch xabarlar uchun SMS yuborish</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Haftalik hisobotlar</h4>
                      <p className="text-sm text-gray-500">Har hafta taraqqiyot hisobotini yuborish</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Xavfsizlik sozlamalari</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="label">Parol murakkabligi</label>
                    <select className="input">
                      <option>Oddiy (6+ belgi)</option>
                      <option>O'rta (8+ belgi, raqam)</option>
                      <option>Yuqori (12+ belgi, raqam, maxsus belgilar)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="label">Sessiya muddati (daqiqa)</label>
                    <input
                      type="number"
                      className="input"
                      defaultValue="60"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Ikki faktorli autentifikatsiya</h4>
                      <p className="text-sm text-gray-500">Qo'shimcha xavfsizlik uchun SMS kod talab qilish</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Tizim sozlamalari</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="label">Ma'lumotlar bazasi zaxirasi</label>
                    <div className="flex space-x-2">
                      <select className="input flex-1">
                        <option>Har kuni</option>
                        <option>Haftada bir marta</option>
                        <option>Oyda bir marta</option>
                      </select>
                      <button className="btn-secondary">Hozir zaxiralash</button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="label">Log fayllari saqlash muddati (kun)</label>
                    <input
                      type="number"
                      className="input"
                      defaultValue="30"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Avtomatik yangilanishlar</h4>
                      <p className="text-sm text-gray-500">Tizim yangilanishlarini avtomatik o'rnatish</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'localization' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Lokalizatsiya sozlamalari</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="label">Til</label>
                    <select className="input">
                      <option>O'zbek tili</option>
                      <option>Русский язык</option>
                      <option>English</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="label">Sana formati</label>
                    <select className="input">
                      <option>DD.MM.YYYY</option>
                      <option>MM/DD/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="label">Vaqt formati</label>
                    <select className="input">
                      <option>24 soatlik</option>
                      <option>12 soatlik (AM/PM)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="label">Valyuta</label>
                    <select className="input">
                      <option>UZS (So'm)</option>
                      <option>USD (Dollar)</option>
                      <option>EUR (Evro)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-6 border-t border-gray-200">
              <button className="btn-primary">
                <Save className="h-4 w-4 mr-2" />
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings