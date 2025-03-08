import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";
import { getAuthHeaders } from "../utils/header.js";

const updateFolder = async ({ folderId, title }) => {
  const response = await api.put(`/folders/${folderId}/`, { title }, {
     headers: getAuthHeaders() 
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
