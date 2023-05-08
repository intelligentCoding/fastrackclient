import UldDeleteView from '@/components/dashboard/uld-delete-view';
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
const CheckbookUldList = dynamic(
  () => import('@/components/dashboard/checkbook-uld')
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
    case 'ULD':
        return <CheckbookUldList />
    case 'DELETE_CHECKBOOK':
        return <CheckbookDeleteView />
    case 'DELETE_ULD':
        return <UldDeleteView />


    default:
      return null;
  }
}

const CheckbookManagedModal = () => {
  const { isOpen, view, data } = useCheckbookModalState();
  const { closeCheckbookModal } = useCheckbookModalAction();

  return (
    <Modal open={isOpen} onClose={closeCheckbookModal}>
      {renderModal(view, data)}
    </Modal>
  );
};

export default CheckbookManagedModal;
