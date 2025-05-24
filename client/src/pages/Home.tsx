import React from "react";
{
  /* make look not so awful, like a better color scheme*/
}

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-6xl text-center p-5">Start Your Goals Today</h1>

        <p className="text-2xl text-center p-10">
          Track your habits and achieve your goals with our simple and effective
          habit tracker.
        </p>

        <div className="flex flex-row justify-center p-10">
          <div className="bg-amber-300 p-20">
            <h1 className="text-6xl text-center">How it works</h1>
          </div>
          <div className="w-screen bg-gray-200 p-20">
            <ol className="text-center text-4xl space-y-4">
              <li>1. Create an account and log in.</li>
              <li>2. Add your habits and set your goals.</li>
              <li>3. Track your progress and stay motivated!</li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col p-20 justify-between">
          <h2 className="text-4xl text-center pb-2">Features</h2>
          <ul className="text-center">
            <li>✔️ Simple and intuitive interface.</li>
            <li>✔️ Set daily, weekly, or monthly goals.</li>
            <li>✔️ Track your progress with charts and graphs.</li>
            <li>✔️ Get reminders to stay on track.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
