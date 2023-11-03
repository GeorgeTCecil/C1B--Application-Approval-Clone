import adobeIcon from "../assets/icons/adobe-icon.svg";
import lockIcon from "../assets/icons/lock-icon.svg";

const Footer = (props) => {
  const inModal = props.inModal ? "" : "absolute";

  return (
    <div
      id="footerContainer"
      className={`bg-credit-one-black flex flex-col flex-wrap items-stretch justify-center pt-12 sm:pt-14 pl-3 sm:px-52 pb-5 sm:pb-16 box-border text-center text-xs ${inModal} w-full bottom-0`}
    >
      <div className="px-3 box-border">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-row items-center flex-wrap text-[#B4B4B4]">
            <span className="h-6 py-1 pr-2 pl-0 box-border">Privacy</span>|
            <span className="h-6 py-1 px-2 box-border">
              <div className="relative leading-[16px]">Terms of Use</div>
            </span>
            |<span className="h-6 py-1 px-2 box-border">Security & Fraud</span>
            <div className="sm:relative sm:tracking-[-0.11px] sm:leading-[16px] hidden sm:block">
              |
            </div>
            <div className="relative w-[137px] h-6">
              <span className="absolute top-[0px] left-2.5 sm:left-[20.5px] h-6 py-1 px-2 box-border">
                Card Agreements
              </span>
              <img
                className="absolute top-[4px] left-0 sm:left-[8px] w-4 h-4"
                alt=""
                src={adobeIcon}
              />
            </div>
          </div>
          <div className="mt-2.5 sm:mt-0 self-stretch flex flex-row items-end justify-start text-left gap-1.5">
            <span className="text-[#888888]">
              © 20XX Credit One Bank, N.A. All Rights Reserved. Member FDIC.
              <img className="relative w-4 h-4 px-1.5" alt="" src={lockIcon} />
              This is a secure site.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
