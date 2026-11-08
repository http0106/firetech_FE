import React from 'react'
import { FaBuilding } from 'react-icons/fa'


// đối tác đã đồng hành cùng chúng tôi

const partners = [
    { name: 'GP Bank' },
    { name: 'Agribank' },
    { name: 'Eurowindow' },
    { name: 'MobiFone' },
    { name: 'BV Da liễu Hà Nội' },
    { name: 'Hanoi Hotel' },
    { name: 'Chung cư cao cấp' },
];


const Partner = () => {
    return (
        <section className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="flex flex-col items-center justify-center space-y-6">

                {/* Tiêu đề phân đoạn */}
                <div className="text-center space-y-1">
                    <h3 className=" sm:text-sm shrink-0 text-[13px] font-bold tracking-[.08em] uppercase text-[var(--muted)]">
                        ĐÃ ĐỒNG HÀNH CÙNG
                    </h3>

                </div>

                {/* Danh sách thẻ đối tác (Pill Badges) */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300 group cursor-pointer transform hover:-translate-y-0.5"
                        >
                            <div className="text-blue-600 group-hover:scale-110 transition-transform">
                                <FaBuilding className="w-4 h-4" />
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-[#0B1E48] tracking-tight">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    )
}

export default Partner