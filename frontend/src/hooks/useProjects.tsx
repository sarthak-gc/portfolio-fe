import { useEffect, useState } from "react";

import { type ProjectProps } from "@/Pages/Projects";
import axios, { AxiosError } from "axios";

const useProjects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://for-cname.justfordiscord456.workers.dev/projects/details/all"
        );
        setProjects(response.data.data);
      } catch (err) {
        if (err instanceof AxiosError) setError(err.response?.data);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjects;
