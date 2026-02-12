import { NotFoundError } from "@/api/posts";
import {
  ErrorComponent,
  type ErrorComponentProps,
} from "@tanstack/react-router";

export const PostErrorComponent = ({ error }: ErrorComponentProps) => {
  if (error instanceof NotFoundError) {
    return <div>{error.message}</div>;
  }

  return <ErrorComponent error={error} />;
};
