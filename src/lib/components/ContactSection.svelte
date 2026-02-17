<script lang="ts">
   import SendIcon from "../icons/SendIcon.svelte";
   import { onMount } from "svelte";

   let open = $state(false);
   let buttonEl: HTMLButtonElement;

   onMount(() => {
      const handleClick = (e: MouseEvent) => {
         if (open && !buttonEl.contains(e.target as Node)) {
            open = false;
         }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
   });
</script>

<div class="flex h-full items-center justify-center" data-aos="fade-in" data-aos-delay="350" data-aos-duration="1000">
   <div class="flex gap-4 items-center">
      <SendIcon class="w-8 lg:w-10 xl:w-12 mt-1 lg:mt-0.5 xl:mt-0"/>
      <div class="flex-row">
         <h3>
            Contact
         </h3>
         <div class="-mt-0.5 tracking-wider text-sm lg:text-base xl:text-lg">
            <a href="mailto:hello@tobi-weber.com?subject=Hej%20Tobi%20&#9996;️">hello[at]tobi-weber.com</a>
         </div>
      </div>
   </div>
</div>
<button
   bind:this={buttonEl}
   type="button"
   class="fixed bottom-0 right-0 px-6 pb-4 text-left hover:translate-y-0 transition-all ease-in-out duration-700 translate-y-[100px] text-xs md:text-sm md:translate-y-[120px] lg:text-lg lg:translate-y-[140px] cursor-pointer"
   class:!translate-y-0={open}
   onclick={() => open = !open}
>
   <div class="font-semibold tracking-wider mb-6 text-right">
      Impressum
   </div>
   <div class="text-xs md:text-sm lg:text-base text-right">
      Tobias Weber <br/>
      Hallstr. 6 <br/>
      90762 Fürth<br/>
      <a href="tel:+4915256719943">+49 152 / 56719943</a><br/>
      <a href="mailto:hello@tobi-weber.com?subject=Hej%20Tobi%20&#9996;️">hello[at]tobi-weber.com</a>
   </div>
</button>
