import React from "react";

// Use this for the callback handlers in react-contenteditable to change on state update
// Issue on using hooks with react-contenteditable: https://github.com/lovasoa/react-contenteditable/issues/161#issuecomment-736053428
export const useRefCallback = <T extends any[]>(
  value: ((...args: T) => void) | undefined,
  deps?: React.DependencyList
): ((...args: T) => void) => {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, deps || [value]);

  const result = React.useCallback((...args: T) => {
    ref.current?.(...args);
  }, []);

  return result;
};
