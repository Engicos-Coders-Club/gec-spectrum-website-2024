"use client";
import React, { useEffect, useState } from "react";

interface Event {
  eventName: string;
}

interface Team {
  name: string;
  leader: string;
  paid: boolean;
}

const initialTeams: Team[] = [
  { name: "Team 1", leader: "Leader 1", paid: true },
  { name: "Team 2", leader: "Leader 2", paid: false },
  // Add more teams as needed
];

const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [event, setEvent] = useState<Event>("");
  const { slug } = params;

  useEffect(() => {
    fetch(
      `https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events/${slug}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Set the event state to the event object from the response data
        setEvent(data.event);
      })
      .catch((error) => {
        console.log("Fetch error: ", error);
      });
  }, []);

  useEffect(() => {
    // Load teams from localStorage if available, otherwise use initialTeams
    const savedTeams = localStorage.getItem("teams");
    setTeams(savedTeams ? JSON.parse(savedTeams) : initialTeams);
  }, []);

  const togglePaid = (index: number) => {
    // Create a new array with the updated team
    const newTeams = [...teams];
    newTeams[index].paid = !newTeams[index].paid;

    // Save the new array to the state and localStorage
    setTeams(newTeams);
    localStorage.setItem("teams", JSON.stringify(newTeams));
  };

  return (
    <div className="p-40">
      <h1 className="text-5xl justify-center">{event.eventName}</h1>

      <table className="table-auto mt-10 w-full justify-center items-center mb-10">
        <thead>
          <tr>
            <th className="px-4 text-2xl py-2">Team</th>
            <th className="px-4 text-2xl py-2">Team Leader</th>
            <th className="px-4 text-2xl py-2">Paid</th>
            <th className="px-4 text-2xl py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className="bg-white">
              <td className="border text-black px-4 py-2">{team.name}</td>
              <td className="border text-black px-4 py-2">{team.leader}</td>
              <td
                className={`border px-4 py-2 ${
                  team.paid
                    ? "bg-green-300 text-white"
                    : "bg-red-300 text-white"
                }`}
              >
                {team.paid ? "Yes" : "No"}
              </td>
              <td className="border bg-blue-300 text-black px-4 py-2">
                <button onClick={() => togglePaid(index)}>Toggle Paid</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
