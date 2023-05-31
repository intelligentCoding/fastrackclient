import { Table } from '@/components/ui/table';
import ActionButtons from '@/components/common/action-buttons';

import { Checkbook } from '@/types';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  CheckbookModalProvider,
  useCheckbookModalAction,
} from '../ui/checkbook-modal/modal.context';
import Badge from '../ui/badge/badge';
import { CloseFillIcon } from '../icons/close-fill';
import { CheckMarkCircle } from '../icons/checkmark-circle';
import cn from 'classnames';
import Link from 'next/link';

type IProps = {
  checkbook: Checkbook[] | undefined;
};

const TableWrapper = styled.div`
  .innerWrapper {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
`;
const tableheaders = [
  'PAY',
  'ISC',
  'PAIDTO',
  'DATE',
  'RUNNUMBER',
  'MASTER',
  'FLIGHT',
  'STATUS',
  'Arrival DATE',
  'PICKUP DATE',
  'PICKUP Order',
  'BAGS',
  'weight',
  'ULD/AKE/PMC',
  'EXAM',
  'Exam Pieces #',
  'REMARKS',
  'label?',
  'Manifest',
  'Actions',
];
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

const CheckbookList = ({ checkbook }: IProps) => {
  // const { data, paginatorInfo } = orders! ?? {};
  const router = useRouter();
  const { t } = useTranslation();
  const rowExpandable = (record: any) => record.children?.length;

  //   const [sortingObj, setSortingObj] = useState<{
  //     sort: SortOrder;
  //     column: string | null;
  //   }>({
  //     sort: SortOrder.Desc,
  //     column: null,
  //   });

  // const onHeaderClick = (column: string | null) => ({
  //   onClick: () => {
  //     onSort((currentSortDirection: SortOrder) =>
  //       currentSortDirection === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc
  //     );
  //     onOrder(column!);

  //     setSortingObj({
  //       sort:
  //         sortingObj.sort === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc,
  //       column: column,
  //     });
  //   },
  // });
  const { openCheckbookModal } = useCheckbookModalAction();
  return (
    <div className="mb-6  overflow-scroll rounded shadow">
      <TableWrapper>
        <div className=".innerWrapper flex">
          <table className="flex-no-wrap my-5 flex w-full flex-row overflow-hidden rounded-lg sm:bg-white sm:shadow-lg">
            <thead className="text-white">
              <tr className="flex-no wrap mb-2 flex flex-col rounded-l-lg bg-teal-400 sm:mb-0 sm:table-row sm:rounded-none">
                {tableheaders.map((header) => (
                  <th className="p-3 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {checkbook?.map((checkbooks) => {
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
                const rowClass = cn(
                  'flex-no mb-2 flex flex-col sm:mb-0 sm:table-row',
                  {
                    'bg-[#BCF0DA]': isArrivalToday,
                    'bg-[#F17EB8]': isArrivedYesterdayNotPickedup,
                  }
                );
                return (
                  <tr className={rowClass} key={checkbooks.id}>
                    <td
                      className="border-grey-light border p-3 hover:bg-gray-100"
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
                      onClick={() =>
                        openCheckbookModal('ULD', {
                          id: checkbooks.id,
                          updatedText: checkbooks.uld,
                        })
                      }
                    >
                      <div className="flex flex-col gap-1">
                        {checkbooks.uld?.map((uld) => {
                          const bgColor = uld.isPure
                            ? 'bg-[#84cc16]'
                            : 'bg-[#ef4444]';
                          return <Badge text={uld.UldNumber} color={bgColor} />;
                        })}
                      </div>
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
                      {checkbooks.isExam && (
                        <Badge text="Yes" color={'bg-[#EF4444]'} />
                      )}
                      {!checkbooks.isExam && (
                        <Badge text="No" color={'bg-accent'} />
                      )}
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
                      <div className="flex flex-col gap-2">
                        {checkbooks.manifest &&
                          checkbooks.manifest.fileUpload.afterFileURL && (
                            <Link
                              href={checkbooks.manifest.fileUpload.afterFileURL}
                            >
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
                          )}
                        {checkbooks.manifest &&
                          checkbooks.manifest.fileUpload.csvFileUrl && (
                            <Link
                              href={checkbooks.manifest.fileUpload.csvFileUrl}
                            >
                              <button className="inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400">
                                <svg
                                  className="mr-2 h-4 w-4 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                </svg>
                                <span>Processed CSV</span>
                              </button>
                            </Link>
                          )}
                        {checkbooks.manifest &&
                          checkbooks.manifest.fileUpload.beforeFileURL && (
                            <Link
                              href={
                                checkbooks.manifest.fileUpload.beforeFileURL
                              }
                            >
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
                          )}
                      </div>
                    </td>

                    <td
                      className="border-grey-light cursor-pointer border  p-3 text-white hover:bg-gray-100">
                      <button
                        type="button"
                        onClick={() =>
                          openCheckbookModal('DELETE_CHECKBOOK', {
                            id: checkbooks.id,
                          })
                        }
                        className="bg-red-400 hover:bg-red-600 focus:bg-red-600 active:bg-primary-700 mb-2 block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="bg-blue-400 border-primary text-primary hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-primary-600 active:border-primary-700 active:text-primary-700 mb-2 block w-full rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TableWrapper>
    </div>
  );
};

export default CheckbookList;
