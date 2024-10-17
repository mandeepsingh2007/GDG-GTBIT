import EventsBanner from '@/components/events/Banner';
import EventsCard from '@/components/events/Card';
import React from 'react';
import { EVENTS } from '@/constants/events';

function Index() {
 

  const now = Date.now();
  const upcomingEvents = EVENTS.filter(event => new Date(event.date).getTime() > now);
  const recentEvents = EVENTS.filter(event => new Date(event.date).getTime() <= now);

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <EventsBanner />



      <div className="flex flex-col items-center my-10 md:my-20">
        <h2 className="text-4xl font-bold text-white mb-4 w-[70vw]">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[70vw]">
            {upcomingEvents.map(event => (
              <EventsCard key={event.id} title={event.title} description={event.description} link={event.link} date={event.date} image={event.image} />
            ))}
          </div>
        ) : (
          <p className="text-white">None yet! Check back soon or follow us on social media to stay updated! 🤗</p>
        )}

        <h2 className="text-4xl font-bold text-white my-10 w-[70vw]">Recent Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[70vw]">
          {recentEvents.map(event => (
            <EventsCard key={event.id} title={event.title} description={event.description} link={event.link} date={event.date} image={event.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
