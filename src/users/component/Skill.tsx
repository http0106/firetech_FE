import React from 'react'
import { FaAward, FaHandshake, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const stats = [
    { icon: <FaShieldAlt className="w-5 h-5 text-red-600" />, value: '10+ Năm', label: 'Kinh nghiệm PCCC' },
    { icon: <FaHandshake className="w-5 h-5 text-blue-600" />, value: '500+', label: 'Công trình hoàn thành' },
    { icon: <FaAward className="w-5 h-5 text-orange-500" />, value: '100%', label: 'Đạt chuẩn CO/CQ & Kiểm định' },
    { icon: <FaHeadset className="w-5 h-5 text-emerald-600" />, value: '24/7', label: 'Hỗ trợ kỹ thuật & Tư vấn' },
];


const Skill = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            {stat.icon}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg sm:text-xl font-extrabold text-[#0B1E48]">{stat.value}</span>
                            <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skill