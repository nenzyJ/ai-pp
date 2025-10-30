import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CalendarIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const NoNextAppointments = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className='flex items-center gap-2'>
                <CalendarIcon className='size-5 text-primary'/>
                Next Appointment
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className='text-center py-8 text-muted-foreground'>
                <div className='flex items-center justify-center mx-auto mb-4 w-16 h-16 bg-muted/30 rounded-2xl'>
                    <CalendarIcon className='size-8 opacity-50'/>
                </div>
                <p className='text-sm mb-3'>No upcoming appointments</p>
                <Link href="/appointments">
                    <Button size="sm" variant="outline" className='w-full'>
                         Schedule Your Next Visit
                    </Button>
                </Link>
            </div>
        </CardContent>
    </Card>
  )
}

export default NoNextAppointments
