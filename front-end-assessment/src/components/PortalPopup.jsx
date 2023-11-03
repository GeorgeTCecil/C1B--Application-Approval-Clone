import React, { useMemo, useCallback, useState, useRef, useEffect,} from "react";
import { createPortal } from "react-dom";

const PortalPopup = ({
  children,
  overlayColor,
  placement = "End",
  zIndex = 100,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  relativeLayerRef,
}) => {
  const relContainerRef = useRef(null);
  const [relativeStyle, setRelativeStyle] = useState({
    opacity: 0,
  });
  const popupStyle = useMemo(() => {
    const style = {};
    style.zIndex = zIndex;

    if (!relativeLayerRef?.current) {
      switch (placement) {
        case "End":
          style.alignItems = "end";
          style.justifyContent = "end";
          break;
      }
    }
    style.opacity = 1;
    return style;
  }, [placement, overlayColor, zIndex, relativeLayerRef?.current]);

  const setPosition = useCallback(() => {
    const style = { opacity: 1 };

    style.maxWidth = "100%";
    style.maxHeight = "100%";
    setRelativeStyle(style);
  }, [
    left,
    right,
    top,
    bottom,
    placement,
    relativeLayerRef?.current,
    relContainerRef?.current,
  ]);

  useEffect(() => {
    setPosition();

    window.addEventListener("resize", setPosition);
    window.addEventListener("scroll", setPosition, true);

    return () => {
      window.removeEventListener("resize", setPosition);
      window.removeEventListener("scroll", setPosition, true);
    };
  }, [setPosition]);

  return (
    <Portal>
      <div
        id="portalPopupOverlay"
        className="flex flex-col fixed inset-0"
        style={popupStyle}
      >
        <div ref={relContainerRef} style={relativeStyle}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

const Portal = ({ children, containerId = "portals" }) => {
  let portalsDiv = document.getElementById(containerId);
  if (!portalsDiv) {
    portalsDiv = document.createElement("div");
    portalsDiv.setAttribute("id", containerId);
    document.body.appendChild(portalsDiv);
  }

  return createPortal(children, portalsDiv);
};

export default PortalPopup;
