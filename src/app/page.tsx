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

// Import the data directly from the JSON file
import data from "../_data/db.json";

interface Receipe {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

// Simulate a delay function
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  // Simulate data fetching with a delay
  await delay(3000); // 3-second delay
  const recepies: Receipe[] = data.recipes;

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recepies.map((recepie) => (
          <Card key={recepie.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${recepie.image}`} alt="recipe img" />
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
              <Button>View Recipe</Button>
              {recepie.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
