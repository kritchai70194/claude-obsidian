# Monoliths are not dinosaurs

Author: Werner Vogels
URL: https://www.allthingsdistributed.com/2023/05/monoliths-are-not-dinosaurs.html
Date: May 05, 2023 (801 words)
Fetched: 2026-05-28 via WebFetch (defuddle returned skeleton only)

---

> Building evolvable software systems is a strategy, not a religion. And revisiting your architectures with an open mind is a must.

Software architectures are not like the architectures of bridges and houses. After a bridge is constructed, it is hard, if not impossible, to change the way it was built. Software is quite different. Once we are running our software, we may get insights about our workloads that we did not have when it was designed. And, if we had realized this at the start, and we chose an evolvable architecture, we could change components without impacting the customer experience. My rule of thumb has been that with every order of magnitude of growth you should revisit your architecture, and determine whether it can still support the next order level of growth.

A great example can be found in two insightful blog posts written by Prime Video's engineering teams. The first describes how Thursday Night Football live streaming is built around a distributed workflow architecture. The second is a recent post that dives into the architecture of their stream monitoring tool, and how their experience and analysis drove them to implement it as a monolithic architecture. There is no one-size-fits-all. We always urge our engineers to find the best solution, and no particular architectural style is mandated. "If you hire the best engineers, you should trust them to make the best decisions."

I always urge builders to consider the evolution of their systems over time and make sure the foundation is such that you can change and expand them with the minimum number of dependencies. Event-driven architectures (EDA) and microservices are a good match for that. However, if there are a set of services that always contribute to the response, have the exact same scaling and performance requirements, same security vectors, and most importantly, are managed by a single team, it is a worthwhile effort to see if combining them simplifies your architecture.

Evolvable architectures are something that we've taken to heart at Amazon from the very start. Re-evaluating and re-architecting our systems to meet the ever-increasing demands of our customers. You can go all the way back to 1998, when a group of senior engineers penned the Distributed Computing Manifesto, which put the wheels in motion to move Amazon from a monolith to a service-oriented architecture. In the decades since, things have continued to evolve, as we moved to microservices, then microservices on shared infrastructure, and as I spoke about at re:Invent, EDA.

The shift to decoupled self-contained systems was a natural evolution. Microservices are smaller and easier to manage, they can use tech stacks that meet their business requirements, deployment times are shorter, developers can ramp up quicker, new components can be deployed without impacting the entire system, and most importantly, if a deployment takes down one microservice, the rest of the system continues to work. When the service comes back online it replays the events it's missed and executes. It's what we call an evolvable architecture. It can easily be changed over time. You start with something small and allow it to grow in complexity to match your vision.

Amazon S3 is a wonderful example of a service that has expanded from a few microservices since its launch in 2006 to over 300 microservices, with added storage methodologies, policy mechanisms, and storage classes. This was only possible because of the evolvability of the architecture, which is a critical consideration when designing systems.

However, I want to reiterate, that "there is not one architectural pattern to rule them all". How you choose to develop, deploy, and manage services will always be driven by the product you're designing, the skillset of the team building it, and the experience you want to deliver to customers (and of course things like cost, speed, and resiliency). For example, a startup with five engineers may choose a monolithic architecture because it is easier to deploy and doesn't require their small team to learn multiple programming languages. Their needs are fundamentally different than an enterprise with dozens of engineering teams, each managing an individual subservice. And that's okay. It's about choosing the right tools for the job.

There are few one-way doors. Evaluating your systems regularly is as important, if not more so, than building them in the first place. Because your systems will run much longer than the time it takes to design them. So, monoliths aren't dead (quite the contrary), but evolvable architectures are playing an increasingly important role in a changing technology landscape, and it's possible because of cloud technologies.

Now, go build!
