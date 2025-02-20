"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="flex items-center bg-transparent justify-center min-h-screen px-4">
      <Card className="w-full max-w-lg  shadow-2xl rounded-xl border border-gray-200  p-5">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold underline text-white">
            Contact 
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400 mt-1">I’d love to hear from you!</p>
        </CardHeader>
        <CardContent>
          <form
            action="https://formsubmit.co/8124e234f66c2d29a9ccc15e940c0331"
            method="POST"
            className="space-y-5"
            target="_template"
          >
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Shyam Sundhar"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Shyam@example.com"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                Your Message
              </label>
              <Textarea
                name="message"
                placeholder="Type your message here..."
                rows={4}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

             {/* Mail format  */}
             <Input type="hidden" name="_template" value="table"></Input>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-lg text-lg font-medium shadow-md transition-all duration-300 hover:bg-gray-700 focus:ring-2 focus:ring-white"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
