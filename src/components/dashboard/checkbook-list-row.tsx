import { Table } from '@/components/ui/table';
import ActionButtons from '@/components/common/action-buttons';

import { Checkbook } from '@/types';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
  CheckbookModalProvider,
  useCheckbookModalAction,
} from '../ui/checkbook-modal/modal.context';
import Badge from '../ui/badge/badge';
import { CloseFillIcon } from '../icons/close-fill';
import { CheckMarkCircle } from '../icons/checkmark-circle';
import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

type IProps = {
  checkbook: Checkbook[] | undefined;
};

const isToday = (someDate: Date) => {
  const today = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
  );
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};

const CheckbookListRow = ({ checkbook }: IProps) => {
  // const { data, paginatorInfo } = orders! ?? {};
  const router = useRouter();
  const { t } = useTranslation();
  const rowExpandable = (record: any) => record.children?.length;
  const [open, setOpen] = useState(false)
  const { openCheckbookModal } = useCheckbookModalAction();

  if(checkbook) {
    return (
      
      checkbook &&
      checkbook?.map((checkbooks) => {
        const d = new Date(checkbooks.datePaidIsc!);
        let isArrivalToday = false;
        let isArrivedYesterdayNotPickedup = false;
        // if (
        //   checkbooks.arrivalDate &&
        //   isBeforeToday(new Date(checkbooks.arrivalDate))
        // ) {
        //   isArrivedYesterdayNotPickedup = true;
        // }
        if (checkbooks.arrivalDate) {
          isArrivalToday = isToday(new Date(checkbooks.arrivalDate));
          if (
            checkbooks.arrivalDate !== null &&
            checkbooks.pickedUpDate === null &&
            !isArrivalToday
          ) {
            isArrivedYesterdayNotPickedup = true;
          }
        }
        const rowClass = cn('flex-no mb-2 flex flex-col sm:mb-0 sm:table-row', {
          'bg-[#BCF0DA]': isArrivalToday,
          'bg-[#F17EB8]': isArrivedYesterdayNotPickedup,
        });
        return (
          <>
          <tr className={rowClass} key={checkbooks.id}>
            <td
              className="border-grey-light border p-3 hover:bg-gray-100  max-w-[100px]"
              onClick={() =>
                openCheckbookModal('CARD_NAME', {
                  id: checkbooks.id,
                  updatedText: checkbooks.cardName,
                })
              }
            >
              {checkbooks.cardName}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('ISC', {
                  id: checkbooks.id,
                  updatedText: checkbooks.isc,
                })
              }
            >
              {checkbooks.isc}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('ISC_PAID_TO', {
                  id: checkbooks.id,
                  updatedText: checkbooks.iscPaidTo,
                })
              }
            >
              {checkbooks.iscPaidTo}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('DATE_PAID_ISC', {
                  id: checkbooks.id,
                  updatedDate: checkbooks.datePaidIsc,
                })
              }
            >
              {checkbooks.datePaidIsc &&
                new Date(checkbooks.datePaidIsc).toDateString()}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('RUNNER_NUMBER', {
                  id: checkbooks.id,
                  updatedText: checkbooks.runnerNumber,
                })
              }
            >
              {checkbooks.runnerNumber}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('MASTER', {
                  id: checkbooks.id,
                  updatedText: checkbooks.houseAwb,
                })
              }
            >
              {' '}
              {checkbooks.houseAwb}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('FLIGHT_CODE', {
                  id: checkbooks.id,
                  updatedText: checkbooks.flightCode,
                })
              }
            >
              {' '}
              {checkbooks.flightCode}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('FLIGHT_STATUS', {
                  id: checkbooks.id,
                  updatedText: checkbooks.flightStatus,
                })
              }
            >
              {' '}
              {checkbooks.flightStatus}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('ARRIVAL_DATE', {
                  id: checkbooks.id,
                  updatedDate: checkbooks.arrivalDate,
                })
              }
            >
              {' '}
              {checkbooks.arrivalDate &&
                new Date(checkbooks.arrivalDate).toDateString()}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('PICKEDUP_DATE', {
                  id: checkbooks.id,
                  updatedDate: checkbooks.pickedUpDate,
                })
              }
            >
              {' '}
              {checkbooks.pickedUpDate &&
                new Date(checkbooks.pickedUpDate).toDateString()}
            </td>
            <td
              className="border-grey-light items-center truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('IS_PICKUP_ORDER_DONE', {
                  id: checkbooks.id,
                  updatedBoolean: checkbooks.isPickupOrderDone,
                })
              }
            >
              {' '}
              {!checkbooks.isPickupOrderDone && (
                <div className="text-red-500 transition duration-200 hover:text-red-600 focus:outline-none">
                  <CloseFillIcon width={20} />
                </div>
              )}
              {checkbooks.isPickupOrderDone && (
                <div className="text-accent transition duration-200 hover:text-accent-hover focus:outline-none">
                  <CheckMarkCircle width={20} />
                </div>
              )}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('BAGS', {
                  id: checkbooks.id,
                  updatedText: checkbooks.bags,
                })
              }
            >
              {' '}
              {checkbooks.bags}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('WEIGHT', {
                  id: checkbooks.id,
                  updatedText: checkbooks.weight,
                })
              }
            >
              {' '}
              {checkbooks.weight}
            </td>
            <td
              className="border-grey-light  border p-3 hover:bg-gray-100"

            >
              <button
                type="button"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? 'Close' : 'Open'}
              </button>
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('IS_EXAM', {
                  id: checkbooks.id,
                  updatedBoolean: checkbooks.isExam,
                })
              }
            >
              {' '}
              {checkbooks.isExam && <Badge text="Yes" color={'bg-[#EF4444]'} />}
              {!checkbooks.isExam && <Badge text="No" color={'bg-accent'} />}
            </td>
            <td
              className="border-grey-light truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('NUMBER_OF_PIECES_EXAM', {
                  id: checkbooks.id,
                  updatedText: checkbooks.numberOfPiecesExam,
                })
              }
            >
              {' '}
              {checkbooks.numberOfPiecesExam}
            </td>
            <td
              className="border-grey-light max-w-[100px]  truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('REMARKS', {
                  id: checkbooks.id,
                  updatedText: checkbooks.remarks,
                })
              }
            >
              {' '}
              {checkbooks.remarks}
            </td>
            <td
              className="border-grey-light max-w-[100px] truncate border p-3 hover:bg-gray-100"
              onClick={() =>
                openCheckbookModal('LABEL', {
                  id: checkbooks.id,
                  updatedText: checkbooks.label,
                })
              }
            >
              {' '}
              {checkbooks.label}
            </td>
            <td className="border-grey-light  border p-3 hover:bg-gray-100">
              {checkbooks.manifest &&
                checkbooks.manifest.fileUpload.afterFileURL && (
                  <div className="flex flex-col gap-2">
                    <Link href={checkbooks.manifest.fileUpload.afterFileURL}>
                      <button className="inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400">
                        <svg
                          className="mr-2 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>
                        <span>Processed</span>
                      </button>
                    </Link>
                    <Link href={checkbooks.manifest.fileUpload.beforeFileURL}>
                      <button className="inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400">
                        <svg
                          className="mr-2 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>
                        <span>Original</span>
                      </button>
                    </Link>
                  </div>
                )}
            </td>
  
            <td
              className="border-grey-light cursor-pointer border bg-red-400 p-3 text-white hover:bg-gray-100 hover:font-medium hover:text-red-600"
              onClick={() =>
                openCheckbookModal('DELETE_CHECKBOOK', {
                  id: checkbooks.id,
                })
              }
            >
              Delete
            </td>
          </tr>
          </>
        );
      })
    );
  } else {
    return <div>No Checkbook available</div>
  }
  
  if(!checkbook) {
    return (<>No checkbook available</>)
  }
};

export default CheckbookListRow;
