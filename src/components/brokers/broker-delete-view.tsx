import ConfirmationCard from '@/components/common/confirmation-card';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteAirportMutation } from '@/data/airports';
import { useDeleteBrokerMutation } from '@/data/broker';
import { getErrorMessage } from '@/utils/form-error';

const BrokersDeleteView = () => {
  const { mutate: deleteBroker, isLoading: loading } =
    useDeleteBrokerMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();

  async function handleDelete() {
    try {
      deleteBroker({ id: data });
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
      title="Delete Airport?"
    />
  );
};

export default BrokersDeleteView;
