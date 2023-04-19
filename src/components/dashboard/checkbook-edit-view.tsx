import EditConfirmationCard from '@/components/common/edit-checkbook-card';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import React from 'react';
// import { useDeleteCustomerMutation } from '@/data/customer';
// import { useDeleteServiceMutation } from '@/data/services';
// import { getErrorMessage } from '@/utils/form-error';

const CustomereDeleteView = () => {
  // const { mutate: deleteCustomer, isLoading: loading } =
  //   useDeleteCustomerMutation();
  const { data } = useModalState();
  console.log("🚀 ~ file: checkbook-edit-view.tsx:14 ~ CustomereDeleteView ~ data:", data)
  const { closeModal } = useModalAction();

  async function handleEditText() {
    closeModal()
    // try {
    //   deleteCustomer({ id: data });
    //   closeModal();
    // } catch (error) {
    //   closeModal();
    //   getErrorMessage(error);
    // }
  }

  return (
    <EditConfirmationCard
      onCancel={closeModal}
      onEdit={handleEditText}
      // deleteBtnLoading={loading}
      title={`Edit ${data.label}`}
      defaultValue={data.defaultText}
      />
  );
};

export default CustomereDeleteView;
