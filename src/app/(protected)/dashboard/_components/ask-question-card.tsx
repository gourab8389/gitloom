"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import useProject from "@/hooks/use-project";

const AskQuestionsCard = () => {
    const { project } = useProject();
  return (
    <>
    <Card>
        <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
        </CardHeader>
        <CardContent>
            <form>
                <Textarea placeholder="Which file should i edit to change the home page?"/>
                <div className="h-4"></div>
                <Button type="submit">
                    Ask Dionysus!
                </Button>
            </form>
        </CardContent>
    </Card>
    </>
  )
}

export default AskQuestionsCard;
