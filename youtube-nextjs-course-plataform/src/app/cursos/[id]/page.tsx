import { CourseHeader } from "@/components/course-header/CourseHeader";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.id,
    description: params.id,
  };
}

export default function PageCourseDetail({ params }: Props) {
  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px]">
        <CourseHeader />
      </div>
    </main>
  );
}
