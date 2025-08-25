import { create } from "zustand";

const useBookStore = create((set) => ({
  books: [],
  setBooks: (books) => set({ books }),

  query: "",
  setQuery: (query) => set({ query }),

  error: "",
  setError: (error) => set({ error }),

  loading: false,
  setLoading: (loading) => set({ loading }),

  filter: "all",
  setFilter: (filter) => set({ filter }),
}));

export default useBookStore;
