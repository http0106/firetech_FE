import React from 'react';
import { Tag } from 'antd';
import { SafetyCertificateOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function ProductCard({ item }) {
    return (
        <div className="w-full max-w-[260px] bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">

            {/* ẢNH & BADGE (Bảo vệ chống sao chép) */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50 mb-2 select-none">
                <img
                    src={item.image}
                    alt={item.name}
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                />
                <div className="absolute top-2 left-2">
                    <Tag color="error" icon={<SafetyCertificateOutlined />} className="m-0 font-bold text-[10px] border-0 shadow-sm">
                        BCA Kiểm Định
                    </Tag>
                </div>
            </div>

            {/* THÔNG TIN SẢN PHẨM */}
            <div className="flex flex-col flex-grow justify-between space-y-1.5">
                <div>
                    <div className="flex justify-between items-center text-[11px] font-semibold text-slate-400">
                        <span>Mã: {item.code}</span>
                        <span className="text-emerald-600 flex items-center gap-1 font-bold">
                            <CheckCircleOutlined className="text-[10px]" /> {item.inStock}
                        </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2 mt-0.5 leading-snug">
                        {item.name}
                    </h3>
                </div>

                {/* GIÁ & CHI TIẾT */}
                <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-base font-extrabold text-red-600">{item.price}</span>
                    <span className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer">
                        Chi tiết &rarr;
                    </span>
                </div>

            </div>
        </div>
    );
}