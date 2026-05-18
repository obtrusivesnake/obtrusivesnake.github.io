<?php
// sections/home/fitness.php - Morning fitness offerings
?>

<section class="py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">

            <div class="w-full md:w-1/2">
                <img src="/assets/yoga.avif" alt="Fitness classes at Fatcat Ballroom" class="w-full aspect-[4/3] object-cover">
            </div>

            <div class="w-full md:w-1/2">
                <!-- Activity/heart-pulse icon -->
                <svg class="w-12 h-12 text-[#c9a96e] mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>
                </svg>

                <h2 class="font-display text-3xl sm:text-4xl text-white mb-5 font-normal leading-snug">
                    Fitness classes every morning
                </h2>
                <p class="text-stone-400 text-lg leading-relaxed mb-6">
                    In addition to dance lessons, our studio offers fitness classes every morning for just $5 per session.
                    We offer Zumba, our Latin-inspired dance fitness class, every morning at 9:15am except Tuesday.
                    On Tuesdays at 9:15am, we offer Holy Yoga, combining movement and relaxation with the celebration of God.
                    Every Friday at 11am, we offer Chair Yoga, gentle movement for balance, flexibility, and confidence.
                </p>

                <a href="/fitness.php"
                   class="inline-flex items-center text-[#c9a96e] hover:text-[#d4b87d] font-medium text-base transition-colors group tracking-wide">
                    Explore fitness classes
                    <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                </a>
            </div>

        </div>
    </div>
</section>
