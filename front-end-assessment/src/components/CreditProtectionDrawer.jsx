import React, { useRef } from "react";
import closeIcon from "../assets/icons/close-utility.svg";
import modalLock from "../assets/icons/modal-lock.svg";
import backChevron from "../assets/icons/back-chevron.svg";
import checkmark from "../assets/icons/checkmark.svg";
import pdfIcon from "../assets/icons/pdf-icon.svg";
import Button from "./Button";
import InitialsInputField from "./InitialsInputField";
import warningIcon from "../assets/icons/warning-icon.svg";
import Header from "./Header";
import Footer from "./Footer";

const CreditProtectionDrawer = (props) => {
  const agreementRef = useRef(null);
  const initialsRef = useRef(null);
  let initials = "";

  const toggleDivVisibility = () => {
    if (
      agreementRef.current.style.display === "none" ||
      !agreementRef.current.style.display
    ) {
      agreementRef.current.style.display = "block";
    } else {
      agreementRef.current.style.display = "none";
    }
  };

  const toggleVisibility = () => {
    if (
      initialsRef.current.style.display === "none" ||
      !initialsRef.current.style.display
    ) {
      initialsRef.current.style.display = "flex";
    }
  };

  function Callback(childData) {
    initials = childData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!initials || initials === "") {
      toggleVisibility();
    } else {
      props.onClose();
    }

    console.log(initials);
  };

  return (
    <div
      id="popupModal"
      className="flex flex-col content-start sm:p-8 relative bg-white shadow-lg min-w-full sm:min-w-[42.5vw] w-full sm:w-[42.5vw] h-[81.44rem] overflow-x-hidden max-h-full text-left text-3xl text-grey66 font-open-sans"
    >
      <div className="block sm:hidden">
        <Header />
      </div>

      <div className="p-8 pt-32 sm:pt-8">
        <div className="text-left text-lg text-grey66 font-open-sans">
          <div className="w-full flex justify-between">
            <img className=" w-[6rem] h-[6rem]" alt="" src={modalLock} />

            <img
              className="w-[1.5rem] h-[1.5rem] cursor-pointer"
              alt=""
              onClick={props.onClose}
              src={closeIcon}
            />
          </div>

          <b className="self-stretch relative">
            <p className="w-4/5 text-[32px] leading-[40px]">
              Protect your new account with these benefits
            </p>
          </b>

          <ul className="list-none pl-0">
            <li className="flex items-center">
              <img className="w-[1.5rem] h-[1.5rem]" alt="" src={checkmark} />
              <div className="pl-4">
                <p>
                  Up to <b> 6 benefit payments </b>in the case of involuntary
                  unemployment
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <img className="w-[1.5rem] h-[1.5rem]" alt="" src={checkmark} />
              <div className="pl-4">
                <p>
                  Up to <b>6 benefit payments</b> in cases of disability
                </p>
              </div>
            </li>
            <li className="flex items-baseline pt-0">
              <img className="w-[1.5rem] h-[1.5rem]" alt="" src={checkmark} />
              <div className="pl-4 w-[34rem] relative -top-1.5">
                <p className="">
                  For loss of life, the account may be eligible for a balance
                  payoff,<b> up to $10,000</b>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-10xs bg-background-grey w1/2 sm:w-11/12 h-fit p-8 text-sm text-dark-grey38">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start">
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-7">
                <input
                  className="relative bg-white float-left -ml-[2rem] mr-[6px] mt-[0.15rem] h-6 w-6 appearance-none rounded-[3px] border-[0.125rem] border-solid border-grey190 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-white before:content-[''] checked:border-credit-one-blue checked:bg-credit-one-blue checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100  checked:focus:after:-mt-px checked:focus:after:ml-[0.35rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45  checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 "
                  type="checkbox"
                  id="checkbox"
                  value=""
                  onChange={toggleDivVisibility}
                />
              </div>
              <div className="flex flex-row items-center justify-start py-[0.13rem] pr-[0rem] pl-1.5">
                <b className="text-sm">I want to protect my new account</b>
              </div>
            </div>
            <div ref={agreementRef} className="pl-0 hidden">
              <div className="">
                <ul className="pl-0">
                  <li className="flex">
                    <img className="justify-start" src={pdfIcon} />

                    <p className="text-base pl-4">
                      <a href="" className="text-credit-one-blue">
                        Limited Electronic Disclosure and Communications <br />
                        Consent Agreement
                      </a>
                    </p>
                  </li>
                  <li className="flex">
                    <img className="img" src={pdfIcon} />

                    <p className="text-base pl-4 ">
                      <a href="" className="text-credit-one-blue">
                        Credit Protection Program Disclosures and the Credit
                        <br />
                        Protection Program Agreement
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className="bg-[#FEF4F4] border-[0.125rem] border-solid border-[#CA1F24] border-opacity-[0.2] rounded-[3px] flex align-center pl-4 gap-2 hidden"
                ref={initialsRef}
              >
                <img src={warningIcon} className="filter-red"></img>
                <p className="text-base text-[#CA1F24] font-semibold">
                  Please enter your initials to confirm enrollment
                </p>
              </div>
              <p className="text-sm w-[97%]">
                By entering my initials below, I authorize the Credit Protection
                Program cost to be billed to my credit card Account. The cost is
                based on my Account balance each month, calculated at $0.96 per
                $100, or part thereof. I understand I may cancel at any time,
                and that any current unemployment or disability will not be
                covered. Enrollment in the Program is optional and not required
                to obtain credit.
              </p>
              <div className="input-base">
                <div className="input-container">
                  <div className="input-field">
                    <div className="text">
                      <div className="input"></div>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className="flex items-center gap-4">
                  <InitialsInputField handleCallback={Callback} />
                  <p className="text-base font-bold">
                    Enter your initials here to enroll in the optional <br />
                    Credit Protection Program
                  </p>
                </div>

                <div className="flex justify-center pt-10">
                  <Button isFilled={true}>
                    <div onClick={handleSubmit} className="text-base font-semibold">
                      Confirm Enrollment
                    </div>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[97%] flex items-center justify-center box-border gap-[0.5rem] text-lg text-credit-one-blue">
          <img className="w-[1.25rem] h-[1.25rem]" alt="" src={backChevron} />
          <p className="font-bold cursor-pointer" onClick={props.onClose}>
            Back
          </p>
        </div>
      </div>
      <div className="block sm:hidden">
        <Footer inModal="true" />
      </div>
    </div>
  );
};

export default CreditProtectionDrawer;
