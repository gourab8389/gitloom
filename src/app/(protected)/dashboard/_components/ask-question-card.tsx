"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import useProject from "@/hooks/use-project";
import React from "react";
import { askQuestion } from "../actions";
import { readStreamableValue } from "ai/rsc";
import { Loader2 } from "lucide-react";

const AskQuestionsCard = () => {
    const { project } = useProject();
    const [open, setOpen] = React.useState(false);
    const [question, setQuestion] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [filesReferences, setFilesReferences] = React.useState<{fileName: string; sourceCode: string; summary: string}[]>([]);
    const [ answer, setAnswer ] = React.useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!project?.id) return;
        
        setLoading(true);
        setOpen(true);
        setAnswer("");
        setFilesReferences([]);
      
        try {
          const { output, filesReferences } = await askQuestion(question, project.id);
          setFilesReferences(filesReferences);
      
          for await (const delta of readStreamableValue(output)) {
            if(delta){
              setAnswer((ans) => ans + delta);
            }
          }
        } catch (error) {
          console.error("Error asking question:", error);
          setAnswer("An error occurred while processing your question.");
        } finally {
          setLoading(false);
        }
      }

  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
        <DialogHeader>
            <DialogTitle>
                <p className="text-lg font-bold text-primary">GitLoom</p>
            </DialogTitle>
        </DialogHeader>
        {loading ? <Loader2 className="animate-spin size-6" color="violet"/> : answer}
        <h1>Files References</h1>
        {filesReferences.map(file => {
            return <span>{file.fileName}</span>
        })}
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
