import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Receipe {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

export default async function Home() {
  async function getreceipe(): Promise<Receipe[]> {
    const result = await fetch("http://localhost:4000/recipes");
    
    await new Promise<void>((resolve, reject) => {
      setTimeout(resolve,3000)
    })
    
    return result.json();
  }
  const recepies = await getreceipe();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recepies.map((recepie) => (
          <Card key={recepie.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${recepie.image}`} alt="receipe img" />
                <AvatarFallback>{recepie.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recepie.title}</CardTitle>
                <CardDescription>{recepie.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recepie.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Receipe</Button>
              {recepie.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
