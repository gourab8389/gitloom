"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";

type formInput = {
    repoUrl: string;
    projectName: string;
    githubToken?: string;
}

const CreateProjectForm = () => {
    const { register, handleSubmit, reset } = useForm<formInput>();

    function onSubmit(data: formInput) {
        window.alert(JSON.stringify(data, null, 2));
        return true;
    }

  return (
    <div className="flex items-center gap-12 h-full justify-center">
      <Image src={"/create/create-form-image.jpg"} alt="Create Project" width={250} height={250} className="shrink-0 rounded-lg"/>
      <div className="">
        <div className="">
            <h1 className="font-semibold text-2xl">
                Link your Github repository
            </h1>
            <p className="text-sm text-muted-foreground">
                Enter the URL of your Github repository to get started.
            </p>
        </div>
        <div className="h-4"></div>
        <div className="">
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
                required
                />
                <Button type="submit" className="mt-2 w-fit">
                    Create Project
                </Button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProjectForm;
