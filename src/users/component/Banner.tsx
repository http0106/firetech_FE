import React, { useState, useEffect } from 'react';
import {
    FaCheckCircle,
    FaShieldAlt
} from 'react-icons/fa';

const images = [
    "https://images.unsplash.com/photo-1576707995936-a6cffe26ef7b?auto=format&fit=crop&q=80&w=800&h=1000",
    "https://images.unsplash.com/photo-1563062067-723c14a7c7ba?auto=format&fit=crop&q=70&w=800&h=575"
];

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Logic tự động thay đổi ảnh sau 4 giây (4000ms)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <section className="w-full  mx-auto p-3 sm:p-6 lg:p-8">
                <div
                    className="relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-white/80 transition-all duration-500"
                    style={{
                        background: 'linear-gradient(135deg, #eef3fb 0%, #f8fafe 55%, #fff3ec 100%)'
                    }}
                >
                    {/* Hiệu ứng ánh sáng nền trừu tượng (Glow Effects) */}
                    <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                        {/* CỘT TRÁI: NỘI DUNG CHÍNH */}
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">

                            {/* Badge thương hiệu */}
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm w-fit">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                                </span>
                                <div className="text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center gap-1.5 text-slate-800">
                                    <span className="bg-gradient-to-r from-[#D32F2F] to-[#EF5350] text-white px-2 py-0.5 rounded text-[11px] font-extrabold tracking-wider shadow-sm">
                                        PCCC
                                    </span>
                                    <div className="tracking-widest font-extrabold flex items-center">
                                        <span className="text-[#FF3333] mr-0.5">FIRE</span>
                                        <span className="text-[#3399FF]">TECH</span>
                                    </div>
                                    <span className="text-slate-300">•</span>
                                    <span className="text-slate-600 font-semibold text-xs hidden sm:inline">HÀ NỘI</span>
                                </div>
                            </div>

                            {/* Tiêu đề chính */}
                            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0B1E48] leading-[1.3] sm:leading-[1.22] tracking-tight">
                                CHUYÊN CUNG CẤP <br />
                                <span className="bg-gradient-to-r from-[#D32F2F] via-red-600 to-orange-600 bg-clip-text text-transparent inline-block py-0.5">
                                    THIẾT BỊ PCCC
                                </span> <br />
                                CHÍNH HÃNG
                            </h1>

                            {/* Đoạn mô tả chuyên nghiệp */}
                            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
                                Giải pháp toàn diện: Báo cháy – Chữa cháy – Bảo hộ lao động. Đầy đủ chứng chỉ CO/CQ, tem kiểm định Bộ Công An.
                                <span className="block mt-1 font-semibold text-slate-800">
                                    Chiết khấu trực tiếp <span className="text-orange-600 font-bold bg-orange-100/80 px-2 py-0.5 rounded border border-orange-200">Giá tốt nhất cho nhà thầu & dự án</span>
                                </span>
                            </p>
                            <p>Có bán lẻ sản PCCC</p>

                            {/* Danh sách cam kết */}
                            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                        <FaCheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                    </div>
                                    <span>Hàng chính hãng CO/CQ đầy đủ</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                        <FaCheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                    </div>
                                    <span>Tem kiểm định Bộ Công An</span>
                                </div>
                            </div>

                        </div>

                        {/* CỘT PHẢI: HÌNH ẢNH NỔI BẬT CHUYỂN ĐỔI 4S & BADGE */}
                        <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center items-center">

                            {/* Khung trang trí */}
                            <div className="absolute -left-3 top-6 w-28 h-36 border-l-2 border-t-2 border-dashed border-red-400/40 rounded-tl-[40px] pointer-events-none hidden sm:block" />

                            {/* Khung ảnh chính với hiệu ứng mờ nhòe (Cross-fade) */}
                            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.01]">
                                {images.map((imgUrl, index) => (
                                    <img
                                        key={index}
                                        src={imgUrl}
                                        alt={`Lính chữa cháy ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
                            </div>

                            {/* Badge Kính nghiệm góc dưới bên phải */}
                            <div className="animate-bounce absolute bottom-4 right-0 sm:-right-2 bg-white/95 backdrop-blur-md px-4 py-3.5 rounded-2xl shadow-xl border border-white flex items-center gap-3.5 z-20 transition-all duration-300 hover:scale-105">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-red-500/30 shrink-0">
                                    <FaShieldAlt className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-[#0B1E48] leading-none">10+ Năm</span>
                                    <span className="text-[11px] font-bold text-slate-500 mt-1">Kinh nghiệm thực chiến</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;