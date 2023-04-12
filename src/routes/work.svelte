<script context="module">
  import { fly, fade } from 'svelte/transition';
</script>

<svelte:head>
    <title>Work History</title>
    <meta name="description" content="About Nikhil Nayak"/>
</svelte:head>


<!--  Weird Artifacts  -->
<div in:fade
     out:fade
     class="transition h-48 w-48 bg-cyan-300 rounded-3xl absolute spin-1 flex items-center justify-center content-center z-0"
     style="transform: rotateZ(25deg)">
    <div class="h-20 w-20 shadow-xl shadow-cyan-700 bg-cyan-800 rounded-2xl ping"></div>
</div>
<div in:fade
     out:fade
     class="h-32 w-32 bg-transparent border-amber-400 border-4 rounded-2xl absolute spin-2 right-10 bottom-20 z-0"
     style="transform: rotateZ(-35deg)"></div>
<div in:fade
     out:fade
     class="h-32 w-32 bg-gradient-to-br to-teal-300 from-green-600 rounded-2xl absolute spin-3 right-32 top-36 z-0"
     style="transform: rotateZ(-5deg)"></div>
<!---->
<div class="content z-10"
     out:fade
     in:fly="{{ y: 1000, duration: 300, delay: 500 }}"
>
    <h1>My Work <span style="font-family: 'Helvetica Outline', sans-serif" class="font-light">History</span></h1>

    <article class="prose lg:prose-xl">
        <p>
            I've worked at a number of different companies, from small startups to large enterprises.
            I've worked on a number of different projects, from small
            personal projects to large enterprise projects.
        </p>
    </article>

    <br/>
    <article class="prose-headings:font-extrabold prose-headings:prose-2xl">
        <h2>
            <a href="https://www.bajajfinservsecurities.in">Bajaj Financial Securities Limited</a>
        </h2>

        <p>
            Responsible for end-to-end development of the various products of the company. Carried out maintenance and
            bug fixes.
            Contributed to the development of the company's internal tools. Developed various POCs that were used to
            evaluate the feasibility of potential product features and improvements.
        </p>
        <p class="mt-2">
            <span class="font-light text-gray-500"><span class="p-1.5 bg-gray-200 rounded">01/2023</span> - <span
                    class="p-1.5 bg-gray-200 rounded">Present</span></span>
        </p>

        <div class="flex space-x-4 mt-2">
            <span>Tools/Tech Used:</span>
            <span class="flex space-x-2">
                <img src="icons/react.svg" alt="react" height="20" width="20">
                <img src="icons/nodejs.svg" alt="nodejs" height="20" width="20">
                <img src="icons/mongodb.svg" alt="mongodb" height="20" width="20">
                <img src="icons/aws.svg" alt="aws" height="20" width="20">
            </span>
        </div>

        <h2 class="mt-8">
            <a href="https://www.cataloging.ai/">Cataloging.AI</a>
        </h2>

        <p>
            I worked with the <a href="https://www.cataloging.ai/">Cataloging AI</a>
            product development team. I was responsible for the development of the
            <a href="https://www.cataloging.ai/">Cataloging.ai</a>
            <a href="https://www.cataloging.ai/">API</a> and
            <a href="https://www.cataloging.ai/">Web</a>
            applications. Built serverless infra using AWS Lambda and AWS API Gateway. Wrote complex mongo queries and independently built several features and improvements.
            Led team of 3 developers in the development of the API. Carrier out several POCs and Schema design activities.
            Worked directly under Product Manager and CTO to understand the product requirements and translate them into technical requirements.
        </p>
        <p class="mt-2">
            <span class="font-light text-gray-500"><span class="p-1.5 bg-gray-200 rounded">02/2022</span> - <span
                    class="p-1.5 bg-gray-200 rounded">12/2022</span></span>
        </p>

        <div class="flex space-x-4 mt-2">
            <span>Tools/Tech Used:</span>
            <span class="flex space-x-2">
                <img src="icons/react.svg" alt="react" height="20" width="20">
                <img src="icons/angular.svg" alt="angular" height="20" width="20">
                <img src="icons/nodejs.svg" alt="nodejs" height="20" width="20">
                <img src="icons/mongodb.svg" alt="mongodb" height="20" width="20">
                <img src="icons/aws.svg" alt="aws" height="20" width="20">
            </span>
        </div>

        <h2 class="mt-8">
            <a href="https://pocketbits.in/">Pocketbits</a>
        </h2>

        <p>
            I was responsible for the development of the API
            Actively worked with AWS to deploy and maintain infra.
            Worked with the team to build the product from scratch. Worked on the development of the API and helped setup IaaS using Terraform.
            Improved open source libraries and tools that were used by the company, added Socket listener to hummingbot effectively making it a websocket server.
            Built many microservices that were performant and necessary for DEX trading.
        </p>

        <p class="mt-2">
            <span class="font-light text-gray-500"><span class="p-1.5 bg-gray-200 rounded">03/2022</span> - <span
                    class="p-1.5 bg-gray-200 rounded">Present</span></span>
        </p>

        <div class="flex space-x-4 mt-2">
            <span>Tools/Tech Used:</span>
            <span class="flex space-x-2">
                <img src="icons/java.svg" alt="nodejs" height="20" width="20">
                <img src="icons/mongodb.svg" alt="nodejs" height="20" width="20">
                <img src="icons/aws.svg" alt="aws" height="20" width="20">
            </span>
        </div>

        <h2 class="mt-8">
            <a href="https://presence.is/">Presence</a>
        </h2>

        <p>
            I was responsible for the development of the
            <a href="https://gigsy.in/">API</a> and Overall architecture.
            Actively worked with <a href="https://supabase.com">Supabase</a> to build complex features fast.
            Dealt with various complex Postgres RPC functions on the backend.
            Did a bunch of optimization of core endpoints that were used by the client app more frequently.
            Led backend team of 2 developers in the development of the API.
            Worked directly under the stakeholders to understand the product requirements and translate them into technical requirements.
        </p>

        <p class="mt-2">
            <span class="font-light text-gray-500"><span class="p-1.5 bg-gray-200 rounded">11/2021</span> - <span
                    class="p-1.5 bg-gray-200 rounded">Present</span></span>
        </p>

        <div class="flex space-x-4 mt-2">
            <span>Tools/Tech Used:</span>
            <span class="flex space-x-2">
                <img src="icons/nodejs.svg" alt="nodejs" height="20" width="20">
                <img src="icons/postgresql.svg" alt="nodejs" height="20" width="20">
                <img src="icons/flutter.svg" alt="flutter" height="20" width="20">
                <img src="icons/aws.svg" alt="aws" height="20" width="20">
            </span>
        </div>

        <h2 class="mt-8">
            <a href="https://zeksta.com/">Zeksta</a>
        </h2>
        <p>
            Worked closely with foreign clients to actively build and upgrade platforms used by UKTV. Upgraded their
            legacy codebase and independently developed frontend features. Utilized Angular, AWS AppSync, AWS Amplify,
            and GraphQL for efficient implementation.
        </p>
        <p class="mt-2">
        <span class="font-light text-gray-500"><span class="p-1.5 bg-gray-200 rounded">09/2021</span> - <span
            class="p-1.5 bg-gray-200 rounded">06/2022</span></span>
        </p>
        <div class="flex space-x-4 mt-2">
            <span>Tools/Tech Used:</span>
            <span class="flex space-x-2">
        <img src="icons/angular.svg" alt="angular" height="20" width="20">
        <img src="icons/aws.svg" alt="aws" height="20" width="20">
        </span>
        </div>

        <h2 class="mt-8">
            <a href="https://gigsy.in/">Gigsy</a>
        </h2>

        <p>
            I worked with the <a href="https://gigsy.in/">Gigsy</a>
            product development team. I was responsible for the development of the
            <a href="https://gigsy.in/">API</a> and
            <a href="https://gigsy.in/">Web</a>
            applications. And I was also responsible for the development of the mobile app "Gigsy V2" (iOS and Android).
            Maintained existing white labelled apps and created new ones while keeping up with changing requirements.
        </p>

        <p class="mt-2">
            <span class="font-light text-gray-500"><span class="p-1.5 bg-gray-200 rounded">10/2020</span> - <span
                    class="p-1.5 bg-gray-200 rounded">01/2022</span></span>
        </p>

        <div class="flex space-x-4 mt-2">
            <span>Tools/Tech Used:</span>
            <span class="flex space-x-2">
                <img src="icons/react.svg" alt="react" height="20" width="20">
                <img src="icons/nodejs.svg" alt="nodejs" height="20" width="20">
                <img src="icons/mongodb.svg" alt="mongodb" height="20" width="20">
                <img src="icons/flutter.svg" alt="flutter" height="20" width="20">
                <img src="icons/aws.svg" alt="aws" height="20" width="20">
            </span>
        </div>
    </article>
    <br/>
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }

  h1, h2 {
    font-family: 'Nimbus San L Bold', serif;
  }


</style>
