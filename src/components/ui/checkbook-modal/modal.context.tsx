import { Checkbook, Maybe } from '@/types';
import React from 'react';

export type CHECKBOOK_MODAL_VIEWS =
  | 'CARD_NAME'
  | 'HOUSE_AWB'
  | 'ISC'
  | 'ISC_PAID_TO'
  | 'DATE_PAID_ISC'
  | 'RUNNER_NUMBER'
  | 'AIRLINE_PREFIX'
  | 'MASTER'
  | 'FLIGHT_CODE'
  | 'FLIGHT_STATUS'
  | 'ARRIVAL_DATE'
  | 'PICKEDUP_DATE'
  | 'BAGS'
  | 'WEIGHT'
  | 'ULD'
  | 'IS_EXAM'
  | 'NUMBER_OF_PIECES_EXAM'
  | 'IS_PICKUP_ORDER_DONE'
  | 'REMARKS'
  | 'LABEL'
  | 'DELETE_CHECKBOOK'
  | 'DELETE_ULD';

export const CHECKBOOK_MODAL: {
  [key: string]: string;
} = {
  CARD_NAME: 'CARD_NAME',
  HOUSE_AWB: 'HOUSE_AWB',
  ISC: 'ISC',
  ISC_PAID_TO: 'ISC_PAID_TO',
  DATE_PAID_ISC: 'DATE_PAID_ISC',
  RUNNER_NUMBER: 'RUNNER_NUMBER',
  AIRLINE_PREFIX: 'AIRLINE_PREFIX',
  MASTER: 'MASTER',
  FLIGHT_CODE: 'FLIGHT_CODE',
  FLIGHT_STATUS: 'FLIGHT_STATUS',
  ARRIVAL_DATE: 'ARRIVAL_DATE',
  PICKEDUP_DATE: 'PICKEDUP_DATE',
  BAGS: 'BAGS',
  WEIGHT: 'WEIGHT',
  ULD: 'ULD',
  IS_EXAM: 'IS_EXAM',
  NUMBER_OF_PIECES_EXAM: 'NUMBER_OF_PIECES_EXAM',
  IS_PICKUP_ORDER_DONE: 'IS_PICKUP_ORDER_DONE',
  REMARKS: 'REMARKS',
  LABEL: 'LABEL',
};
export const CHECKBOOK_MODAL_TEXT: {
  [key: string]: string;
} = {
  CARD_NAME: 'Card Name',
  HOUSE_AWB: 'House Awb',
  ISC: 'Isc',
  ISC_PAID_TO: 'Paid To',
  DATE_PAID_ISC: 'Date Paid',
  RUNNER_NUMBER: 'Runner Number',
  AIRLINE_PREFIX: 'Airline Prefix',
  MASTER: 'Master',
  FLIGHT_CODE: 'Flight code',
  FLIGHT_STATUS: 'Flight Status',
  ARRIVAL_DATE: 'Arrival Date',
  PICKEDUP_DATE: 'Pickedup date',
  BAGS: 'Bags',
  WEIGHT: 'Weight',
  ULD: 'uld',
  IS_EXAM: 'Needs examed?',
  NUMBER_OF_PIECES_EXAM: 'Number of pieces',
  IS_PICKUP_ORDER_DONE: 'Is pickup order done?',
  REMARKS: 'Remarks',
  LABEL: 'Label',
};

interface CheckbookState {
  view?: CHECKBOOK_MODAL_VIEWS;
  data: any;
  isOpen: boolean;
}
type Action =
  | { type: 'open'; view?: CHECKBOOK_MODAL_VIEWS; payload?: any }
  | { type: 'close' };

const initialState: CheckbookState = {
  view: undefined,
  isOpen: false,
  data: {},
};

function modalReducer(state: CheckbookState, action: Action): CheckbookState {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        view: action.view,
        data: action.payload,
        isOpen: true,
      };
    case 'close':
      return {
        ...state,
        view: undefined,
        data: {},
        isOpen: false,
      };
    default:
      throw new Error('Unknown Modal Action!');
  }
}

const ModalStateContext = React.createContext<CheckbookState>(initialState);
ModalStateContext.displayName = 'ModalStateContext';
const CheckbookModalActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined);
CheckbookModalActionContext.displayName = 'CheckbookModalActionContext';

export const CheckbookModalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  return (
    <ModalStateContext.Provider value={state}>
      <CheckbookModalActionContext.Provider value={dispatch}>
        {children}
      </CheckbookModalActionContext.Provider>
    </ModalStateContext.Provider>
  );
};

export function useCheckbookModalState() {
  const context = React.useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error(
      `useModalState must be used within a CheckbookModalProvider`,
    );
  }
  return context;
}

export function useCheckbookModalAction() {
  const dispatch = React.useContext(CheckbookModalActionContext);
  if (dispatch === undefined) {
    throw new Error(
      `useModalAction must be used within a CheckbookModalProvider`,
    );
  }
  return {
    openCheckbookModal(view?: CHECKBOOK_MODAL_VIEWS, payload?: unknown) {
      dispatch({ type: 'open', view, payload });
    },
    closeCheckbookModal() {
      dispatch({ type: 'close' });
    },
  };
}
