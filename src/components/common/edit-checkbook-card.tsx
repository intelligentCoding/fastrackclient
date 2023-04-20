import { EditIcon } from '@/components/icons/edit';
import Button from '@/components/ui/button';
import { useTranslation } from 'next-i18next';
import Input from '@/components/ui/input';
import cn from 'classnames';

type EditConfirmationCardProps = {
  onCancel: () => void;
  onEdit: () => void;
  title?: string;
  icon?: any;
  defaultValue?: string;
  description?: string;
  cancelBtnClassName?: string;
  editBtnClassName?: string;
  cancelBtnText?: string;
  deleteBtnText?: string;
  EditBtnText?: string;
  cancelBtnLoading?: boolean;
  deleteBtnLoading?: boolean;
};

const EditConfirmationCard: React.FC<EditConfirmationCardProps> = ({
  onCancel,
  onEdit,
  icon,
  defaultValue,
  title = 'Edit?',
  EditBtnText = 'Yes, Edit!',
  editBtnClassName,
  deleteBtnLoading,
}) => {
  const { t } = useTranslation('common');
  return (
    <div className="m-auto w-full max-w-sm rounded-md bg-light p-4 pb-6 sm:w-[24rem] md:rounded-xl">
      <div className="h-full w-full text-center">
        <div className="flex h-full flex-col justify-between">
          {icon ? (
            icon
          ) : (
            <EditIcon className="m-auto mt-4 h-12 w-12 text-accent" />
          )}
          <p className="mt-4 text-xl font-bold text-heading">{t(title)}</p>
         
          <Input
            // {...register('mappedFrom')}
            name=''
            defaultValue={defaultValue}
            // error={errors.mappedFrom?.message}
            variant="outline"
            className="mb-5"
          />
          <div className="space-s-4 mt-8 flex w-full items-center justify-center">
           <div className="w-1/2">
              <Button
                onClick={onEdit}
                loading={deleteBtnLoading}
                disabled={deleteBtnLoading}
                variant="custom"
                className={cn(
                  'w-full rounded bg-green-600 py-2 px-4 text-center text-base font-semibold text-light shadow-md transition duration-200 ease-in hover:bg-green-700 focus:bg-green-700 focus:outline-none',
                  editBtnClassName
                )}
              >
                {t(EditBtnText)}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditConfirmationCard;
