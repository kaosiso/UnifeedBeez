// CopilotWidget.tsx

'use client';
import React, { useState } from 'react';
import CopilotHeader, { BreadcrumbItem } from './components/CopilotHeader';
import Sidebar from './components/sidebar'; // Import the new Sidebar
import Chat from './components/chat';     // Import the Chat component

const initialBreadcrumbs: BreadcrumbItem[] = [
  { id: '1', label: 'Business Identity', isActive: true, isComplete: true },
  { id: '2', label: 'Team members', isActive: false, isComplete: false },
  { id: '3', label: 'Channels', isActive: false, isComplete: false },
  { id: '4', label: 'Fall-back Logic', isActive: false, isComplete: false },
  { id: '5', label: 'AI Assitant', isActive: false, isComplete: false },
  { id: '6', label: 'Automation', isActive: false, isComplete: false },
];

const CopilotWidget: React.FC = () => {
  const [breadcrumbs] = useState<BreadcrumbItem[]>(initialBreadcrumbs);

  const handleExit = () => {
    console.log('Exiting Copilot workflow...');
  };

  // We'll use the label from the currently active breadcrumb for the chat header
  const activeBreadcrumb = breadcrumbs.find(b => b.isActive) || { label: 'Workflow' };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header (Exit button and Breadcrumbs) */}
      <CopilotHeader breadcrumbs={breadcrumbs} onExit={handleExit} />

      {/* Main Layout: Sidebar + Chat Content */}
      <div className="flex flex-grow gap-6 overflow-hidden">
        {/* 1. Sidebar Component (Dark Background) */}
        <Sidebar />

        {/* 2. Chat Component (Light Content Area) */}
        <div className="flex-grow">
          <Chat 
            currentSectionLabel={activeBreadcrumb.label} 
          />
        </div>
      </div>
    </div>
  );
};

export default CopilotWidget;