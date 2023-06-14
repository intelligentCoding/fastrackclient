import ConfirmationCard from '@/components/common/confirmation-card';
import {
  useCheckbookModalAction,
  useCheckbookModalState,
} from '@/components/ui/checkbook-modal/modal.context';
import { useDeleteCheckbookMutation } from '@/data/checkbook';
import { getErrorMessage } from '@/utils/form-error';

const CheckbookDeleteView = () => {
  const { mutate: deleteCheckbook, isLoading: loading } =
    useDeleteCheckbookMutation();
  const { data } = useCheckbookModalState();
  const { closeCheckbookModal } = useCheckbookModalAction();

  async function handleDelete() {
    try {
      deleteCheckbook({ id: data.id });
      closeCheckbookModal();
    } catch (error) {
      closeCheckbookModal();
      getErrorMessage(error);
    }
  }

  return (
    <ConfirmationCard
      onCancel={closeCheckbookModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
      title="Delete Checkbook?"
    />
  );
};

export default CheckbookDeleteView;
