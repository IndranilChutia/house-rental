import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import uploadIcon from "../../assets/images/Admin/uploadIcon.png";
import placeholder from "../../assets/images/Admin/uploadThumbnailPlaceholder.png";

const ThumbnailInput = (props) => {
  const { onImageUpload } = props;

  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  // UseMemo to optimize objectURL creation
  const imageSrc = useMemo(() => {
    if (image) {
      return URL.createObjectURL(image[0]);
    }
    return null;
  }, [image]);

  // File validation callback
  const validateFile = useCallback((file) => {
    if (!file || !file[0]?.type.startsWith("image/")) {
      setError("Only image files allowed!");
      return false;
    }
    if (file.size > 1024 * 1024) {
      setError("File size exceeded! Max 1MB allowed.");
      return false;
    }
    return true;
  }, []);

  const handleImgUpload = () => {
    inputRef.current.click();
  };

  const handleImgChange = (e) => {
    const file = e.target.files;
    if (!validateFile(file)) return;

    setImage(file);
    setError(null);
    onImageUpload(file);
  };

  // Cleanup objectURL on unmount
  useEffect(() => () => image && URL.revokeObjectURL(imageSrc), [imageSrc]);

  return (
    <div
      className="addProductThumbnailCont rounded antialiased overflow-hidden mb-4  w-[90%] h-fit max-h-96"
      onClick={handleImgUpload}
    >
      {error && <span className="text-red-500 text-xs">{error}</span>}
      {image ? (
        <div className="relative h-full w-full group hover:bg-black hover:bg-opacity-10 flex justify-starts items-center cursor-pointer">
          <div className="absolute w-full h-full group-hover:bg-black group-hover:opacity-40"></div>
          <img
            src={uploadIcon}
            alt="upload"
            className="absolute left-[40%] top-[40%] hidden group-hover:block"
          />
          <img src={imageSrc} alt="uploaded product" className="h-full" />
        </div>
      ) : (
        <img
          src={placeholder}
          alt="product thumnail placeholder"
          className="cursor-pointer object-contain w-full h-full"
        />
      )}
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

export { ThumbnailInput };
