import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt, onClose }: ImageLightboxProps) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageLightbox;
