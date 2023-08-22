import { cn } from "@/lib/utils";

const ArrowSide = ({ isRight }: { isRight: boolean }) => (
  <div
    className={cn(
      "absolute flex justify-center items-center z-10 cursor-pointer rounded-full w-10 h-10 bg-white shadow-[0_4px_12px_0_rgba(112,64,244,0.15)] top-[calc(50%-1.25rem)]",
      isRight ? "right-0" : "left-0"
    )}
  >
    <svg className={cn(isRight && "scale-x-[-1]")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z" fill="#3A2A68"/>
    </svg>
  </div>
);

export const ArrowLeft = () => <ArrowSide isRight={false}/>;
export const ArrowRight = () => <ArrowSide isRight={true}/>;

export const ArrowDown = ({ className }: { className: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 8.29289C20.3166 7.90237 19.6834 7.90237 19.2929 8.29289L12 15.5858L4.70711 8.29289C4.31658 7.90237 3.68342 7.90237 3.29289 8.29289C2.90237 8.68342 2.90237 9.31658 3.29289 9.70711L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L20.7071 9.70711C21.0976 9.31658 21.0976 8.68342 20.7071 8.29289Z" fill="#7040F4"/>
  </svg> 
)
