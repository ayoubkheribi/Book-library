import { create } from "zustand";
import axios from "axios";
import { useEffect } from "react";

const useBookStore = create((set, get) => ({
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

  recommendations: [],
  setRecommendations: (recs) => set({ recommendations: recs }),
}));

// 🔥 Fetch recommended books on app load
export const useRecommendations = () => {
  const setRecommendations = useBookStore((state) => state.setRecommendations);
  const setError = useBookStore((state) => state.setError);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:fiction"
        );
        setRecommendations(response.data.items || []);
      } catch (err) {
        setError("Failed to load recommendations.");
      }
    };

    fetchRecommendations();
  }, [setRecommendations, setError]);
};

export default useBookStore;
