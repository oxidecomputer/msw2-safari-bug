import { useMutation } from "@tanstack/react-query";

function App() {
  const mutation = useMutation({
    mutationFn: () => fetch("/projects", { method: "DELETE" }),
  });

  return (
    <div>
      <p>Status: {mutation.status}</p>
      <p>Data: {JSON.stringify(mutation.data)}</p>
      <p>Error: {JSON.stringify(mutation.error)}</p>
      <button onClick={() => mutation.mutate()}>Hit endpoint</button>
    </div>
  );
}

export default App;
