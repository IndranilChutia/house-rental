import React, { useCallback, useRef, useState } from "react";
import upl from "../../assets/images/Admin/uploadIcon.png";
const ProductImageUploadBox = (props) => {
  const { onImageChange } = props;

  const inputRef = useRef(null);
  const [error, setError] = useState(null);

  // File validation callback
  const validateFile = useCallback((file) => {
    if (!file || !file?.type?.startsWith("image/")) {
      setError("Only image files allowed!");
      return false;
    }
    if (file.size > 10240 * 1024) {
      setError("File size exceeded! Max 1MB allowed.");
      return false;
    }
    return true;
  }, []);

  const handleImgUpload = () => {
    inputRef.current.click();
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (!validateFile(file)) return;

    setError(null);
    onImageChange(file);
  };

  return (
    <div
      className={`border border-blue-600 min-w-[3vmax] min-h-[3vmax] w-[5vmax] h-[5vmax] rounded antialiased overflow-hidden flex justify-center items-center cursor-pointer`}
      onClick={handleImgUpload}
    >
      {error && <span className="text-red-500 text-xs">{error}</span>}

      <img src={upl} alt="upload placeholder" className="w-1/3 h-1/3" />

      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleImgChange}
        accept="image/*"
      />
    </div>
  );
};

export { ProductImageUploadBox };
