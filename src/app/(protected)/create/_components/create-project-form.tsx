"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useRefetch from "@/hooks/use-refetch";
import { api } from "@/trpc/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type formInput = {
    repoUrl: string;
    projectName: string;
    githubToken?: string;
}

const CreateProjectForm = () => {
    const { register, handleSubmit, reset } = useForm<formInput>();
    const createProject = api.project.createProject.useMutation();
    const refetch = useRefetch();

    function onSubmit(data: formInput) {
        createProject.mutate({
            name: data.projectName,
            githubUrl: data.repoUrl,
            githubToken: data.githubToken
        }, {
            onSuccess: () => {
                toast.success("Project created successfully");
                refetch();
                reset();
            },
            onError: () => {
                toast.error("Failed to create project");
            }
        })
        return true;
    }

  return (
    <div className="flex md:flex-row flex-col items-center md:gap-12 gap-6 h-full justify-center">
      <Image src={"/create/create-form-image.jpg"} alt="Create Project" width={250} height={250} className="shrink-0 rounded-lg hidden md:block"/>
      <Image src={"/create/create-form-image.jpg"} alt="Create Project" width={400} height={400} className="shrink-0 rounded-lg md:hidden"/>
      <div>
        <div>
            <h1 className="font-semibold text-2xl">
                Link your Github repository
            </h1>
            <p className="text-sm text-muted-foreground">
                Enter the URL of your Github repository to get started.
            </p>
        </div>
        <div className="h-4"></div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <Input
                {...register("projectName", {required: true})}
                placeholder="Project Name"
                required
                />
                <Input
                {...register("repoUrl", {required: true})}
                placeholder="Github URL"
                type="url"
                required
                />
                <Input
                {...register("githubToken")}
                placeholder="Github Token (Optional)"
                />
                <Button type="submit" className="mt-2 w-fit" disabled={createProject.isPending}>
                    Create Project
                </Button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProjectForm;
