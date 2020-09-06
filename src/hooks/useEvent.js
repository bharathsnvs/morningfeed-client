import { useEffect } from "react";

export default function useEvent(event, keydownHandler, passive = false) {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, keydownHandler, passive);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, keydownHandler);
    };
  });
}
