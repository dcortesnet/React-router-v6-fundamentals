import React from "react";
import { useParams } from "react-router-dom";

export function UserDetailPage() {
  const params = useParams();
  return <div>UserDetailPage - ID: {params.id}</div>;
}
