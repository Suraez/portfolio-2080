export default async function Example() {
    const response = await fetch("/api/test");
    const data = await response.json();
    console.log(data);
  
  return (
    <div className="relative pb-16 mt-12">
      <div className="pt-16 space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="flex items-center justify-center">
          <div>
          <h2 className="text-4xl">This page is under the construction  🚧</h2>
          <div className="flex justify-center">
          <h3 className="text-2xl">Stay Tuned!</h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
