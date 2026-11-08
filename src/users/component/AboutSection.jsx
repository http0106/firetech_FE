import React from 'react';
import { Button } from 'antd';
import { CheckCircleFilled, ArrowRightOutlined } from '@ant-design/icons';

export default function AboutSection() {
    const features = [
        "Đủ điều kiện kinh doanh dịch vụ PCCC theo quy định",
        "Đội ngũ kỹ sư PCCC giàu kinh nghiệm thực chiến",
        "Thiết bị chính hãng, giá cạnh tranh cho nhà thầu",
        "Bảo hành – bảo trì dài hạn, phản hồi nhanh"
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ================= CỘT TRÁI: HÌNH ẢNH & BADGE THỐNG KÊ ================= */}
                    <div className="relative select-none">
                        {/* Khung ảnh chính */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=1000&q=80"
                                alt="PCCC Trúc Bình - Thi công phòng cháy chữa cháy"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                                className="w-full h-full object-cover pointer-events-none hover:scale-105 transition-transform duration-700"
                            />
                            {/* Lớp phủ bảo vệ chống kéo thả/lưu ảnh */}
                            <div
                                className="absolute inset-0 z-10"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>

                        {/* Badge nổi: 500+ Công trình bàn giao */}
                        <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:-right-6 bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-2xl z-20 flex flex-col items-center justify-center border-4 border-white">
                            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">500+</span>
                            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-100 mt-0.5">
                                Công trình bàn giao
                            </span>
                        </div>
                    </div>

                    {/* ================= CỘT PHẢI: NỘI DUNG GIỚI THIỆU ================= */}
                    <div className="flex flex-col space-y-6">

                        {/* Tiêu đề nhỏ */}
                        <div>
                            <span className="text-xs sm:text-sm font-extrabold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded-lg inline-block">
                                CHÀO MỪNG ĐẾN VỚI
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] mt-3 tracking-tight">
                                PCCC <span className="text-red-600">Fire Tech</span>
                            </h2>
                        </div>

                        {/* Đoạn mô tả */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Fire Tech là <strong className="text-slate-800">company PCCC</strong> chuyên cung cấp <strong className="text-slate-800">thiết bị phòng cháy chữa cháy Hà Nội</strong> và giải pháp PCCC trọn gói cho nhà xưởng, tòa nhà văn phòng, chung cư và cơ sở kinh doanh. Chúng tôi đồng hành cùng chủ đầu tư từ khâu tư vấn thiết kế, xin thẩm duyệt, thi công lắp đặt đến nghiệm thu và bảo trì.
                        </p>

                        {/* Danh sách các điểm nổi bật */}
                        <div className="space-y-3 pt-2">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircleFilled className="text-red-600 text-lg mt-0.5 shrink-0" />
                                    <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Nút hành động (CTA) */}
                        <div className="pt-4">
                            <Button icon={<ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1.5" />}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base px-8 py-5 rounded-xl shadow-lg shadow-red-600/30 transition-all duration-300 flex items-center gap-2 group w-fit cursor-pointer" >
                                Về với đội ngũ của chúng tôi
                            </Button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}