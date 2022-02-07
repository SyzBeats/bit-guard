import { useEffect, useState } from 'react';

function useClickaway(ref, callback) {
  useEffect(() => {
    const listener = (event) => {
      // check if the event target is not within the ref
      if (!ref.current || ref.current.contains(event.target)) {
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
