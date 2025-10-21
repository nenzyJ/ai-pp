"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { syncUser } from "@/lib/actions/users";

function UserSync() {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await syncUser();
        } catch (error) {
          console.log("Error syncing user on client", error);
        }
      }
    };
    handleUserSync();
  }, [isLoaded, isSignedIn]);

  return null;
}

export default UserSync;
