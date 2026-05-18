<?php
// sections/classes/day-nav.php - Sticky day-of-week jump links
$days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday"]; ?>

<nav class="sticky top-20 z-40 bg-stone-950/90 backdrop-blur-xl border-b border-white/[0.06]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="flex items-center overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center">
            <?php foreach ($days as $day): ?>
                <a href="#<?php echo strtolower($day); ?>"
                   class="flex-shrink-0 text-xs uppercase tracking-[0.2em] px-5 py-4 text-stone-500 hover:text-white border-b border-transparent hover:border-[#c9a96e] transition-all duration-300">
                    <?php echo $day; ?>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</nav>
