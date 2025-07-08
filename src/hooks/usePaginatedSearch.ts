/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

interface UsePaginatedSearchProps<T> {
  searchFn: (search: string) => Promise<{ results: any[]; total: number }>;
  fetchFn: (
    offset: number,
    limit: number
  ) => Promise<{ results: any[]; total: number }>;
  transformFn: (item: any) => T;
  limit?: number;
}

export function usePaginatedSearch<T>({
  searchFn,
  fetchFn,
  transformFn,
  limit = 10,
}: UsePaginatedSearchProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (search) {
          const { results, total } = await searchFn(search);
          setItems(results.map(transformFn));
          setTotal(total);
          setPage(1);
        } else {
          const offset = (page - 1) * limit;
          const { results, total } = await fetchFn(offset, limit);
          setItems(results.map(transformFn));
          setTotal(total);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page]);

  return {
    items,
    search,
    setSearch,
    page,
    setPage,
    total,
    loading,
    error,
  };
}
