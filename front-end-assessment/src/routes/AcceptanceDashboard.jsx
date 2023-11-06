import React, { useState, useCallback, useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import CreditProtectionDrawer from "../components/CreditProtectionDrawer";
import PortalPopup from "../components/PortalPopup";
import Footer from "../components/Footer";
import Header from "../components/Header";
import animatedCPLock from "../assets/icons/animated-cp-lock.svg";
import numOne from "../assets/icons/number-one-bullet.svg";
import numTwo from "../assets/icons/number-two-bullet.svg";
import numThree from "../assets/icons/number-three-bullet.svg";
import numFour from "../assets/icons/number-four-bullet.svg";
import nascarAmex from "../assets/icons/nascar-amex-card.png";
import warningIcon from "../assets/icons/warning-icon.svg";
import Button from "../components/Button";
import AnimatedCPLogo from "../components/AnimatedCPLogo";

const AcceptanceDashboard = () => {
  const [isCreditProtectionDrawerOpen, setCreditProtectionDrawerOpen] =
    useState(false);
  const [initials, setInitials] = useState("");

  const [isInit, setIsInit] = useState(false);

  const openCreditProtectionDrawer = useCallback(async () => {
    setCreditProtectionDrawerOpen(true);
    setIsInit(true);
  }, []);

  const handleCloseTransition = () => {
    if (isCreditProtectionDrawerOpen) {
      const bg = document.getElementById("portalPopupOverlay");
      const modal = document.getElementById("popupModal");
      const windowWidth = Dimensions.get("window").width;
      if (windowWidth > 640) {
        modal.classList.remove("modal-slide-in");
        bg.classList.remove("modalBg");
        bg.classList.add("modalBgRemoval");
        modal.classList.add("modal-slide-out");
      } else if (windowWidth <= 640) {
        modal.classList.remove("modal-slide-down");
        bg.classList.remove("modalBg");
        bg.classList.add("modalBgRemoval");
        modal.classList.add("modal-slide-up");
      }
    }
    setTimeout(() => {
      setCreditProtectionDrawerOpen(false);
    }, "500");
  };

  useEffect(() => {
    if (!isInit) {
      return;
    } else if (isCreditProtectionDrawerOpen) {
      const bg = document.getElementById("portalPopupOverlay");
      const modal = document.getElementById("popupModal");
      const windowWidth = Dimensions.get("window").width;
      bg.classList.add("modalBg");
      if (windowWidth > 640) {
        modal.classList.add("modal-slide-in");
      } else if (windowWidth <= 640) {
        modal.classList.add("modal-slide-down");
      }
    }
  }, [isCreditProtectionDrawerOpen]);

  const handleUpdateInitials = (newValue) => {
    setInitials(newValue);
  };

  return (
    <>
      <div className="relative bg-white w-full h-[102rem] sm:h-[81.44rem] overflow-hidden text-left text-base text-grey66 font-open-sans">
        <Header />
        <div className="p-6 mt-[95px] pb-9 sm:p-0 sm:m-0 sm:mt-[88px] items-center flex justify-center bg-white box-border w-full h-12 overflow-hidden text-sm border-b border-solid border-grey190 leading-5">
          <div className="flex align-center">
            <img
              className="inherit w-6 h-6"
              alt="Warning Icon"
              src={warningIcon}
            />
            <span className="mx-2">
              For your security, please close your browser after you{" "}
              <a href="" className="text-credit-one-blue">
                print this page
              </a>
              .
            </span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-start-1 col-span-6 bg-background-grey w-full h-[25rem] sm:h-[21rem] text-center text-overflow">
            <h1 className="text-[32px] sm:text-4xl pt-2 sm:pt-7 leading-tight sm:leading-11 ">
              <b>Congratulations, [Firstname]!</b>
            </h1>
            <h2 className="col-start-2 col-span-4 font-normal mb-4 mt-4 pl-4 pr-4 sm:p-0">
              You’re approved for a [Product Name] with a credit line of [$000]
            </h2>
            <p className="col-start-2 col-span-4 text-base mt-0 pl-10 pr-10 sm:p-0">
              (Pending final verification of your information and identity)
            </p>
            <img
              className="col-start-1 col-span-6 mt-6 shadow-lg w-64 h-40"
              alt="Credit One Bank American Express card with NASCAR graphics"
              src={nascarAmex}
            />
            <p className="col-start-2 col-span-4 text-sm text-neutrals-grey118 ">
              Application Code:
              <b>[XXXXXXXXXXXXXX]</b>
            </p>
          </div>
          <div className="flex sm:flex-nowrap sm:shrink flex-wrap justify-center col-start-2 col-span-4 mt-28 sm:mt-20 pl-[11.33rem] sm:pl-16 pr-20 sm:pr-16 pb-9 sm:pb-20 border-b border-solid border-grey190">
            <div className="col-start-3 col-span-1">
              <p className="mb-6 pl-0 sm:pl-24 font-bold text-2xl inline-block w-[28.5rem]">
                What happens next?
              </p>

              <div className="pl-3 sm:pl-28 sm:w-[27.25rem] flex flex-col sm:flex-nowrap sm:shrink flex-wrap w-[19rem] items-start justify-start gap-8">
                <div className="self-stretch flex flex-row items-center justify-start gap-4">
                  <div className="self-stretch flex flex-row items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-8 h-8"
                      alt="Blue One Bullet"
                      src={numOne}
                    />
                  </div>
                  <div className="flex-1">
                    Please print this page for your records
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-4">
                  <img className="w-8 h-8" alt="Blue Two Bullet" src={numTwo} />
                  <div className="flex-1">
                    After our final verification process is complete, your new
                    credit card will be mailed to you within 10 business days.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-4">
                  <img
                    className="w-8 h-8"
                    alt="Blue Three Bullet"
                    src={numThree}
                  />
                  <div className="flex-1">
                    You will be notified via email when your credit card is
                    mailed.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-4">
                  <img
                    className="w-8 h-8"
                    alt="Blue Four Bullet"
                    src={numFour}
                  />
                  <div className="flex-1">
                    Once you receive your credit card you can begin using your
                    card immediately upon activation.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-start-4 col-span-1 pl-0 sm:pl-32 mt-6 sm:mt-0">
              <p className="mb-6 text-2xl inline-block w-[28.5rem]">
                Are you protected?
              </p>
              {initials.length == 0 && (
                <div
                  className="p-4 pl-3.5 sm:pl-5 bg-white box-border w-[20.5rem] sm:w-[28.5rem] flex cursor-pointer border border-solid border-text-neutrals-grey118 sm:items-center rounded-sm"
                  onClick={openCreditProtectionDrawer}
                >
                  <AnimatedCPLogo />
                  <div className="inline-block pl-3 sm:pl-6">
                    <p className="w-52 sm:w-64 mt-0">
                      <b>Make sure you’re covered with Credit Protection.</b>
                    </p>
                    <Button isFilled={false} name="Enroll">
                      Enroll Today
                    </Button>
                  </div>
                </div>
              )}
              {initials.length > 0 && (
                <div className="p-4 pl-3.5 pb-2.5 sm:pb-4 sm:pl-5 bg-white box-border w-[20.5rem] sm:w-[28.5rem] flex border border-solid border-text-neutrals-grey118 sm:items-center rounded-sm">
                  <div className="cp-success-container">
                    <img
                      className={"h-20 w-19 sm:h-[96px] sm:w-[96px]"}
                      src={animatedCPLock}
                      alt="Credit Protection Successful Enrollment Icon"
                    />
                    <div className="cp-badge relative bottom-[30px] -left-0 sm:absolute sm:top-0 sm:left-0">
                      <svg
                        className="h-20 w-19 sm:h-[96px] sm:w-[96px]"
                        viewBox="0 0 97 97"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="80" cy="15.973" r="16" fill="#008638" />
                        <path
                          d="m85.563 11.348-7.876 9.25-3.25-3.25"
                          stroke="#fff"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="inline-block pl-5 sm:pl-6">
                    <p className="w-52 sm:w-64 mt-0 mb-1.5">
                      <b>Your Account is protected!</b>
                    </p>
                    <p className="w-52 sm:w-64 mt-0">
                      You are enrolled in Credit Protection.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {isCreditProtectionDrawerOpen && (
        <PortalPopup id="credit-protection-drawer" placement="End">
          <CreditProtectionDrawer
            onClose={handleCloseTransition}
            handleUpdateInitials={handleUpdateInitials}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default AcceptanceDashboard;
