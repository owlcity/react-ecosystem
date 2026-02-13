import { Await, createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/deferred")({
  component: DeferredComponent,
});

function DeferredComponent() {
  const { fastData, deferredSlowData } = Route.useLoaderData();

  return (
    <div className="space-y-4">
      <div>
        <h2>Fast Data</h2>
        <ul className="list-disc pl-4">
          {[
            ...fastData,
            { id: "i-do-not-exist", title: "Non-existent Post" },
          ].map((post) => {
            return (
              <li key={post.id} className="whitespace-nowrap">
                <div>{post.title.substring(0, 20)}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2>Deferred Slow Data</h2>
        <Await promise={deferredSlowData} fallback={<div>Loading...</div>}>
          {(slowData) => (
            <ul className="list-disc pl-4">
              {[
                ...slowData,
                { id: "i-do-not-exist", title: "Non-existent Post" },
              ].map((post) => {
                return (
                  <li key={post.id} className="whitespace-nowrap">
                    <div>{post.title.substring(0, 20)}</div>
                  </li>
                );
              })}
            </ul>
          )}
        </Await>
      </div>
    </div>
  );
}
