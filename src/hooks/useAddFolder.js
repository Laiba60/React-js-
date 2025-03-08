import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";
import { getAuthHeaders } from "../utils/header.js";

const addFolder = async (folderName) => {
  const response = await api.post("/folders/", { title: folderName }, {
     headers: getAuthHeaders() 
  });
  return response.data;
};

export const useAddFolder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addFolder,
    onSuccess: () => {
      queryClient.invalidateQueries(["folders"]);
    },
  });
};
