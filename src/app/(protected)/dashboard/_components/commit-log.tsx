"use client";

import useProject from "@/hooks/use-project";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CommitLog = () => {
  const { projectId, project } = useProject();
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
              className="rounded-full shrink-0 relative mt-4 size-8 flex-none bg-gray-50"
              />
              <div className="flex-auto rounded-md bg-white p-3 ring-1 ring-inset ring-gray-200">
                <div className="flex justify-between gap-x-4">
                    <Link href={`${project?.githubUrl}/commit/${commit.commitHash}`}target="_blank"
                    className="py-0.5 text-xs leading-5 text-gray-500 space-x-2"
                    >
                        <span className="font-bold text-gray-900">
                            {commit.commitAuthorName}
                        </span>
                        <span className="inline-flex items-center">
                            commited
                            <ExternalLink className="ml-1 size-4"/>
                        </span>
                    </Link>
                </div>
              <span className="font-semibold">
                {commit.commitMessage}
              </span>
              <pre className="mt-2 whitespace-pre-wrap text-sm leading-0 text-gray-500">
                {commit.summary}
              </pre>
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
