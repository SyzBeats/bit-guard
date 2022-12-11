import { useEffect } from 'react';

function useClickaway(ref: any, callback: any, prevent: boolean) {
  useEffect(() => {
    const listener = (event: any) => {
      // check if the event target is not within the ref
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      if (prevent) {
        return;
      }

      callback();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);

  return [callback];
}

export { useClickaway };
