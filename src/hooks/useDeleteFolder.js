import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";

const deleteFolder = async (folderId) => {
  await api.delete(`/folders/${folderId}/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
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
