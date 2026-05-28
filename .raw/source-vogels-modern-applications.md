# Modern applications at AWS

Author: Werner Vogels
URL: https://www.allthingsdistributed.com/2019/08/modern-applications-at-aws.html
Date: August 28, 2019
Fetched: 2026-05-28 via WebFetch (defuddle returned skeleton only)

---

Innovation has always been part of the Amazon DNA, but about 20 years ago, we went through a radical transformation with the goal of making our iterative process — "invent, launch, reinvent, relaunch, start over, rinse, repeat, again and again" — even faster. The changes we made affected both how we built applications and how we organized our company.

Back then, we had only a small fraction of the number of customers that Amazon serves today. Still, we knew that if we wanted to expand the products and services we offered, we had to change the way we approached application architecture.

The giant, monolithic "bookstore" application and giant database that we used to power Amazon.com limited our speed and agility. Whenever we wanted to add a new feature or product for our customers, like video streaming, we had to edit and rewrite vast amounts of code on an application that we'd designed specifically for our first product — the bookstore. This was a long, unwieldy process requiring complicated coordination, and it limited our ability to innovate fast and at scale.

We created a blueprint for change with our "Distributed Computing Manifesto." This was an internal document describing a new architecture. With this manifesto, we began restructuring our application into smaller pieces called "services" that enabled us to scale Amazon dramatically.

But changing our application architecture was only half the story. Back in 1998, every Amazon development team worked on the same application, and every release of that application had to be coordinated across every team.

To support this new approach to architecture, we broke down our functional hierarchies and restructured our organization into small, autonomous teams, small enough that we could feed each team with only two pizzas. We focused each of these "two-pizza teams" on a specific product, service, or feature set, giving them more authority over a specific portion of the app. This turned our developers into product owners who could quickly make decisions that affected their individual products.

Breaking down our organization and application structures was a bold idea, but it worked. We were able to innovate for our customers at a much faster rate, and we've gone from deploying dozens of feature deployments each year to millions, as Amazon has grown. Perhaps more dramatically, our success in building highly scalable infrastructure ultimately led to the development of new core competencies and resulted in the founding of AWS in 2006.

And we continue to work in two-pizza teams today.

We're not alone in the quest to innovate quickly. To remain competitive, companies must increase their agility so that they can continually uncover new opportunities and create better products. This is why more and more customers are embarking on the same journey that Amazon did and moving to modern application development. While this new approach requires shifting from monolithic architectures to components or microservices, best practices for modern applications involve much more than just changing the way that you design and build technology. You also need to rethink how you manage it.

To succeed in using application development to increase agility and innovation speed, organizations must adopt five elements, in any order: microservices; purpose-built databases; automated software release pipelines; a serverless operational model; and automated, continuous security.

## Architectural patterns: Microservices

Most companies, like Amazon, start their business with a monolithic application because it's the fastest, easiest system to develop. However, there's a problem with tightly coupling processes and running them as a single service. If one process of the application experiences a spike in demand, the entire architecture has to be scaled up to handle the load of that one process.

Moreover, adding and improving features becomes more complex as the code base grows, making it difficult to experiment with and implement new ideas. Monolithic architectures, too, add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

This is why microservices emerge as companies grow. With a microservices architecture, an application is made up of independent components that run each application's processes as a service. Services are built for business capabilities, such as an online shopping cart, and each service performs a single function. It runs independently and is managed by a single development team, so each service can be updated, deployed, and scaled to meet the demand for specific functions of an application. The shopping cart, for example, can support a much larger volume of users when there's a sale.

As organizations move from monolith to microservices, many developers find that they want to manage dependencies within each service through a pipeline, and they've had to create new ways of packaging applications and running code. Because of these innovations, instances are no longer your only compute option.

You can also use containers or AWS Lambda functions. Containers are the most popular option for packaging code and a great tool for modernizing legacy applications, because they offer excellent portability and flexibility over application settings. With Lambda, you get the most simplicity. The only code you write is business logic.

Another consideration with microservices is that they need a way to communicate with each other. Many applications continue to use API connections, but there are several other options for sending data between services. These include streaming for real-time data processing, events for triggering responses to data changes, and service meshes for application-level communication and observability. You can choose the integration method that best meets your application needs.

## Data management: Purpose-built databases

Modern applications are built with decoupled data stores in which there is a one-to-one mapping of database and microservice, rather than a single database. This is an important shift from a traditional application architecture, because just as a monolithic application poses scaling and fault tolerance challenges as it grows, so does a database. Plus, a single database is a single point of failure, and it's hard for a single database to meet the specific needs of a set of varied microservices. By decoupling data along with microservices, you free yourself to choose the database that best fits your need.

For many applications, the best choice would still be a relational database, but many apps have different data needs. For example, if you run applications that work with highly connected datasets, such as recommendation engines, you could choose a graph database, like Amazon Neptune, that stores and navigates relationships.

Or if your applications need real-time access to data, you could choose an in-memory database, like Amazon ElastiCache, which is commonly used for gaming and IoT apps. In general, the best database is the database that does exactly what your microservice needs.

## Software delivery: Automated release pipelines

