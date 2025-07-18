//Trang Home
//Router { / }
//Trang Home
'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/slices/modalSlice';
import Link from 'next/link';

export default function HomePages() {
  const menuItems = [
    {
      id: 1,
      name: 'Phở Bò Truyền Thống',
      image: '/images/product.jpg',
      position: 1,
      status: 'active',
      price: 120,
      discount: 10,
      stars: 4,
    },
    {
      id: 2,
      name: 'Gỏi Cuốn Tôm Thịt',
      image: '/images/product.jpg',
      position: 2,
      status: 'unactive',
      price: 60,
      discount: 0,
      stars: 5,
    },
    {
      id: 3,
      name: 'Chè Dừa Non',
      image: '/images/product.jpg',
      position: 3,
      status: 'active',
      price: 45,
      discount: 5,
      stars: 3,
    },
    {
      id: 4,
      name: 'Chè Dừa Non',
      image: '/images/product.jpg',
      position: 4,
      status: 'active',
      price: 45,
      discount: 5,
      stars: 3,
    },
    {
      id: 5,
      name: 'Chè Dừa Non',
      image: '/images/product.jpg',
      position: 5,
      status: 'active',
      price: 45,
      discount: 5,
      stars: 3,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const sortedItems = menuItems.sort((a, b) => a.position - b.position);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const currentItems = sortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const dispatch = useDispatch();
  const {category} = useSelector(state => state.client_category);
  const {foods} = useSelector(state => state.client_food);
  useEffect(() => {
    dispatch({type: 'client_branch/fetchBranch'});
    dispatch({type: 'client_food/fetchFood'});
    dispatch({type: 'client_category/fetchCategory'});
  }, [dispatch]);

  return (
    <main>
      <section className="relative text-center">
        <img
          className="h-full w-full object-cover animate-zoomIn"
          src="/images/banner1.jpg"
          alt=""
        />
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl lg:text-4xl font-bold text-white lg:leading-10 animate-slideInLeft">
            Sự Hài Hòa Trong Thiết Kế: <br />
            Kết Hợp Hình Thức và Chức Năng
          </h2>
          <button
            style={{ animationDelay: '0.3s' }}
            onClick={() => dispatch(openModal({name: 'booking'}))}
            className="bg-black animate-slideInLeft mt-4 lg:mt-8 h-11 border border-white px-7 inline-flex items-center font-semibold text-white rounded-full text-[15px] hover:bg-white hover:text-black transition-all duration-300"
          >
            Đặt Bàn Ngay
          </button>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="max-w[1480px] w-full px-5 mx-auto py-0">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center py-14">
            <li className="flex items-center lg:justify-center flex-1 gap-[15px]">
              <img src="/icons/common/ico_freeship.svg" alt="" />
              <span>Miễn Phí Giao Hàng</span>
            </li>
            <li className="flex items-center lg:justify-center flex-1 gap-[15px]">
              <img src="/icons/common/ico_quality.svg" alt="" />
              <span>Đảm Bảo Chất Lượng</span>
            </li>
            <li className="flex items-center lg:justify-center flex-1 gap-[15px]">
              <img src="/icons/common/ico_return.svg" alt="" />
              <span>Hoàn Trả Trong 14 Ngày</span>
            </li>
            <li className="flex items-center lg:justify-center flex-1 gap-[15px]">
              <img src="/icons/common/ico_support.svg" alt="" />
              <span>Hỗ Trợ 24/7</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-8 lg:py-24 bg-white">
        <div className="max-w-[1480px] w-full px-5 mx-auto py-0">
          <div className="flex flex-col-1 lg:items-center justify-between">
            <h2 className="text-xl font-bold lg:text-xl mt-4">Thực đơn</h2>
            <Link
              href="/menu"
              className="mt-4 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              Xem thêm
            </Link>
          </div>

          <ul className="mt-8 lg:grid grid-cols-4 gap-7 md:grid grid-rows-1 md:gap-10">
            {foods.map((item) => (
              <li
                key={item._id}
                className="mt-6 md:mt-0 text-center group relative border border-gray-200 rounded-2xl p-2"
              >
                <a>
                  {item.status === 'inactive' && (
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-500 text-white rounded-xl">
                      Out of stock
                    </span>
                  )}
                  <div
                    className="rounded-xl bg-white overflow-hidden flex items-center justify-center">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src={item.avatar}
                      alt={item.name}
                    />
                  </div>
                  <h3 className="text-15 mt-2 font-semibold">{item.name}</h3>
                </a>

                <div className="mt-2 relative h-5 overflow-hidden">
                  <div
                    className="absolute flex items-center flex-col left-1/2 -translate-x-1/2 hover:bottom-0 -bottom-5 transition-all duration-300">
                    <div className="flex items-center justify-center font-bold text-15 text-center">
                      <span>{item.priceFormat} ₫</span>
                    </div>
                    {item.status === 'active' && (
                      <a
                        href="#"
                        className="uppercase text-xs font-medium relative after:absolute after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:left-0 hover:after:w-full after:transition-all after:duration-500"
                      >
                        Thêm vào giỏ
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pt-20 pb-20 mt-20 mb-9 lg:mb-20 bg-gray-100">
        <div className="max-w-[1480px] w-full px-5 mx-auto py-0">
          <div className="lg:flex items-center justify-between">
            <div>
              <p className="text-[14px] uppercase">TRẢI NGHIỆM TỐT NHẤT:</p>
              <h2 className="text-3xl font-semibold py-4 lg:py-10 leading-[1.4]">
                Đặt Bàn Nhanh Chóng <br />
                Trải Nghiệm Ẩm Thực Tuyệt Vời
              </h2>
              <div className="flex justify-center">
                <button
                  onClick={() => dispatch(openModal({name: 'booking'}))}
                  className=" bg-white h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">
                  Đặt Bàn Ngay
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mt-6 lg:mt-0">
              <img
                className="image hover:scale-110 duration-500 transition-all w-full"
                src="/images/banner4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
