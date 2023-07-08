import React, { useEffect } from "react";

interface ClientBound {
  width: number;
  height: number;
  x: number;
  y: number;
}

const useClientPostition = () => {
  const [clientBound, setClientBound] = React.useState<ClientBound>({width : 0, height : 0, x : 0, y : 0});
  const ref = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.parentElement) {
      const parent = ref.current.parentElement.getBoundingClientRect();
      const child = ref.current.getBoundingClientRect();
      setClientBound({
        x : child.x - parent.x,
        y : child.y - parent.y,
        width : child.width,
        height : child.height,
      });
    }

  }, [ref]);

  return [ref, clientBound];
};

export default useClientPostition;
