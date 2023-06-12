import { CustomDescription, Description, QueryOptions } from "@/types";
import { crudFactory } from "./curd-factory";
import { API_ENDPOINTS } from "./api-endpoints";
import { HttpClient } from "./http-client";

export const descriptionClient = {
    ...crudFactory<Description, QueryOptions, unknown>(
      API_ENDPOINTS.DESCRIPTIONS_ALL
    ),
    updateDescriptionsMapping(updatedDescriptions: CustomDescription[]) {
      return HttpClient.put<CustomDescription[]>(`${API_ENDPOINTS.COMMODITY_MAPPING}/update-commodity-mapping`, updatedDescriptions);
    }
  };
  