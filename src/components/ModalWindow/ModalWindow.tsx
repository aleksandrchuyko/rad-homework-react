type Props = {
  children?: React.ReactNode;
};

const ModalWindow: React.FC<Props> = ({ children }) => {
  return (
    <div className='backdrop'>
      <div className='modal'>{children}</div>
    </div>
  );
};

export default ModalWindow;
