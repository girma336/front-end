"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

const UploadImage = ({ onClose, onImageCapture }: any) => {
  const [progress, setProgress] = useState<number>(0);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [uploadComplete, setUploadComplete] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Function to validate file type
  const isValidFileType = (file: File | null) => {
    if (!file) {
      return false;
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    return allowedTypes.includes(file.type);
  };

  // Function to validate file size
  const isValidFileSize = (file: File | null) => {
    if (!file) {
      return false;
    }

    const maxSizeInBytes = 800 * 1024;
    return file.size <= maxSizeInBytes;
  };

  const getFileExtension = (fileName: string) => {
    const parts = fileName.split(".");
    return parts.length > 1 ? `.${parts[parts.length - 1]}` : "";
  };

  const uploadFile = async () => {
    setProgress(0);

    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    try {
      // Validate file type
      if (!isValidFileType(file)) {
        toast.error("Invalid file type. Please select a JPEG or PNG image.");
        return;
      }

      // Validate file size
      if (!isValidFileSize(file)) {
        toast.error("File size exceeds the limit of 800 KB.");
        return;
      }

      // Simulate upload progress
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 20;
          if (newProgress >= 100) {
            clearInterval(interval);
            setUploadComplete(true);
            // Read the image data as a data URL
            const reader = new FileReader();
            reader.onloadend = () => {
              const imageDataUrl = reader.result as string;
              onImageCapture(imageDataUrl);
            };
            reader.readAsDataURL(file);
          }
          return newProgress;
        });
      }, 500);
    } catch (error: any) {
      toast.error(String(error));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleChangeFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFileName(file?.name || null);

    // Validate file type
    if (file === undefined || !isValidFileType(file)) {
      toast.error("Invalid file type. Please select a JPEG or PNG image.");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSelectedFileName(null);
      return;
    }

    // Validate file size
    if (!isValidFileSize(file)) {
      toast.error("File size exceeds the limit of 800 KB.");
      // Clear the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSelectedFileName(null);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-custom-black bg-opacity-50 backdrop-blur">
      <div className="shadow-[0px 0px 15px #012940] relative flex h-auto w-full max-w-[85%] flex-col rounded-lg bg-custom-blue-dark p-12 ring-4 ring-custom-gray-primary sm:h-[500px] sm:max-w-[502px]">
        <button
          type="button"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <Image
            src="/icons/close-icon.svg"
            alt="close button"
            width={25}
            height={25}
          />
        </button>

        <h3 className="mb-4 text-center text-sm font-semibold text-custom-white sm:text-2xl">
          Upload ID Card for Verification
        </h3>

        <p className="mb-4 text-center text-sm text-custom-white sm:text-base">
          Confirm your identity by securely uploading your ID card for identity
          verification purposes. Your ID card should be in either .JPG or .PNG
          format and no more than 800 KB.
        </p>

        <div className="flex w-[75%] flex-col items-center justify-center gap-3 self-center rounded border border-dashed p-2 text-center sm:max-w-[70%]">
          <Image
            src="/icons/upload-image-icon.svg"
            alt="upload button icon"
            width={40}
            height={40}
          />
          <p>
            Click here to{" "}
            <input
              type="file"
              className="hidden"
              id="fileInput"
              onChange={handleChangeFileUpload}
              ref={fileInputRef}
              accept=".jpg, .jpeg, .png"
              style={{ position: "absolute", top: "-9999px" }}
            />
            <button
              type="button"
              className="cursor-pointer text-custom-blue-primary underline"
              onClick={handleButtonClick}
            >
              Browse
            </button>{" "}
            your File
          </p>
        </div>

        <div className="mt-4 flex flex-col">
          <p>
            File name:{" "}
            {selectedFileName
              ? `${selectedFileName.slice(0, 6)}${getFileExtension(
                  selectedFileName
                )}`
              : "No file selected"}
          </p>
        </div>

        <div className="rounded-md p-2">
          <div className="h-1 w-full overflow-hidden rounded-md bg-custom-gray sm:h-2">
            <div
              className="h-full bg-custom-blue-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          className={`mt-6 w-[60%] self-center rounded-full ${
            uploadComplete ? "bg-custom-gray-primary" : "bg-custom-blue-primary"
          } p-4 text-custom-white`}
          onClick={uploadFile}
          disabled={uploadComplete}
        >
          {uploadComplete ? "ID Uploaded" : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
