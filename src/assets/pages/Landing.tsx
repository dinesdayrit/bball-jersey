import Header from "../components/Header";
import List from "../components/List";

export default function Landing() {
  return (
    <div className="flex flex-col items-center bg-blue-950 h-screen gap-4 overflow-auto p-2">
        <Header />
        <List />
    </div>

  )
}
