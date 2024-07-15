import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';
import MatterWrap from 'matter-wrap';
import './Particle.css'; // You may adjust or remove this based on your actual styling needs

const Particle = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Use plugins
    Matter.use(MatterWrap, MatterAttractors);

    // Create engine
    const engine = Matter.Engine.create();
    
    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: Math.min(document.documentElement.clientWidth, window.innerWidth),
        height: Math.min(document.documentElement.clientHeight, window.innerHeight),
        wireframes: false,
      },
    });

    // Create runner
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Create demo scene
    const world = engine.world;
    world.gravity.scale = 0;

    // Create an attractive body
    

    const attractiveBody = Matter.Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      20,//increase the radius of circle
      {
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x + Math.random()) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y + Math.random()) * 1e-6,
              };
            },
          ],
        },
        render: {
          fillStyle: 'rgba(0, 0, 0, 1)', // Black background for cursor circle
          lineWidth: 2,
          strokeStyle: 'rgba(0, 0, 0, 1)', // White border for cursor circle
        },
      }
    );

    Matter.World.add(world, attractiveBody);

    // Add some bodies to be attracted
    

  // Add some bodies to be attracted
for (let i = 0; i <50; i++) {
  const body = Matter.Bodies.polygon(
    Matter.Common.random(0, render.options.width),
    Matter.Common.random(0, render.options.height),
    Matter.Common.random(3, 6), // Increase the number of sides
    
    Matter.Common.random() > 0.9 ? Matter.Common.random(50, 60) : Matter.Common.random(12, 20), // Increase the radius
    {
      render: {
        fillStyle: 'rgba(128, 128, 128, 0.1)', // Grey background with 50% opacity
        lineWidth: 2,//border-width
        strokeStyle: 'rgba(0, 0, 0, 0.5)', 
      },
    }
  );

  Matter.World.add(world, body);
}

//Add some bigger hexagone
for (let i = 0; i <50; i++) {
  const body = Matter.Bodies.polygon(
    Matter.Common.random(0, render.options.width),
    Matter.Common.random(0, render.options.height),
    Matter.Common.random(4, 6), // Increase the number of sides
    
    Matter.Common.random() > 0.9 ? Matter.Common.random(50, 60) : Matter.Common.random(25, 35), // Increase the radius
    {
      render: {
        fillStyle: 'rgba(128, 128, 128, 0.1)', // Grey background with 50% opacity
        lineWidth: 2,//border-width
        strokeStyle: 'rgba(0, 0, 0, 0.5)', 
      },
    }
  );

  Matter.World.add(world, body);
}




// Add some colored circles
for (let i = 0; i < 50; i++) {
  const body = Matter.Bodies.circle(  
    Matter.Common.random(0, render.options.width),
    Matter.Common.random(0, render.options.height),
    Matter.Common.random(1, 25), // Random radius
    {
      render: {
        fillStyle: getRandomColor(), // Random fill color
        lineWidth: 2, // Border width
        strokeStyle: 'rgba(0, 0, 0, 0.5)', // Black border with 50% opacity
      },
    }
  );

  Matter.World.add(world, body);
}

// Function to generate a random fill color
function getRandomColor() {
  const random = Math.random();
  if (random < 0.3) {
    // 30% chance of grey background
    return `rgba(128, 128, 128, ${Math.random() * (0.2 - 0.1) + 0.1})`; // Grey with random opacity
  } else if (random < 0.6) {
    // 30% chance of light blue background
    return `rgba(186, 242, 245, ${Math.random() * (0.2 - 0.1) + 0.1})`; // Light blue with random opacity
  } else {
    // 40% chance of yellow background
    return `rgba(255, 255, 255, ${Math.random() * (0.2 - 0.1) + 0.1})`; // Yellow with random opacity
  }
}
   
    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas);

    Matter.Events.on(engine, 'afterUpdate', () => {
      if (!mouse.position.x) {
        return;
      }

      // Smoothly move the attractor body towards the mouse
      Matter.Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.25,
        y: (mouse.position.y - attractiveBody.position.y) * 0.25,
      });
    });

    // Cleanup on component unmount
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, []);

  return <div ref={sceneRef} className="particle-container w-full"></div>;
};

export default Particle;
