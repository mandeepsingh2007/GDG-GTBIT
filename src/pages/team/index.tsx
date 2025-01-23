import TeamBanner from '@/components/team/banner';
import TeamCard from '@/components/team/teamCard';
import { TEAM } from '@/constants/team'; 
import React from 'react';

function Index() {
  const lead = TEAM.find(member => member.position.toLowerCase() === 'lead');
  const coreMembers = TEAM.filter(member => member.position.toLowerCase() !== 'lead');

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white">
      <TeamBanner />
      </div>
  );
}

export default Index;
