<script lang="ts">
   import PortfolioSection from "$lib/components/PortfolioSection.svelte";
   import ContactSection from "$lib/components/ContactSection.svelte";
</script>

<div class="flex flex-col lg:flex-row h-full">
   <div class="w-full lg:hover:w-[110%] bg-secondaryLight h-1/2 lg:h-full transition-all ease-in-out duration-700">
      <PortfolioSection/>
   </div>
   <div class="w-full lg:hover:w-[110%] bg-secondary h-1/2 lg:h-full transition-all ease-in-out duration-700">
      <ContactSection/>
   </div>
</div>
