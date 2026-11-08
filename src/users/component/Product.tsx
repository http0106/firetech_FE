import React from 'react'
import ProductCard from './ProductCard'


const Product = () => {

    const productList = [
        // --- NHÓM 1: BÌNH CHỮA CHÁY BỘT ABC ---
        {
            code: "MFZL1",
            name: "Bình Chữa Cháy Bột ABC 1Kg (MFZL1) Mini Ô Tô",
            price: "165.000đ",
            inStock: "Kho còn 5",
            category: "binh-chua-chay",
            image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "MFZL2",
            name: "Bình Chữa Cháy Bột ABC 2Kg (MFZL2) Gia Đình",
            price: "210.000đ",
            inStock: "Kho còn 5",
            category: "binh-chua-chay",
            image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "MFZL4",
            name: "Bình Chữa Cháy Bột ABC 4Kg (MFZL4) Kiểm Định BCA",
            price: "285.000đ",
            inStock: "Kho còn 5",
            category: "binh-chua-chay",
            image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "MFZL8",
            name: "Bình Chữa Cháy Bột ABC 8Kg Công Nghiệp",
            price: "420.000đ",
            inStock: "Kho còn 5",
            category: "binh-chua-chay",
            image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "MFZBT35",
            name: "Bình Xe Đẩy Chữa Cháy Bột ABC 35Kg Trạm Xăng",
            price: "1.450.000đ",
            inStock: "Kho còn 5",
            category: "binh-chua-chay",
            image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=600&q=80"
        },

        // --- NHÓM 2: BÌNH CHỮA CHÁY KHÍ CO2 ---
        {
            code: "MT3",
            name: "Bình Chữa Cháy Khí CO2 MT3 Chuyên Dụng Thiết Bị Điện",
            price: "450.000đ",
            inStock: "Kho còn 5",
            category: "binh-chua-chay",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "MT5",
            name: "Bình Chữa Cháy Khí CO2 MT5 Phòng Server",
            price: "650.000đ",
            inStock: "Kho còn 5",
            category: "binh-chua-chay",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "MT24",
            name: "Bình Xe Đẩy Chữa Cháy Khí CO2 24Kg Công Nghiệp",
            price: "3.800.000đ",
            inStock: "Kho còn 5",
            category: "binh-chua-chay",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
        },

        // --- NHÓM 3: CỨU HỘ & THOÁT HIỂM ---
        {
            code: "XHZLC40",
            name: "Mặt Nạ Phòng Độc Chống Khói Hỏa Hoạn XHZLC40",
            price: "180.000đ",
            inStock: "Kho còn 5",
            category: "cuu-ho",
            image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "CC-ST",
            name: "Chăn Chiên Dập Lửa Sợi Thủy Tinh Chống Cháy 1.8m",
            price: "250.000đ",
            inStock: "Kho còn 5",
            category: "cuu-ho",
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "TD-10M",
            name: "Thang Dây Thoát Hiểm Chống Cháy Chiều Dài 10M",
            price: "650.000đ",
            inStock: "Kho còn 5",
            category: "cuu-ho",
            image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "BTH-01",
            name: "Búa Phá Kính Thoát Hiểm Khẩn Cấp Chuyên Dụng",
            price: "65.000đ",
            inStock: "Kho còn 5",
            category: "cuu-ho",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
        },

        // --- NHÓM 4: VÒI, LĂNG & TỦ PCCC ---
        {
            code: "VC-D50",
            name: "Cuộn Vòi Chữa Cháy Đức D50 - 20M Kèm Lăng Phun",
            price: "750.000đ",
            inStock: "Kho còn 5",
            category: "voi-lang-tu",
            image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "VC-D65",
            name: "Cuộn Vòi Chữa Cháy D65 Trung Quốc 20M (13 Bar)",
            price: "850.000đ",
            inStock: "Kho còn 5",
            category: "voi-lang-tu",
            image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "LP-D50",
            name: "Lăng Phun Chữa Cháy Dạng Trụ Phun Sương D50/D65",
            price: "120.000đ",
            inStock: "Kho còn 5",
            category: "voi-lang-tu",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "TC-6080",
            name: "Tủ Đựng Thiết Bị PCCC Trong Nhà 600x800x200mm",
            price: "1.250.000đ",
            inStock: "Kho còn 5",
            category: "voi-lang-tu",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "TC-OT",
            name: "Tủ Đựng Thiết Bị PCCC Ngoài Trời Có Mái Che",
            price: "1.650.000đ",
            inStock: "Kho còn 5",
            category: "voi-lang-tu",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
        },

        // --- NHÓM 5: ĐÈN & BÁO CHÁY ---
        {
            code: "EXIT-LED",
            name: "Đèn Exit Thoát Hiểm LED 2 Mặt Chỉ Dẫn Hướng",
            price: "145.000đ",
            inStock: "Kho còn 5",
            category: "bao-chay",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "EM-LIGHT",
            name: "Đèn Chiếu Sáng Sự Cố Khẩn Cấp Tự Động Sáng",
            price: "220.000đ",
            inStock: "Kho còn 5",
            category: "bao-chay",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
        },
        {
            code: "QA-TT56",
            name: "Bộ Quần Áo Chữa Cháy Tiêu Chuẩn Thông Tư 56 BCA",
            price: "780.000đ",
            inStock: "Kho còn 5",
            category: "cuu-ho",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
        }
    ];
    console.log(productList);

    return (
        <>
            <div className="mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] ">
                    Thiết Bị PCCC Kiểm Định BCA
                </h2>
                <p className="text-sm text-slate-500 mt-1 ">
                    Chính hãng, đạt chuẩn chất lượng cho nhà xưởng, văn phòng và hộ gia đình.
                </p>
            </div>

            {/* Lưới hiển thị ProductCard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productList.map((item, index) => (
                    <ProductCard key={index} item={item} />
                ))}
            </div>
        </>


    )
}

export default Product