// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

/**
 * Custom Hook: useProducts
 * Fetch products from Supabase with optional limit
 * @param {number} limit - عدد المنتجات المطلوبة (افتراضي 8)
 * @returns {Object} { products, loading, error, refetch }
 */
export function useProducts(limit = 8) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true })
      .limit(limit);

    if (error) {
      console.error("Supabase fetch error:", error);
      setError(error);
      setProducts([]);
    } else {
      setProducts(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [limit]);

  return { products, loading, error, refetch: fetchProducts };
}
