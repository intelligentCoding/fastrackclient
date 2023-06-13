import ConfirmationCard from '@/components/common/confirmation-card';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteLastMileProviderMutation } from '@/data/lastMileProvider';
import { getErrorMessage } from '@/utils/form-error';

const LastMileProvidersDeleteView = () => {
  const { mutate: deleteLastMileProvider, isLoading: loading } =
  useDeleteLastMileProviderMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();

  async function handleDelete() {
    try {
        deleteLastMileProvider({ id: data });
      closeModal();
    } catch (error) {
      closeModal();
      getErrorMessage(error);
    }
  }

  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
      title="Delete Last Mile Provider?"
    />
  );
};

export default LastMileProvidersDeleteView;
