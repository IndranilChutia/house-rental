import React from "react";
import "./ProductImgBox.css";
import redCross from "../../assets/images/Admin/redCross.svg";
const ProductImageDisplayBox = ({ item, index, deleteImg }) => {
  return (
    <div
      className={`productImgGroup relative border border-blue-600 min-w-[3vmax] min-h-[3vmax] w-[5vmax] h-[5vmax] rounded overflow-hidden antialiased flex justify-center items-center cursor-pointer`}
      onClick={deleteImg(index)}
    >
      <img
        src={redCross}
        alt="productImg"
        className="productImgCross absolute w-8"
      />
      <div className="productImgBackdrop absolute w-full h-full bg-black opacity-30"></div>
      <img
        src={URL.createObjectURL(item)}
        alt="upload placeholder"
        className=""
      />
    </div>
  );
};

export { ProductImageDisplayBox };
