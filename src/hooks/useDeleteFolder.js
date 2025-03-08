import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";
import { getAuthHeaders } from "../utils/header.js";

const deleteFolder = async (folderId) => {
  await api.delete(`/folders/${folderId}/`, {
    headers: getAuthHeaders() 
  });
};

export const useDeleteFolder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries(["folders"]);
    },
  });
};
