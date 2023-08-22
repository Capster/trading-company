interface WaveProps {
  fill: string,
};

export const WaveUp = ({ fill }: WaveProps) => (
  <div className="absolute w-full h-[4.5rem] lg:h-[9.375rem] overflow-hidden leading-[0] bottom-0 left-0">
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 43.3563L80 35.6919C160 28.0275 320 12.6988 480 5.03438C640 -2.63 800 -2.63 960 12.6988C1120 28.0275 1280 58.685 1440 68.9042C1600 79.1233 1760 68.9042 1840 63.7946L1920 58.685V120H1840C1760 120 1600 120 1440 120C1280 120 1120 120 960 120C800 120 640 120 480 120C320 120 160 120 80 120H0V43.3563Z" fill={fill}/>
    </svg>
  </div>
);

export const WaveDown = ({ fill }: WaveProps) => (
  <div className="absolute w-full h-[4.5rem] lg:h-[9.375rem] overflow-hidden leading-[0] top-0 left-0">
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1920 75L1840 83.3333C1760 91.6667 1600 108.333 1440 120.833C1280 133.333 1120 141.667 960 129.167C800 116.667 640 83.3332 480 83.3332C320 83.3332 160 116.667 80 133.333L0 150L1.31134e-05 -0.000167852L80 -0.000160858C160 -0.000153864 320 -0.000139876 480 -0.000125889C640 -0.000111901 800 -9.79135e-05 960 -8.39259e-05C1120 -6.99382e-05 1280 -5.59506e-05 1440 -4.19629e-05C1600 -2.79753e-05 1760 -1.39876e-05 1840 -6.99382e-06L1920 0L1920 75Z" fill={fill}/>
    </svg>
  </div>
);
