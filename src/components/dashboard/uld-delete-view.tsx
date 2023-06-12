import ConfirmationCard from '@/components/common/confirmation-card';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteUldMutation } from '@/data/uld';
import { getErrorMessage } from '@/utils/form-error';
import {
  useCheckbookModalAction,
  useCheckbookModalState,
} from '../ui/checkbook-modal/modal.context';

const UldDeleteView = () => {
  const { mutate: deleteUld, isLoading: loading } = useDeleteUldMutation();
  const { data } = useCheckbookModalState();
  const { closeCheckbookModal, openCheckbookModal } = useCheckbookModalAction();

  async function handleDelete() {
    try {
      deleteUld({ id: data.uldId });
      closeCheckbookModal();
      openCheckbookModal('ULD', {
        id: data.id,
      });
    } catch (error) {
      closeCheckbookModal();
      openCheckbookModal('ULD', {
        id: data.id,
      });
      getErrorMessage(error);
    }
  }

  return (
    <ConfirmationCard
      onCancel={closeCheckbookModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
      title="Delete Uld?"
    />
  );
};

export default UldDeleteView;
