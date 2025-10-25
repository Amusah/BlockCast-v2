import { Image } from "lucide-react";
import React, { useState } from "react";

export const ImageUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(!file) return;

    if(e.target.files && e.target.files[0]){
      setFileName(e.target.files[0].name);
    }
  }

    // Validate file type
    // if (!["image/png", "image/jpeg"].includes(file.type)) {
    //   setError("Only PNG or JPG images are allowed.");
    //   setPreview(null);
    //   return;
    // }

    // Validate file size (max 5 MB)
    // if (file.size > 5 * 1024 * 1024) {
    //   setError("File size must be under 5 MB.");
    //   setPreview(null);
    //   return;
    // }

  return (
    <div className="w-full">
      <label
        htmlFor="photo-upload"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-muted-foreground/40 rounded-lg hover:border-primary cursor-pointer py-6"
      >
        <input
          id="photo-upload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="hidden"
        />
        {fileName ? (
          <p className="text-sm text-foreground">{fileName}</p>
        ) : (
          <div className="space-y-1 flex flex-col text-center">
            <Image className="size-7 mx-auto" />
            <p className="text-sm text-muted-foreground font-bold">
              Click to upload an image
            </p>
            <p className="text-xs text-muted-foreground">PNG, JPG up to 5 MB</p>
          </div>
        )}
      </label>
    </div>
  )
};


