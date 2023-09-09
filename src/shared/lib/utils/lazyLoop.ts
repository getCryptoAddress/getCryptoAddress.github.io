/*
 * Description: This function is used to loop through a function
 *             without blocking the main thread.
 */
export default function lazyLoop(count: number, callback: () => Promise<void>) {
  return new Promise<void>((resolve) => {
    let currentCount = count;

    function loop() {
      if (currentCount <= 0) {
        resolve();
        return;
      }

      currentCount -= 1;
      callback().then(() => {
        // use MacroTask (instead of queueMicrotask(loop))
        setTimeout(loop, 0);
      });
      return;
    }

    loop();
  });
}
