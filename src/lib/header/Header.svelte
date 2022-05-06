<script lang="ts">
</script>

<header class="flex flex-col">
    <div class="z-100 p-5 flex justify-between header-container">
        <div class="flex items-center">
            <a class="text-4xl font-bold" href="/">
                <span style="font-family: 'Helvetica Outline',serif">N</span>
            </a>
            <div class="font-bold hide-if-mobile" onclick="location.href='mailto:nikhil.nixel@gmail.com';">&nbsp;/
                nikhil.nixel@gmail.com
            </div>
        </div>
        <div class="font-light flex items-center">
            <span class="hide-if-mobile flex items-center space-x-2">
                <a target="_blank" href="https://github.com/NikhilCodes">GitHub</a>
                <div class="rounded-full bg-black h-1 w-1"></div>
                <a target="_blank" href="https://www.linkedin.com/in/nikhil-nayak-3b0967179/">LinkedIn</a>
                <div class="rounded-full bg-black h-1 w-1"></div>
                <a href="work">History</a>
                <div class="w-10"></div>
            </span>
            <a class="bg-black text-white font-bold py-2 px-4 flex items-center transition-all active:bg-gray-800"
               target="_blank"
               href="https://calendly.com/nikhil-nayak/30min">
                Hire me
                <div class="h-0.5 w-8 bg-white ml-4"></div>
            </a>

            <!-- Hamburger Menu -->
            <a class="flex items-center flex-col h-full justify-between p-2 hamburger-outline active:bg-black active:text-white transition hide-if-desktop ml-2"
               href="mailto:nikhil.nixel@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                     class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
            </a>
        </div>
    </div>
    <div class="hide-if-desktop flex items-center space-x-2 justify-center">
        <a target="_blank" href="https://github.com/NikhilCodes">GitHub</a>
        <div class="bg-black h-0.5 w-1.5"></div>
        <a target="_blank" href="https://www.linkedin.com/in/nikhil-nayak-3b0967179/">LinkedIn</a>
        <div class="bg-black h-0.5 w-1.5"></div>
        <a href="work">History</a>
    </div>
</header>

<style>
    header {
        max-width: 1400px;
        margin: 0 auto;
        padding-left: 6rem;
        padding-right: 6rem;
        display: flex;
        flex-direction: column;
    }

    .hamburger-outline {
        border: 1.4pt solid #00000077;
        border-radius: 4px;
    }

    @media (max-width: 1400px) {
        header {
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
</style>
