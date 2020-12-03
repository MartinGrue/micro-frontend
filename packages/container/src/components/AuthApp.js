import React, { useRef, useEffect} from "react";
import { mount } from "auth/bootstrap";
import { useHistory } from "react-router-dom";
export default () => {
  const ref = useRef(null);
  const history = useHistory(); //get the browserhistory
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        pathname !== nextPathname && history.push(nextPathname);
      },
      initPath: history.location,
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};
