import css from './ModalWindow.module.css';

type Props = {
  children?: React.ReactNode;
};

const ModalWindow: React.FC<Props> = ({ children }) => {
  return <div className={css.backdrop}>{children}</div>;
};

export default ModalWindow;
