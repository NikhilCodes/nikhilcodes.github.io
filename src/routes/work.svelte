<script context="module">
  import { browser, dev } from '$app/env';
  import { fly, fade } from 'svelte/transition';

  // <!--// we don't need any JS on this page, though we'll load-->
  // <!--// it in dev so that we get hot module replacement...-->
  // <!--export const hydrate = dev;-->

  // <!--// ...but if the client-side router is already loaded-->
  // <!--// (i.e. we came here from elsewhere in the app), use it-->
  // <!--export const router = browser;-->

  // <!--// since there's no dynamic data here, we can prerender-->
  // // it so that it gets served as a static asset in prod
  // export const prerender = true;
</script>

<svelte:head>
    <title>Work History</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="content"
     out:fade
     in:fly="{{ y: 1000, duration: 300, delay: 500 }}"
>
    <h1>My Work <span style="font-family: 'Helvetica Outline', sans-serif" class="font-light">History</span></h1>

    <article class="prose lg:prose-xl">
        <p>
            I've worked at a number of different companies, from small startups to mid sized
            startups. I've worked on a number of different projects, from small
            personal projects to large enterprise projects.
        </p>
    </article>

    <br/>
    <article class="prose-headings:font-extrabold prose-headings:prose-2xl">
        <h2>
            <a href="https://www.cataloging.ai/">Cataloging.AI</a>
        </h2>

        <p>
            I worked with the <a href="https://www.cataloging.ai/">Cataloging AI</a>
            product development team. I was responsible for the development of the
            <a href="https://www.cataloging.ai/">Cataloging.ai</a>
            <a href="https://www.cataloging.ai/">API</a> and
            <a href="https://www.cataloging.ai/">Web</a>
            applications.
        </p>
        <p class="mt-1">
            <span class="font-extrabold bg-gray-700 text-white p-1">February 2022 - Present</span>
        </p>

        <div class="flex space-x-4 mt-2">
            <span>Tools/Tech Used:</span>
            <span class="flex space-x-2">
                <img src="icons/react.svg" alt="react" height="20" width="20">
                <img src="icons/angular.svg" alt="angular" height="20" width="20">
                <img src="icons/nodejs.svg" alt="nodejs" height="20" width="20">
                <img src="icons/mongodb.svg" alt="mongodb" height="20" width="20">
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

        <p class="mt-1">
            <span class="font-extrabold bg-gray-700 text-white p-1">October 2020 - February 2022</span>
        </p>

        <div class="flex space-x-4 mt-2">
            <span>Tools/Tech Used:</span>
            <span class="flex space-x-2">
                <img src="icons/react.svg" alt="react" height="20" width="20">
                <img src="icons/nodejs.svg" alt="nodejs" height="20" width="20">
                <img src="icons/mongodb.svg" alt="mongodb" height="20" width="20">
                <img src="icons/flutter.svg" alt="flutter" height="20" width="20">
            </span>
    </article>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
