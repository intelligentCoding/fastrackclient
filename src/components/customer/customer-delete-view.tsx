import ConfirmationCard from '@/components/common/confirmation-card';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteCustomerMutation } from '@/data/customer';
import { useDeleteServiceMutation } from '@/data/services';
import { getErrorMessage } from '@/utils/form-error';

const CustomereDeleteView = () => {
  const { mutate: deleteCustomer, isLoading: loading } =
    useDeleteCustomerMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();

  async function handleDelete() {
    try {
      deleteCustomer({ id: data });
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
      title="Delete Customer?"
    />
  );
};

export default CustomereDeleteView;
