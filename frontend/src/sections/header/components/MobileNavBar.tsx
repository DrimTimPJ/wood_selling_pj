import { FC, SetStateAction, Dispatch } from 'react';
import NavBar from './NavBar';

interface MobileNavBarProps {
  setFunc: Dispatch<SetStateAction<boolean>>;
}

const MobileNavBar: FC<MobileNavBarProps> = ({ setFunc }) => {
  return (
    <div className="bg-black opacity-90 fixed left-0 right-0 z-10 h-[100vh] text-white text-[24px] overflow-hidden p-5">
      <div
        className="text-[48px] text-end active:text-red-800"
        onClick={() => setFunc(false)}
      >
        X
      </div>
      <div onClick={() => setFunc(false)}>
        <NavBar />
      </div>
    </div>
  );
};

export default MobileNavBar;
