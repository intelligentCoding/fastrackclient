import ConfirmationCard from '@/components/common/confirmation-card';
import { toast } from 'react-toastify'; 
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteCommodityMapMutation } from '@/data/commodity-mapping';
import { getErrorMessage } from '@/utils/form-error';

const AirportsDeleteView = () => {
  const { mutate: deleteCommodityMap, isLoading: loading } =
  useDeleteCommodityMapMutation();
  const { data } = useModalState();
  const { closeModal } = useModalAction();

  async function handleDelete() {
    try {
        deleteCommodityMap({ id: data });
      closeModal();
    } catch (error) {
      toast.error(error)
      closeModal();
      getErrorMessage(error);
    }
  }

  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={loading}
      title="Delete Map?"
    />
  );
};

export default AirportsDeleteView;
