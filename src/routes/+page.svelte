<script lang="ts">
    import PortfolioSection from "$lib/components/PortfolioSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";
</script>

<div class="flex flex-col lg:flex-row h-full">
    <div class="w-full bg-secondaryLight h-1/2 lg:h-full">
        <PortfolioSection/>
    </div>
    <div class="w-full bg-secondary h-1/2 lg:h-full">
        <ContactSection/>
    </div>
</div>