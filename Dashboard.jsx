function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
    </div>
  );
}

export default Dashboard;
