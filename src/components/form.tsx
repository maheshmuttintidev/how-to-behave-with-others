'use client';
import React, { useState } from 'react';

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { responses } from '@/lib/responses';

const behaviorSchema = z.object({
  behavior: z.enum([
    "aggressive", "sarcastic", "rude", "angry", "mad", "unwise", "lazy", "loving", "peaceful", 
    "jealous", "boastful", "fearful", "proud", "humble", "forgiving", "judgmental", "sympathetic",
    "gossiping", "dishonest", "impatient", "patient", "selfish", "generous", "arrogant", "respectful", 
    "kind", "insulting", "encouraging", "deceptive", "trustworthy", "lustful", "faithful", "disobedient", 
    "obedient", "anxious", "stubborn", "resentful", "manipulative", "unfaithful", "greedy", "ungrateful", 
    "harsh", "complaining", "careless", "foolish", "cautious"
  ]),
});


export  function Form() {

    const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    try {
      behaviorSchema.parse({ behavior: selected });
      setError("");
      setResult(responses[selected as keyof typeof responses].message);
    } catch {
      setError("Select a valid option.");
      setResult("");
    }
  };
  return (
    <>
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">
        {`Person's Behavior`}
      </label>
      <Select onValueChange={(val) => setSelected(val)}>
        <SelectTrigger className="w-full border border-gray-300 rounded px-4 py-2">
          <SelectValue placeholder="Select a behavior" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Behaviors</SelectLabel>
            {responses && Object.keys(responses).map((behavior) => (
              <SelectItem key={behavior} value={behavior}>
                {behavior.charAt(0).toUpperCase() + behavior.slice(1)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    {error && (
      <p className="text-red-500 text-sm mb-4">{error}</p>
    )}

    <Button
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200"
      onClick={handleSubmit}
    >
      Get Response
    </Button>

    {result && (
   <div className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-300 shadow-md transition-transform transform hover:scale-105">
    <div className="p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold text-blue-700 mb-2">
        Response:
      </h3>
      <div className="text-gray-800 leading-relaxed space-y-5">
        {result.split(". ").map((sentence, index) => (
          <p key={index} className="text-base">
            {sentence.split(".'").join(".'<br />").split("<br />").map((part, partIndex) => (
              <React.Fragment key={partIndex}>
                {part}
                {partIndex < sentence.split(".'").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        ))}
      </div>
    </div>

    <div className="mt-4 flex items-center justify-end">
      <span className="text-sm text-gray-500 italic">
        {`Generated on: ${new Date().toLocaleString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}`}
      </span>
    </div>
  </div>
)}

    </>
)
}
