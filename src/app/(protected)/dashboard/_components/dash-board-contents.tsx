"use client";

import useProject from "@/hooks/use-project";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const DashboardPageContents = () => {
  const { project } = useProject();
  return (
    <div>
        {project?.id}
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        {/* git link */}
        <div className="w-fit rounded-md bg-primary px-4 py-3">
          <div className="item-center flex">
            <Github className="size-5 text-white" />
            <div className="ml-2">
              <p className="text-sm font-medium text-white">
                This project is linked to{" "}
                <Link
                  href={project?.githubUrl ?? ""}
                  className="inline-flex items-center text-white/80 hover:underline"
                >
                  {project?.githubUrl ?? "No repository"}
                  <ExternalLink className="ml-1 size-4" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="h-4"></div>
        <div className="flex items-center gap-4">
          TeamMembers InviteButton ActiveButton
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
          <div className="">AskQuestionsCard</div>
          <div className="">MeetingCard</div>
        </div>
      </div>

      <div className="mt-8">CommitLog</div>
    </div>
  );
};

export default DashboardPageContents;
