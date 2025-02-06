"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ShowModal({ show }) {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="max-h-[90vh] max-w-[85vw] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            {show.name}
          </DialogTitle>
          <DialogDescription className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={show.poster?.src}
                  alt={show.name}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  {show.description}
                </p>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cast & Crew</h3>
                  <ul className="flex flex-wrap gap-2">
                    {show.cast_and_crew.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {item.name}
                        {index !== show.cast_and_crew.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
