import React, { useState, useEffect, useRef } from 'react';
import {
    FaSearch,
    FaUser,
    FaBars,
    FaTimes,
    FaHome,
    FaFireExtinguisher,
    FaDraftingCompass,
    FaShieldAlt,
    FaPhoneAlt,
    FaChevronDown,
    FaFileInvoiceDollar
} from 'react-icons/fa';
import { Badge, Button, Dropdown, Input } from 'antd';
import { IoIosChatbubbles } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import type { MenuProps } from 'antd';
import { MdShoppingCart } from 'react-icons/md';
import { HiMiniInformationCircle } from 'react-icons/hi2';

const items: MenuProps['items'] = [
    { key: '1', label: 'My Account', disabled: true },
    { type: 'divider' },
    { key: '2', label: 'Profile', extra: '⌘P' },
    { key: '3', label: 'Billing', extra: '⌘B' },
    {
        key: '4',
        label: 'Settings',
        icon: <IoSettings />,
        extra: '⌘S'
    },
];

const Header = () => {
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Trang chủ');
    const [isTopVisible, setIsTopVisible] = useState(true);

    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    if (currentScrollY > 180) {
                        setIsTopVisible(false);
                        setMobileSearchOpen(false);
                        setMobileMenuOpen(false);
                    } else if (currentScrollY < 100) {
                        setIsTopVisible(true);
                    }
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Sửa href thành '#introduction' để khớp với id của section bên dưới
    const menuItems = [
        { name: 'Trang chủ', href: '/', icon: FaHome, hasDropdown: false },
        {
            name: 'Thiết bị PCCC',
            href: '#products',
            icon: FaFireExtinguisher,
            hasDropdown: true,
            submenu: ['Bình chữa cháy', 'Hệ thống báo cháy', 'Vòi & Trụ chữa cháy', 'Trang thiết bị bảo hộ']
        },
        {
            name: 'Tư vấn & Thiết kế',
            href: '#services',
            icon: FaDraftingCompass,
            hasDropdown: true,
            submenu: ['Thẩm duyệt PCCC', 'Thiết kế hệ thống', 'Nghiệm thu & Cấp phép']
        },
        { name: 'Giám sát & Cứu hộ', href: '#monitoring', icon: FaShieldAlt, hasDropdown: false },
        { name: 'Giới thiệu', href: '/introduction', icon: HiMiniInformationCircle, hasDropdown: false },
    ];

    return (
        <header
            className="w-full sticky top-0 z-50 shadow-md border-b backdrop-blur-md bg-opacity-90"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
        >
            <div className='max-w-[1280px] mx-auto px-4'>

                {/* HÀNG TRÊN (Logo & Công cụ) */}
                <div className={isTopVisible ? 'block' : 'hidden'}>
                    <div className='h-16 flex justify-between items-center'>
                        <div className='h-full flex items-center cursor-pointer'>
                            <img
                                src="https://pccctrucbinh.vn/wp-content/themes/truc-binh-pccc/assets/img/logo.png"
                                className='h-10 object-contain'
                                alt="Logo PCCC"
                            />
                            <div className='mx-2 tracking-widest font-bold flex items-center'>
                                <span className='text-[#FF3333] text-2xl -mt-0.5 mr-1 drop-shadow-sm'>FIRE</span>
                                <span className='text-[#3399FF] text-2xl drop-shadow-sm'>TECH</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-5">
                            <div className="hidden sm:block w-52 lg:w-72">
                                <Input
                                    placeholder="Tìm kiếm thiết bị, giải pháp..."
                                    prefix={<FaSearch className="w-3.5 h-3.5 mr-1.5 opacity-60" style={{ color: 'var(--text)' }} />}
                                    allowClear
                                    className="rounded-full py-1.5 px-4 text-xs transition-all shadow-inner"
                                    style={{
                                        backgroundColor: 'var(--bg)',
                                        color: 'var(--text-h)',
                                        borderColor: 'var(--border)',
                                    }}
                                />
                            </div>

                            <div className="sm:hidden flex items-center">
                                <Button
                                    type="text"
                                    shape="circle"
                                    icon={<FaSearch className="w-4 h-4" style={{ color: 'var(--text-h)' }} />}
                                    onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                                    className="flex items-center justify-center transition-all"
                                />
                            </div>

                            <Badge count={5} offset={[-2, 2]} className="cursor-pointer">
                                <div className="p-2 rounded-full transition-colors flex items-center justify-center hover:bg-neutral-500/10" style={{ color: 'var(--text-h)' }}>
                                    <MdShoppingCart size={22} />
                                </div>
                            </Badge>
                            <Badge count={5} offset={[-2, 2]} className="cursor-pointer">
                                <div className="p-2 rounded-full transition-colors flex items-center justify-center hover:bg-neutral-500/10" style={{ color: 'var(--text-h)' }}>
                                    <IoIosChatbubbles size={22} />
                                </div>
                            </Badge>

                            <Dropdown menu={{ items }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <div className="flex items-center cursor-pointer group pl-1">
                                        <div
                                            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ring-2 ring-[#FF3333]/50 transition-all shadow-sm"
                                            style={{ backgroundColor: 'var(--text-h)', color: 'var(--bg)' }}
                                        >
                                            <FaUser className="w-4 h-4" />
                                        </div>
                                    </div>
                                </a>
                            </Dropdown>

                            <Button
                                type="text"
                                shape="circle"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                icon={
                                    mobileMenuOpen ? (
                                        <FaTimes className="w-5 h-5" style={{ color: 'var(--text-h)' }} />
                                    ) : (
                                        <FaBars className="w-5 h-5" style={{ color: 'var(--text-h)' }} />
                                    )
                                }
                                className="md:hidden flex items-center justify-center transition-all"
                            />
                        </div>
                    </div>

                    {mobileSearchOpen && (
                        <div className="sm:hidden px-2 pb-3 pt-1 border-b flex items-center gap-2" style={{ borderColor: 'var(--border)' }}>
                            <Input
                                placeholder="Tìm kiếm thiết bị, giải pháp PCCC..."
                                prefix={<FaSearch className="mr-1 opacity-60" style={{ color: 'var(--text)' }} />}
                                allowClear
                                autoFocus
                                className="rounded-full py-1.5 text-xs shadow-inner"
                                style={{ backgroundColor: 'var(--bg)', color: 'var(--text-h)', borderColor: 'var(--border)' }}
                            />
                            <Button
                                type="text"
                                shape="circle"
                                icon={<FaTimes style={{ color: 'var(--text)' }} />}
                                onClick={() => setMobileSearchOpen(false)}
                            />
                        </div>
                    )}
                </div>

                {/* HÀNG DƯỚI (Menu điều hướng chính) */}
                <nav
                    className={`${isTopVisible ? '' : 'py-2'} hidden md:flex items-center justify-between text-xs font-medium border-t`}
                    style={{ borderColor: 'var(--border)' }}
                >
                    <img
                        src="https://pccctrucbinh.vn/wp-content/themes/truc-binh-pccc/assets/img/logo.png"
                        className={`h-10 object-contain mr-5 ${isTopVisible ? 'hidden' : 'block'}`}
                        alt="Logo PCCC"
                    />
                    <div className="flex items-center gap-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.name;

                            return (
                                <div key={item.name} className="relative group">
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            setActiveTab(item.name);
                                        }}
                                        className={`relative flex items-center gap-1.5 px-3 py-2.5 transition-all duration-200 rounded-lg my-1 no-underline ${isActive
                                            ? 'text-[#FF4D4D] font-semibold bg-red-500/10'
                                            : 'hover:text-[#FF4D4D] hover:bg-neutral-500/5'
                                            }`}
                                        style={{
                                            color: isActive ? '#FF4D4D' : 'var(--text-h)',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-[#FF4D4D]' : 'opacity-70 group-hover:opacity-100'}`} />
                                        <span>{item.name}</span>

                                        {item.hasDropdown && (
                                            <FaChevronDown className="w-2.5 h-2.5 ml-0.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                                        )}
                                    </a>

                                    {item.hasDropdown && item.submenu && (
                                        <div
                                            className="absolute top-full left-0 mt-1 w-52 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-1.5 border backdrop-blur-xl"
                                            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
                                        >
                                            {item.submenu.map((sub, idx) => (
                                                <a
                                                    key={idx}
                                                    href="#"
                                                    className="block px-3 py-2 text-xs font-medium rounded-lg transition-colors hover:text-[#FF4D4D] hover:bg-red-500/10 no-underline"
                                                    style={{ color: 'var(--text-h)', textDecoration: 'none' }}
                                                >
                                                    {sub}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className={`${isTopVisible ? 'hidden' : 'block'} mx-5 flex gap-2`}>
                            <Badge count={5} offset={[-2, 2]} className="cursor-pointer">
                                <div className="p-2 rounded-full transition-colors flex items-center justify-center hover:bg-neutral-500/10" style={{ color: 'var(--text-h)' }}>
                                    <MdShoppingCart size={22} />
                                </div>
                            </Badge>
                            <Badge count={5} offset={[-2, 2]} className="cursor-pointer">
                                <div className="p-2 rounded-full transition-colors flex items-center justify-center hover:bg-neutral-500/10" style={{ color: 'var(--text-h)' }}>
                                    <IoIosChatbubbles size={22} />
                                </div>
                            </Badge>
                        </div>

                        <a
                            href="#baogiao"
                            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 no-underline"
                            style={{ textDecoration: 'none' }}
                        >
                            <FaFileInvoiceDollar className="w-3.5 h-3.5" />
                            <span>Nhận Báo Giá</span>
                        </a>
                    </div>
                </nav>

                {mobileMenuOpen && (
                    <nav className="md:hidden py-3 border-t flex flex-col gap-1 text-xs font-semibold" style={{ borderColor: 'var(--border)' }}>
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.name} className="flex flex-col">
                                    <a
                                        href={item.href}
                                        onClick={() => {
                                            setActiveTab(item.name);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-red-500/10 hover:text-[#FF4D4D] no-underline"
                                        style={{ color: 'var(--text-h)', textDecoration: 'none' }}
                                    >
                                        <Icon className="w-3.5 h-3.5 text-[#FF4D4D]" />
                                        <span>{item.name}</span>
                                    </a>
                                    {item.submenu && (
                                        <div className="pl-7 flex flex-col gap-1 my-0.5">
                                            {item.submenu.map((sub, idx) => (
                                                <a key={idx} href="#" className="py-1 text-xs transition-colors hover:text-[#FF4D4D] no-underline" style={{ color: 'var(--text)', textDecoration: 'none' }}>
                                                    - {sub}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                )}

            </div>
        </header>
    );
};

export default Header; // hoặc export default Header;