When we moved away from our monolithic architecture at Amazon.com and reorganized into two-pizza teams, we stopped using a single release pipeline and began enabling each team to release independently.

While this removed the coordination challenges of making and delivering updates, decentralizing our development and release processes presented a new set of challenges. Maintaining release process and quality consistency across all teams became difficult, especially when each step of the release process was manual, which created the possibility of human error.

Our solution has been two-pronged: standardization and automation. First, we have defined our software delivery process as best-practice templates, which provide a standard for modeling and provisioning all infrastructure resources in a cloud environment. These "infrastructure as code" templates help our teams get started on the right foot because the template provisions the entire technology stack for an application through code, rather than using a manual process. At Amazon, this ensures that teams are configuring their processes and deployments according to our requirements.

Second, we have started using automation to remove manual processes from the software delivery workflow. With automated release pipelines, including continuous integration and continuous deployment (CI/CD), we rapidly test and release lots of code while minimizing errors. With CI, our teams regularly merge their code changes into a central repository. Then we run automated builds and tests, so that we detect problems early. With CD, our teams commit changes multiple times a day that flow out to production without any human touch.

At first, we found deploying without human intervention to be scary. But after we invested time in writing the right tests and fail-safes, we found that not only did it dramatically increase our speed and agility, it also improved the quality of the code.

## Operational model: As serverless as possible

Modern applications have a lot of moving parts. Rather than just a single application and database, a modern application may be composed of thousands of services, each with a purpose-built database and a team releasing new features continuously.

These moving parts can be divided into two categories:

- Activities that are part of a company's "secret sauce" and make it successful in the market, like creating a unique user experience and developing innovative products.
- Activities that we often refer to as "undifferentiated heavy lifting," which are tasks that must get done but don't provide competitive advantage. For most businesses, these tasks include things like server management, load balancing, and applying security patches.

We introduced the concept of "serverless" in 2014 with the launch of AWS Lambda, a compute service that lets you run code without provisioning or managing servers. This supports our overall goal of helping customers optimize resources around their secret sauce by offloading their undifferentiated tasks to AWS and has become a critical element in modern application development. Going serverless frees you to focus on activities that set your company apart, like product innovation.

When we say "serverless," we're referring to services that run without the need for infrastructure provisioning and scaling, have built-in availability and security, and use a pay-for-value billing model. Serverless isn't just Lambda, it's the entire application stack.

Application stacks typically consist of three components:

- A compute service like AWS Fargate to run the application logic
- Data stores like MySQL and PostgreSQL relational databases, or Amazon Aurora to persist the data
- An integration layer like event bus Amazon EventBridge to move the data

These serverless building blocks enable companies to construct applications that maximize the benefits of the serverless model.

At Amazon, we're not completely serverless ourselves, but we're moving in that direction. And so are many of our customers. In fact, we anticipate that there will soon be a whole generation of developers who have never touched a server and only write business logic. The reason is simple. Whether you're building net new applications or migrating legacy, using serverless primitives for compute, data, and integration enables you to benefit from the most agility that the cloud has to offer.

## Security: Everyone's responsibility

In the past, many companies treated security as if it were magic dust, something to sprinkle on an application after it was ready for release. This doesn't work well in a continuous release cycle, so organizations had to take a new approach to security, building firewalls around the entire application. But this also introduced challenges. The same security settings were applied to every piece of the application, which is problematic if an application is built with independent microservices that may need different settings.

For this reason, in modern applications, security features are built into every component of the application and automatically tested and deployed with each release. This means that security is no longer the sole responsibility of the security team. Rather, it is deeply integrated into every stage of the development lifecycle. Engineering, operations, and compliance teams all have a role to play.

Security is integrated within tooling, like code repositories, build management programs, and deployment tools. It's applied both to the release pipeline itself and to the software being released through that pipeline. With serverless services, security posture is even easier to maintain because the underlying infrastructure security, like operating system version updates, software patching, and monitoring, is built in to each service.

## The journey

How are customers actually making these changes to modernize their applications? Although there's no single path, there are a few common patterns, including the approach we took at Amazon.

When we made the decision to focus on innovation and dramatically scale Amazon.com, we refactored a monolithic application, restructured our organization, and then optimized for the cloud through automation and abstraction. Some customers, like Yelp, have taken a similar path.

For customers starting with an application hosted on premises, the most common approach is to re-host, "lifting and shifting" an application to the cloud. Many customers then start leveraging managed services in the cloud, offloading things like database and API management to AWS to focus on their business logic.

Today, more and more customers are taking a path of reinvention, building new applications as serverless microservices that enable their organizations to take full advantage of the cloud. There's no correct way to modernize because on the AWS platform, applications can coexist in all states and interact successfully on any of these paths.

The common thing we have seen, though, is that customers who build modern applications see benefits across their entire businesses, especially in how they allocate time and resources. They spend more time on the logic that defines their business, scale up systems to meet peak customer demand easily, increase agility, and deliver new features to market faster and more often.

For example, Edmunds.com, which offers up-to-date vehicle information to car shoppers, has reduced the time needed to roll out new website features from six months to one week. The startup Bynder has also decreased the time it takes to bring products to market from one year to just one month. By changing the way they approach technology, companies can improve the way they do business.

This is the power of modern applications.
