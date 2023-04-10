import Loading from "@/app/componets/Loading";
import Repo from "@/app/componets/Repo";
import RepoDirs from "@/app/componets/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";

function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Link href={"/code/repos"} className="">
        <FaArrowLeft />
      </Link>
      <Suspense fallback={<Loading />}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
