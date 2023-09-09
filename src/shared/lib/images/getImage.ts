export default function getImage(
  src: string
): Promise<{ width: number; height: number; src: string }> {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = function () {
      resolve({ width: image.width, height: image.height, src });
    };

    image.src = src;
  });
}
