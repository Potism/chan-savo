import { memo } from 'react';

function DemoContent() {
  return (
    <div>
      <img
        src="assets/images/fireex.jpg"
        alt="beach"
        style={{
          maxWidth: '420px',
          width: '100%',
        }}
        className="rounded-6"
      />
      <h1 className="py-16 font-semibold">Fire Extinguisher</h1>
      <h4 className="pb-12 font-medium">MOTOR BOAT</h4>
      <p>
      A fire extinguisher is a handheld active fire protection device usually filled with a dry or wet chemical used to extinguish or control small fires, often in emergencies. It is not intended for use on an out-of-control fire, such as one which has reached the ceiling, endangers the user (i.e., no escape route, smoke, explosion hazard, etc.), or otherwise requires the equipment, personnel, resources, and/or expertise of a fire brigade. Typically, a fire extinguisher consists of a hand-held cylindrical pressure vessel containing an agent that can be discharged to extinguish a fire. Fire extinguishers manufactured with non-cylindrical pressure vessels also exist but are less common.
      </p>
      
    </div>
  );
}

export default memo(DemoContent);
