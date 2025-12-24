import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(data),
      }).then(res => res.json()),
    onSuccess: () => qc.invalidateQueries(["products"]),
  });
};

export const useUpdateProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      fetch("/api/products", {
        method: "PUT",
        body: JSON.stringify(data),
      }).then(res => res.json()),
    onSuccess: () => qc.invalidateQueries(["products"]),
  });
};

export const useDeleteProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) =>
      fetch("/api/products", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      }),
    onSuccess: () => qc.invalidateQueries(["products"]),
  });
};
