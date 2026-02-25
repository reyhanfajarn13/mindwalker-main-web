import { useEffect } from "react";

const preloadedImageUrls = new Set<string>();

export function useImagePreload(imageUrls: Array<string | null | undefined>) {
  useEffect(() => {
    const normalizedUrls = imageUrls
      .filter((url): url is string => typeof url === "string" && url.trim().length > 0)
      .map((url) => url.trim());

    normalizedUrls.forEach((url) => {
      if (preloadedImageUrls.has(url)) return;
      preloadedImageUrls.add(url);

      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.as = "image";
      preloadLink.href = url;
      document.head.appendChild(preloadLink);

      const image = new Image();
      image.decoding = "async";
      image.src = url;
    });
  }, [imageUrls]);
}
