import React, { useEffect, useState, ReactPortal } from "react";
import ReactDOM from "react-dom";

export interface PortalProps {
  target?: HTMLElement | null;
  children: React.ReactNode;
}

function Portal({ target = null, children }: PortalProps): ReactPortal | null {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? ReactDOM.createPortal(
        children,
        target || (document.querySelector("#portal") as HTMLDivElement)
      )
    : null;
}

export default Portal;
