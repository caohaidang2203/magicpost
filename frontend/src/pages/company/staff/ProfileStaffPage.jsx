import React from "react";
import StaffHeader from "../../../components/Company/Layout/StaffHeader.jsx";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
const ProfileStaffPage = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <StaffHeader />
      <div className=" sm:mx-[50px] sm:px-[10px] sm:py-5 sm:min-h-[800px] min-h-[1000px] py-5 px-[10px]">
        {/* Title */}
        <div className="w-full h-[65px] px-[10px] mb-3">
          <div className="w-full float-left block text-[#26B99A]">
            <h3 className="mx-[9px] text-[24px] flex font-[500]">
              <FaUser size={24} className="mr-2 mt-1" />
              Quản lý thông tin tài khoản
            </h3>
            <h5 className="text-[14px] font-[500] leading-[18px] ml-11">
              <a href="/" className="flex text-[#31708f]">
                <ins>Đăng xuất</ins>
                <IoMdLogOut size={14} className="ml-1 mt-[2px]" />
              </a>
            </h5>
          </div>
        </div>

        <div className="mx-[-10px] float-left w-full">
          {/* Cập nhật thông tin cá nhân */}
          <form action="">
            <div className="md:w-[60%] md:relative md:min-h-[1px] md:px-[10px] md:float-left w-full relative min-h-[1px] px-[10px] float-left">
              <div className="relative w-full h-[100%] mb-[10px] px-[17px] py-[10px] inline-block bg-white border border-solid border-[#e6e9ed] opacity-100 transition-all">
                <div className="border-b-[2px] border-solid border-b-[#e6e9ed] text-[#26B99A] pt-[1px] pb-[6px] px-[5px] mb-[10px]">
                  <h2 className="mt-[5px] mb-[6px] block truncate text-[18px] font-[500]">
                    Thông tin cá nhân
                  </h2>
                </div>

                {/* content nhan vien */}
                <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] mb-4 clear-both">
                  <form action="">
                    <div className="mx-0 mb-[10px] text-[#31708f]">
                      <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                        Mã nhân viên
                        <span className="text-[#a94442]">*</span>
                      </label>
                      <input
                        type="text"
                        value="20020392"
                        className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                      />
                    </div>

                    <div className="mx-[-10px]">
                      <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                        <div className="mx-0 mb-[10px] text-[#31708f]">
                          <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                            Họ tên
                            <span className="text-[#a94442]">*</span>
                          </label>
                          <input
                            type="text"
                            value="Nguyễn Thị Bình"
                            className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                          />
                        </div>
                      </div>
                      <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                        <div className="mx-0 mb-[10px] text-[#31708f]">
                          <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                            Điện thoại
                            <span className="text-[#a94442]">*</span>
                          </label>
                          <input
                            type="text"
                            value="0345 456 567"
                            className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mx-0 mb-[10px] text-[#31708f]">
                      <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                        Mã bưu cục
                        <span className="text-[#a94442]">*</span>
                      </label>
                      <input
                        type="text"
                        value="17D2002"
                        className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                      />
                    </div>

                    <div className="mx-0 mb-[24px] text-[#31708f]">
                      <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                        Địa chỉ bưu cục
                        <span className="text-[#a94442]">*</span>
                      </label>
                      <input
                        type="text"
                        value="91 Ngõ 14, Phố Mễ Trì Hạ, Hà Nội"
                        className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                      />
                    </div>

                    <div className="mx-0">
                      <button
                        type="submit"
                        className="mr-[5px] inline-block transition-all text-center w-full cursor-pointer text-white bg-[#26B99A]  font-normal align-middle border-none px-3 py-[6px] leading-[1.43] text-[14px] whitespace-nowrap"
                      >
                        Cập nhật thông tin cá nhân
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>

          {/* Thay đổi mật khẩu */}
          <form action="">
            <div className="md:relative md:min-h-[1px] md:float-left md:px-[10px] md:w-[40%] md:h-auto relative min-h-[1px] float-left px-[10px] w-full">
              <div className="relative w-full h-[100%] mb-[10px] px-[17px] py-[10px] inline-block bg-white border border-solid border-[#e6e9ed] opacity-100 transition-all">
                <div className="border-b-[2px] border-solid border-b-[#e6e9ed] text-[#26B99A] pt-[1px] pb-[6px] px-[5px] mb-[10px]">
                  <h2 className="mt-[5px] mb-[6px] block truncate text-[18px] font-[500]">
                    Thay đổi mật khẩu
                  </h2>
                </div>

                <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] clear-both">
                  <form action="">
                    <div className="mx-0 mb-[10px] text-[#31708f]">
                      <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                        Mật khẩu cũ
                        <span className="text-[#a94442]">*</span>
                      </label>
                      <input
                        type="password"
                        placeholder=""
                        className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                      />
                    </div>

                    <div className="mx-0 mb-[10px] text-[#31708f]">
                      <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                        Mật khẩu mới
                        <span className="text-[#a94442]">*</span>
                      </label>
                      <input
                        type="password"
                        placeholder=""
                        className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                      />
                    </div>

                    <div className="mx-0 mb-[10px] text-[#31708f]">
                      <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                        Nhập lại mật khẩu mới
                        <span className="text-[#a94442]">*</span>
                      </label>
                      <input
                        type="password"
                        placeholder=""
                        className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                      />
                    </div>
                    <div className="border-t-[1px] border-solid border-t-[#e5e5e5] bg-white h-[1px] my-5 relative"></div>

                    <div className="mx-0 mb-[20px]">
                      <button
                        type="submit"
                        className="mr-[5px] inline-block transition-all text-center w-full cursor-pointer text-white bg-[#26B99A] mb-0 font-normal align-middle border-none px-3 py-[6px] leading-[1.43] text-[14px] whitespace-nowrap"
                      >
                        Cập nhật mật khẩu
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileStaffPage;
