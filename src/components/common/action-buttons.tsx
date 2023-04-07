import { BanUser } from '@/components/icons/ban-user';
import { EditIcon } from '@/components/icons/edit';
import { TrashIcon } from '@/components/icons/trash';
import { Eye } from '@/components/icons/eye-icon';
import { WalletPointsIcon } from '@/components/icons/wallet-point';
import Link from '@/components/ui/link';
import { useTranslation } from 'next-i18next';
import { CheckMarkCircle } from '@/components/icons/checkmark-circle';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { CloseFillIcon } from '@/components/icons/close-fill';
import { AdminIcon } from '@/components/icons/admin-icon';

type Props = {
  id: string;
  editModalView?: string | any;
  deleteModalView?: string | any;
  editCheckbookModalView?: string | any;
  checkbookEditData?: string | any;
  editCheckbookLabel?: string | any;
  editUrl?: string;
  detailsUrl?: string;
  isUserActive?: boolean;
  userStatus?: boolean;
  isShopActive?: boolean;
  approveButton?: boolean;
  showAddWalletPoints?: boolean;
  changeRefundStatus?: boolean;
  showMakeAdminButton?: boolean;
  showReplyQuestion?: boolean;
  customLocale?: string;
};

const ActionButtons = ({
  id,
  editModalView,
  deleteModalView,
  editUrl,
  detailsUrl,
  editCheckbookModalView,
  checkbookEditData,
  editCheckbookLabel,
  userStatus = false,
  isUserActive = false,
  isShopActive,
  approveButton = false,
  customLocale,
}: Props) => {
  const { t } = useTranslation();
  const { openModal } = useModalAction();

  function handleDelete() {
    openModal(deleteModalView, id);
  }

  function handleEditModal() {
    openModal(editModalView, id);
  }
  function handleCheckbookEditModal() {
    openModal(editCheckbookModalView, {
      id: id,
      defaultText: checkbookEditData,
      label: editCheckbookLabel,
    });
  }

  return (
    <div className="inline-flex w-auto items-center gap-8">
      {deleteModalView && (
        <button
          onClick={handleDelete}
          className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none"
          title="Delete"
        >
          <TrashIcon width={16} />
        </button>
      )}
      {editModalView && (
        <button
          onClick={handleEditModal}
          className="text-body transition duration-200 hover:text-heading focus:outline-none"
          title={t('common:text-edit')}
        >
          <EditIcon width={16} />
        </button>
      )}

      {editUrl && (
        <Link
          href={editUrl}
          className="text-base transition duration-200 hover:text-heading"
          title={t('common:text-edit')}
        >
          <EditIcon width={16} />
        </Link>
      )}
      {detailsUrl && (
        <Link
          href={detailsUrl}
          className="ml-2 text-base transition duration-200 hover:text-heading"
          title={t('common:text-view')}
          locale={customLocale}
        >
          <Eye width={24} />
        </Link>
      )}
      {editCheckbookModalView && (
        <div onClick={handleCheckbookEditModal}>
          <p>{checkbookEditData}</p>
        </div>
      )}
    </div>
  );
};

export default ActionButtons;
