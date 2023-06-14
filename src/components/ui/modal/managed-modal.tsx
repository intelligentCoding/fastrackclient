import LastMileProvidersDeleteView from '@/components/lastMileProvider/last-mile-provider-delete-view';
import Modal from '@/components/ui/modal/modal';
import dynamic from 'next/dynamic';
import { MODAL_VIEWS, useModalAction, useModalState } from './modal.context';

const ServiceDeleteView = dynamic(
  () => import('@/components/services/service-delete-view'),
);
const AirportsDeleteView = dynamic(
  () => import('@/components/airports/airport-delete-view'),
);
const CommodityMapDeleteView = dynamic(
  () => import('@/components/commodityMapping/commodityMap-delete-view'),
);
const CustomereDeleteView = dynamic(
  () => import('@/components/customer/customer-delete-view'),
);
const BrokerDeleteView = dynamic(
  () => import('@/components/brokers/broker-delete-view'),
);
function renderModal(view: MODAL_VIEWS | undefined, data: any) {
  switch (view) {
    case 'DELETE_SERVICE':
      return <ServiceDeleteView />;
    case 'DELETE_AIRPORT':
      return <AirportsDeleteView />;
    case 'DELETE_COMMODITY_MAP':
      return <CommodityMapDeleteView />;
    case 'DELETE_BROKER':
      return <BrokerDeleteView />;
    case 'DELETE_CUSTOMER':
      return <CustomereDeleteView />;
    case 'DELETE_LAST_MILE_PROVIDER':
      return <LastMileProvidersDeleteView />;
    default:
      return null;
  }
}

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {renderModal(view, data)}
    </Modal>
  );
};

export default ManagedModal;
