"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
        id="contact"
        className="font-semibold text-2xl text-center bg-transparent p-3 mb-3 text-white underline">
        Contact 
      </motion.h1>
    <section  className="flex   items-center  justify-center h-fit gap-2">
      <div className=" h-[550px]  hidden md:block  md:w-[40%]">
        <Image
          src={'/contact.webp'}
          width={400}
          height={700}
          className="object-cover w-full rounded-xl h-full"
        />
      </div>
      <Card className=" w-full md:w-[60%] max-w-lg  shadow-2xl rounded-xl bg-gray-900/40 border border-gray-200  p-5">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold  text-white">
            Message Me 
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400 mt-1">I’d love to hear from you!</p>
        </CardHeader>
        <CardContent>
          <form
            action="https://formsubmit.co/8124e234f66c2d29a9ccc15e940c0331"
            method="POST"
            className="space-y-5"
            target="_blank"
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
    </>
  );
}
