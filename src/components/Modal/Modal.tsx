import { ReactNode } from 'react';
import { ReactComponent as CloseIcon } from 'assets/img/close-drawer-icon.svg';
import { clsx } from 'clsx';
import './Modal.scss';

interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  setVisible: (arg: boolean) => void;
}

const Modal = ({ children, visible, setVisible }: ModalProps) => {

  return (
    <div
      className={clsx('modal', {
        active: visible
      })}
      onClick={() => setVisible(false)}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__icon" onClick={() => setVisible(false)}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  );
};

export { Modal };
