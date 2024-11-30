"use client";

import useProject from "@/hooks/use-project";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import Image from "next/image";

const CommitLog = () => {
  const { projectId } = useProject();
  const { data: commits } = api.project.getCommits.useQuery({ projectId });
  return (
    <>
      <ul className="space-y-6">
        {commits?.map((commit, commitIdx) => {
          return (
            <li key={commit.id} className="relative flex gap-x-4">
              <div
                className={cn(
                  commitIdx === commits.length - 1 ? "h-6" : "-bottom-6",
                  "absolute left-0 top-0 flex w-8 justify-center",
                )}
              >
                <div className="w-px bg-gray-200"></div>
              </div>
              <>
              <Image
              src={commit.commitAuthorAvatar}
              alt={commit.commitAuthorName}
              height={40}
              width={40}
              className="rounded-full shrink-0 relative mt-3 size-8 flex-none bg-gray-50"
              />
              <div className="flex-auto rounded-md bg-white p-3 ring-1 ring-inset ring-gray-200">
                <p className="text-sm font-medium leading-6 text-gray-900">
                    {commit.commitMessage}
                </p>
              </div>
              </>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommitLog;
