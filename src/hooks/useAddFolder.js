import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";

const addFolder = async (folderName) => {
  const response = await api.post("/folders/", { title: folderName }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      "Content-Type": "application/json",
    },
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
