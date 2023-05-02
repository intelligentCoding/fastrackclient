import Modal from '@/components/ui/modal/modal';
import dynamic from 'next/dynamic';
import { CHECKBOOK_MODAL_VIEWS, useCheckbookModalAction, useCheckbookModalState } from './modal.context';

const CheckbookEditText = dynamic(
  () => import('@/components/dashboard/edit-checkbook/checkbook-update-text')
);
const CheckbookEditBoolean = dynamic(
  () => import('@/components/dashboard/edit-checkbook/checkbook-update-boolean')
);
const CheckbookEditDate = dynamic(
  () => import('@/components/dashboard/edit-checkbook/checkbook-update-date')
);
const CheckbookDeleteView = dynamic(
  () => import('@/components/dashboard/edit-checkbook/delete-checkbook')
);

function renderModal(view: CHECKBOOK_MODAL_VIEWS | undefined, data: any) {
  switch (view) {
    case 'CARD_NAME':
    case 'ISC':
    case 'ISC_PAID_TO':
    case 'RUNNER_NUMBER':
    case 'MASTER':
    case 'FLIGHT_CODE':
    case 'FLIGHT_STATUS':
    case 'BAGS':
    case 'WEIGHT':
    case 'ULD':
    case 'NUMBER_OF_PIECES_EXAM':
    case 'REMARKS':
    case 'LABEL':
      return <CheckbookEditText />
    case 'DATE_PAID_ISC':
    case 'ARRIVAL_DATE':
    case 'PICKEDUP_DATE':
        return <CheckbookEditDate />
    case 'IS_EXAM':
    case 'IS_PICKUP_ORDER_DONE':
        return <CheckbookEditBoolean />
    case 'DELETE_CHECKBOOK':
        return <CheckbookDeleteView />


    default:
      console.log("NULLLLL")
      return null;
  }
}

const CheckbookManagedModal = () => {
  const { isOpen, view, data } = useCheckbookModalState();
  console.log("the view ", view)
  const { closeCheckbookModal } = useCheckbookModalAction();

  return (
    <Modal open={isOpen} onClose={closeCheckbookModal}>
      {renderModal(view, data)}
    </Modal>
  );
};

export default CheckbookManagedModal;
