"use client";

import FeatureSection from "@/components/FeatureSection";


const Features = () => {
  return (
    <div className="md:container md:mx-auto md:px-0 px-4">
      <FeatureSection
        title="Choose how you want to work"
        description="In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
        imgSrc="/img/working3.png"
        imgAlt="Person working on a laptop"
      />

      <FeatureSection
        title="Move faster with your Team tools"
        description="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        imgSrc="/img/foto1.png"
        imgAlt="Person working on a laptop"
        reverse
      />

      <FeatureSection
        title="Chats for your distributed teams"
        description="Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
        imgSrc="/img/foto2.png"
        imgAlt="Person working on a laptop"
      />
    </div>
  );
};

export default Features;
