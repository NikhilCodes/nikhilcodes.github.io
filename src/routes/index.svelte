<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  const resumeUrl = 'https://drive.google.com/file/d/1Tj2El19f8tCIQGrPFMRGERX2T1zLauwu/view?usp=sharing';
</script>

<svelte:head>
    <title>NikhilCodes</title>
    <meta name="description" content="Nikhil Nayak's Portfolio [Github: @NikhilCodes]"/>
</svelte:head>

<section>
    <!-- Gradients -->
    <div class="artifact-container">
        <div in:fade
             out:fade
             class="rounded-full radial-gradient bg-opacity-90 absolute -left-10 -top-20"
             style="width: 600px;height: 600px;background: #1df8a9"></div>
        <div in:fade
             out:fade
             class="rounded-full radial-gradient bg-purple-500 bg-opacity-70 absolute left-80 top-32 w-96 h-96 secondary-blur"></div>
        <div in:fade
             out:fade
             class="rounded-full radial-gradient bg-purple-500 bg-opacity-70 absolute left-96 top-32 w-96 h-96 animate-pulse hide-if-mobile"></div>
        <div in:fade
             out:fade
             class="rounded-full radial-gradient bg-cyan-300 absolute -top-52 -right-0 w-96 h-96 animate-pulse hide-if-mobile"></div>
    </div>
    <!---->

    <div class="z-10 section-inner p-10"
         out:fly="{{ opacity: 0, x: -500, duration: 300, delay: 0 }}"
         in:fly="{{ opacity: 1, x: -500, duration: 300, delay: 300 }}">
        <h3 class="flex items-center">
            <div class="h-0.5 w-16 bg-black mr-4"></div>
            <span class="font-bold">Collaborate</span>
        </h3>

        <div class="mb-2">
            <h1 class="h-20 text-left" style="font-family: 'Nimbus San L Bold',serif">Nikhil Nayak</h1>
            <h1 style="font-weight: 300;font-family: 'Helvetica Outline',serif" class="text-left h-20">Developer.</h1>
        </div>

        <a href="{resumeUrl}" target="_blank" class="flex items-center space-x-2 mt-10">
            <span>Checkout Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
            </svg>
        </a>
    </div>
    <div class="flex-grow"></div>
    <div class="justify-end px-20 py-10 flex space-x-4 section-footer"
         in:fly="{{ y: 100, duration: 300, delay: 300 }}"
         out:fly="{{ y: 100, duration: 300 }}"
    >
        <div class="rounded-2xl bg-black text-white h-min w-min p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-seam"
                 viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
            </svg>
        </div>

        <div class="items-start content-center flex flex-col justify-center">
            <div>React | Angular | NodeJS | Svelte | Flutter | SpringBoot</div>
            <div class="italic">Full Stack Development</div>
        </div>
    </div>
    <div class="overflow-hidden right-0 bottom-0 absolute h-96 w-96 scale-down-mobile">
        <div class="absolute right-0 bottom-0 -rotate-45 w-96 py-3 bg-gray-700 shadow-xl shadow-gray-300 -translate-y-14 translate-x-24 text-white text-center flex flex-col items-center font-thin"
             in:fly="{{x: 300, y: 300, duration: 600}}"
             out:fly="{{ x: 300, y: 300, duration: 600 }}">
            Cybernetically engineered<span>using <a class="font-bold" href="https://svelte.dev/">Svelte</a></span>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1;
        overflow: hidden;
        max-width: 100vw;
    }

    .artifact-container {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    @media (min-width: 768px) {
        .section-inner {
            padding: 5rem;
        }

        h1 {
            width: 100%;
        }
    }

    @media (max-width: 767px) {
        .section-inner {
            padding: 2.5rem;
        }

        h1 {
            font-size: 2rem !important;
            height: 2rem;
        }

        .section-footer {
            padding: 2.5rem 0;
        }

        .scale-down-mobile {
            transform: scale(0.4) translateX(75%) translateY(75%);
        }

        .secondary-blur {
            left: 200px !important;
        }
    }
</style>
