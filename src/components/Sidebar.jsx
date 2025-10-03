import React from "react";
import phoneImage from "../assets/phone.png";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 text-white bg-black md:flex-row md:items-center md:gap-10 xl:ml-10 xl:gap-16 xl:my-10 md:h-96">
      
      {/* العنوان والصورة الصغيرة */}
      <div className="flex flex-col items-start w-full gap-5 text-center md:w-auto md:text-left">
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAxCAMAAACf+RsMAAAA0lBMVEUAAAD+/v7a2tr+/v79/f3+/v7+/v7+/v79/f3+/v77+/v9/f39/f36+vr9/f329vbp6en5+fn+/v76+vr////7+/v6+vr9/f3+/v79/f36+vr8/Pz6+vr7+/v6+vr09PT8/Pz////+/v79/f39/f38/Pz19fX5+fn5+fn9/f39/f3+/v79/f35+fn5+fn7+/vz8/P////8/Pz4+Pj4+Pj+/v7s7Oz9/f329vbd3d3m5ub9/f37+/v+/v79/f3////19fX////9/f3p6enb29v///8/qJpNAAAARXRSTlMA/gzPpfr27emrg3peMxgTEQjXxMK6o5KKhnlSQyQgHf7w393b0tLRuLGomY1/d3NmV1dKRzo2LioPBeTa07yomn5qFxUFWTPIAAABVElEQVQ4y63V51ICMRSG4WTZxW0svfcmCEqRKvZy7v+WZBITlJF8MuP7LzMPB7JksuwfWo0fawyXiBHRErspp30r6ALh7i3klsKRDQd2SFRH7la6MRzoCZexIGwL14Dubs/afprBrJw3TbKTJRevpdI8Ustdomx7z8Xq8ScSI06ip/Bjv1z7Lsm4vf3+q0oO6eLDlwdOh5xAu3SejF0reEXmeEW6MoH6TeHqF8BlU3JgEbieJZ0FBvI1k1XBwKFkeCu1Pz4bVx+OrhkOmArs5fJ86JphV8OYGToNBW0yd6OgD6CrYAigPo3vHMnZl+wj2JpIWCGYJ07uxsEyI0bmMAzUiQTxhvpzQAV1HwIX1zdq1gyLTLWNm1wnKRB8lvzHa2kEjo8udXLn+aOrPOrpPWYLhUFLrXKREnqmLQcs0mI1k1/h7357T74FYfOw3MwnYcTO7hPjzyTm2HWirQAAAABJRU5ErkJggg=="
            alt="apple"
            className="w-10 h-auto animate-bounce"
          />
          <h1 className="text-lg">سلسلة iPhone 14</h1>
        </div>
        <h2 className="text-2xl leading-10 md:text-5xl">
          حتى 10% خصم القسيمة
        </h2>
        <a href="/Products">
          <button className="flex gap-2 px-6 py-2 underline transition-transform duration-300 underline-offset-8 hover:translate-x-4">
            <span>تسوق الآن</span>
            <svg
              className="mt-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </a>
      </div>

      {/* صورة الهاتف */}
      <div className="relative flex justify-center w-full mt-6 md:w-auto">
        <div className="transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
          <a href="./Products">
            <img
              src={phoneImage}
              alt="هاتف"
              loading="lazy"
              className="w-full max-w-[300px] md:max-w-sm lg:max-w-md transition-transform duration-300 transform hover:translate-y-0 hover:scale-105 hover:motion-safe:animate-pulse"
            />
          </a>
        </div>
     </div>

    </div>
  );
}
