import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

type ListHeaderProps = {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const ListHeader = ({ children, isVisible, setIsVisible }: ListHeaderProps) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      <h5 className="my-0">{children} </h5>
      {isVisible ? (
        <IoIosArrowDropup
          size={24}
          className="task-icon me-3"
          onClick={() => setIsVisible(!isVisible)}
        />
      ) : (
        <IoIosArrowDropdown
          size={24}
          className="task-icon me-3"
          onClick={() => setIsVisible(!isVisible)}
        />
      )}
    </div>
  );
};

export default ListHeader;
