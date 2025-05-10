import { useEffect, useState } from "react";

import axios, { AxiosError } from "axios";
import { type ProjectProps } from "@/Pages/Projects";

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
        console.log(response.data.data);
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
