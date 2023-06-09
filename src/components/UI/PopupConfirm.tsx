import Button from './Button';

export interface IPopupConfirmProps {
  show: boolean;
  title: string;
  description: string;
  cancel: () => void;
  confirm: () => void;
}

export const PopupConfirm = (props: IPopupConfirmProps) => {
  const { show, title, description, cancel, confirm } = props;
  return (
    <div
      className={`${
        show ? '' : 'hidden'
      } w-screen h-screen fixed flex items-center justify-center top-0 left-0 opacity-1 bg-black/60 backdrop-opacity-60 z-20`}
    >
      <div className="h-48 w-64 rounded-xl drop-shadow-lg z-30 bg-orange-50 absolute flex flex-col items-center p-2 text-gray-500">
        <div className="text-black font-bold min-h-8 w-full mb-3 bg-orange-300 rounded-lg p-1 text-center">
          {title}
        </div>
        <div className="mb-3 mt-auto text-center">{description}</div>
        <div className="flex gap-2 mt-auto mb-2">
          <Button
            label="Cancel"
            click={cancel}
            style={{ bg: 'bg-slate-300', color: 'text-black' }}
          />
          <Button label="Confirm" click={confirm} />
        </div>
      </div>
    </div>
  );
};
