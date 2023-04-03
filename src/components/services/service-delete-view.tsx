import ConfirmationCard from '@/components/common/confirmation-card';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteServiceMutation } from '@/data/services';
import { getErrorMessage } from '@/utils/form-error';

const ServiceDeleteView = () => {
  const { mutate: deleteProduct, isLoading: loading } =
    useDeleteServiceMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();

  async function handleDelete() {
    try {
      deleteProduct({ id: data });
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
      title="Delete service?"
    />
  );
};

export default ServiceDeleteView;
