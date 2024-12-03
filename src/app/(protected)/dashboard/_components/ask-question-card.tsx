"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import useProject from "@/hooks/use-project";
import React from "react";

const AskQuestionsCard = () => {
    const { project } = useProject();
    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOpen(true);
    }

  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
        <DialogHeader>
            <DialogTitle>
                <h1 className="text-lg font-bold text-primary">GitLoom</h1>
            </DialogTitle>
        </DialogHeader>
        </DialogContent>
    </Dialog>
    <Card className="relative col-span-3">
        <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={onSubmit}>
                <Textarea 
                placeholder="Which file should i edit to change the home page?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                />
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
