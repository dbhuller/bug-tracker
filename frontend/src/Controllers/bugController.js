import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];
  data.push(
    new bugModel({
      _id: 12345,
      details: "Crashes every few seconds",
      steps: "open application and it crashes, reload and repeat",
      version: "v2.0",
      assigned: "dbhuller",
      creator: "admin",
      priority: 1,
      time: "10:30",
    })
  );
  data.push(
    new bugModel({
      _id: 12346,
      details: "Server error on about page",
      steps: "click on about page, page produces server error on load",
      version: "v2.0",
      assigned: "dbhuller",
      creator: "admin",
      priority: 3,
      time: "10:35",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });

  return sorted;
}
