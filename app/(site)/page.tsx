'use client'
import Box from '@/components/Box';
import Container from '@/components/Container'
import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';

import { Button } from "@/components/ui/button";
import { useState } from 'react';


export default function Home() {

  const [disabled, setDisabled] = useState(false);
  const updateData = async () => {
    try {
      setDisabled(true);
      const response = await fetch("/api/players");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <Container className="">
      <Navbar />
      <div className='flex gap-x-3 h-full'>
        <SideBar />
        <div className='w-full'>
          <Box className="mb-4">
            <div className="flex justify-between">
              <h1 className="text-purple-800 m-4 text-2xl font-semibold">
                Welcome Back
              </h1>
              <Button
                disabled={disabled}
                className={`
              m-4
              disabled:cursor-not-allowed
              disabled:opacity-50
              `}
                onClick={() => {
                  updateData();
                }}
                variant="default"
              >
                {disabled ? "Updating Data..." : "Update Date"}
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </Container>
  );
}
