import React from "react";
import { ProductImageUploadBox } from "../ProductImageUploadBox";
import { ProductImageDisplayBox } from "../ProductImageDisplayBox";

const AdditionalImageInput = ({
  productImages,
  onImageChange,
  handleDelelteAdditionalImg,
}) => {
  const deleteImg = (index) => () => {
    let temp = [...productImages];
    temp.splice(index, 1);

    // setProductImages([...temp]);
    handleDelelteAdditionalImg(temp);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {productImages?.map((item, index) => {
        return (
          <ProductImageDisplayBox
            key={item.id || index}
            item={item}
            index={index}
            productImages={productImages}
            onImageChange={onImageChange}
            deleteImg={(e) => deleteImg(e)}
          />
        );
      })}
      {productImages?.length < 10 && (
        <ProductImageUploadBox onImageChange={onImageChange} />
      )}
    </div>
  );
};

export { AdditionalImageInput };
