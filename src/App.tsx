export default function App() {
  const users = ["Gonzalez", "Carlos", "Luis", "Miguel", "Esteban", "Cossio"];
  const usersSorted = users.sort();
  const userByLetter = Object.groupBy(usersSorted, (user) => user[0]);
  console.log(userByLetter);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-700">
      <h1 className="text-gray-400">Inicial</h1>
    </div>
  );
}
