import Image from "next/image";

export default function ImageUpload() {
  return (
    <div>
      <div className="py-12 sm:py-18 md:py-24 border border-gray_B rounded-md flex flex-col items-center justify-center text-center">
        <label htmlFor="file-uploadA">
          {" "}
          <Image
            src="../image-icon.svg"
            width={50}
            height={50}
            alt="image input"
          />
        </label>
        <input
          type="file"
          id="file-uploadA"
          className="hidden file:mx-auto file:w-32"
        />
        <div>
          <p className="font-semibold text-lg">Add Image</p>
          <p>Drag & drop to upload</p>
        </div>
      </div>
    </div>
  );
}
