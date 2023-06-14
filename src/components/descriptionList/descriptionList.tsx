import React from "react";
import { useDescriptionList, useDescriptionsMapMutation } from "@/data/description-list";
import Loader from "../ui/loader/loader";
import ErrorMessage from "../ui/error-message";
import DescriptionListTable from "./descriptionList-table";
import { CustomDescription } from "@/types";

export default function DescriptionList() {
  const { descriptionList: descriptionList, loading: fetchingDescriptions, error } = useDescriptionList();

  const { mutate: updateDescriptionMapping, isLoading: updating } =
  useDescriptionsMapMutation();
  
  const updateDataHandler = (updatedDescriptions: CustomDescription[]) => {
    updateDescriptionMapping(updatedDescriptions)
  }

  if (fetchingDescriptions || updating) return <Loader text="Loading descriptions" />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <DescriptionListTable
      updateHandler={updateDataHandler}
      descriptionList={descriptionList}
    />
  )
}
