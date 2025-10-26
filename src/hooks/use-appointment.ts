"use client";
import {
  bookAppointment,
  getAppointments,
  getBookedTimeSlots,
  getUserAppointments,
  updateAppointmentStatus,
} from "@/lib/actions/appointments";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAppointments() {
  const result = useQuery({
    queryKey: ["getAppointments"],
    queryFn: getAppointments,
  });

  return result;
}

export function useBookedTimeSlots(doctorId: string, date: string) {
  return useQuery({
    queryKey: ["getBooksTimeSlot"],
    queryFn: () => getBookedTimeSlots(doctorId!, date),
    enabled: !!doctorId && !!date,
  });
}

export function useBookedAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserAppointments"] });
    },
    onError: (error) => console.error("Failed to book appointment:", error),
  });
}

export function useUserAppointments() {
  const result = useQuery({
    queryKey: ["getUserAppointments"],
    queryFn: getUserAppointments,
  });

  return result;
}
export function useUpdateAppointmentStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAppointmentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAppointments"] });
    },
    onError: (error) => console.error("Failed to update appointment:", error),
  });
}
