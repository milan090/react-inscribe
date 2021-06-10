import React, { useEffect, useRef } from "react";

interface OutsideClickProps {
  children: React.ReactNode;
  onOutsideClick?: () => any;
}

/**
 * Component that alerts if you click outside of it
 */
export const OutsideClick: React.FC<OutsideClickProps> = ({
  children,
  onOutsideClick = () => {},
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: Event) => {
      if (ref?.current && !ref.current?.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return <div ref={ref}>{children}</div>;
};
