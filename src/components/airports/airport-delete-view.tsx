import ConfirmationCard from '@/components/common/confirmation-card';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteAirportMutation } from '@/data/airports';
import { getErrorMessage } from '@/utils/form-error';

const AirportsDeleteView = () => {
  const { mutate: deleteAirport, isLoading: loading } =
    useDeleteAirportMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();

  async function handleDelete() {
    try {
      deleteAirport({ id: data });
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

export default AirportsDeleteView;
