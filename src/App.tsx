import { useQuery } from "@tanstack/react-query";

function App() {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: () => fetch("/projects"),
    retry: false,
  });

  return (
    <div>
      <p>Status: {query.status}</p>
      <p>Data: {JSON.stringify(query.data)}</p>
      <p>Error: {JSON.stringify(query.error)}</p>
    </div>
  );
}

export default App;
