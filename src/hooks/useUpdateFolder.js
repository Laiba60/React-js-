import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";

const updateFolder = async ({ folderId, title }) => {
  const response = await api.put(`/folders/${folderId}/`, { title }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      "Content-Type": "application/json",
    },
  });
  return response.data; 
};

export const useUpdateFolder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateFolder,
    onMutate: async (variables) => {
      
      await queryClient.cancelQueries(["folders"]);
      return variables;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["folders"]);
    },
  });
};
