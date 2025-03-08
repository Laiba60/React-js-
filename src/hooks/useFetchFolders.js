import { useQuery } from "@tanstack/react-query";
import api from "../api";

const fetchFolders = async () => {
  const response = await api.get("/folders");
  return response.data.results || [];
};

export const useFetchFolders = () => {
  return useQuery({
    queryKey: ["folders"],
    queryFn: fetchFolders,
  });
};
