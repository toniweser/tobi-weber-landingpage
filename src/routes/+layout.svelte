<script lang="ts">
   import "../app.css";
   import "@fontsource/inter/500.css";
   import "@fontsource/inter/800.css";
   import "@fontsource/inter/900.css";

   import "aos/dist/aos.css";
   // eslint-disable-next-line
   // @ts-ignore
   import AOS from "aos";

   import { onMount } from "svelte";

   onMount(() => {
      AOS.init({
         duration: 1000,
         once: true,
         disable:
            /bot|crawler|spider|crawling/i.test(navigator.userAgent) ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
      });
   });
</script>

<slot/>
