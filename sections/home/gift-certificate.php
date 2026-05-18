<?php
// sections/home/gift-certificate.php - Gift certificate banner
?>

<section class="py-16 sm:py-20 border-y border-white/[0.06]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
        <div class="flex items-center gap-5 flex-col sm:flex-row">
            <!-- Gift icon -->
            <svg class="w-8 h-8 text-[#c9a96e] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
            </svg>
            <div>
                <h3 class="font-display text-2xl text-white mb-1 font-normal">
                    Give the gift of dance
                </h3>
                <p class="text-stone-500">
                    Perfect for weddings, birthdays, anniversaries, and holidays.
                </p>
            </div>
        </div>
        <a href="#gift"
           class="flex-shrink-0 font-semibold px-7 py-3.5 rounded border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-stone-950 transition-colors tracking-wide">
            Buy a Gift Certificate
        </a>
    </div>
</section>
