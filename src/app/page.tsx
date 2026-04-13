import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="bg-blue-500 w-full py-6- px-4 shadow-md">
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            Trip Search
          </h1>
        </div>
      </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Card className="w-full max-w-sm mx-4">
          <input className="w-full max-w-sm mx-4" type="text" placeholder="Enter associate name, user ID, or trip ID." />
        </Card>

        <Card size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction><Button variant="outline">Card Action</Button></CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
