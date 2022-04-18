import { ref, onMounted, onUnmounted, watch } from 'vue'

// export const useMedia = () => {
//   function respond(breakpoint: string, fn: Function) {
//     let x

//     if (breakpoint == 'sm-phone') {
//       x = window.matchMedia('(min-width: 26.56em)')
//       if (x.matches) x.addEventListener('change', fn)
//       console.log(x.matches)
//     }
//     if (breakpoint == 'phone') {
//       x = window.matchMedia('(min-width: 38.75em) ') //620px
//       if (x.matches) x.addEventListener('change', fn)
//       console.log(x.matches)
//     }
//     if (breakpoint == 'tab-port') {
//       x = window.matchMedia('(min-width: 48em) ') //768px
//       if (x.matches) x.addEventListener('change', fn)
//       console.log(x.matches)
//     }
//     if (breakpoint == 'tab-land') {
//       x = window.matchMedia('(min-width: 64em) ') //1024px
//       if (x.matches) x.addEventListener('change', fn)
//       console.log(x.matches)
//     }
//     if (breakpoint == 'desktop') {
//       x = window.matchMedia('(min-width: 75em) ') //1280px
//       if (x.matches) x.addEventListener('change', fn)
//       console.log(x.matches)
//     }
//     if (breakpoint == 'big-desktop') {
//       x = window.matchMedia('(min-width: 96em)') //1536px
//       if (x.matches) x.addEventListener('change', fn)
//       console.log(x.matches)
//     }
//   }

//   return {
//     respond,
//   }
// }

let windowWidth = ref(0)

export const useMedia = () => {
  function respond(breakpoint: string, fn: Function) {
    let x

    if (breakpoint == 'sm-phone') {
      x = window.matchMedia('(min-width: 26.56em)')
      if (x.matches) x.addEventListener('change', fn)
      console.log(x.matches)
    }
    if (breakpoint == 'phone') {
      x = window.matchMedia('(min-width: 38.75em) ') //620px
      if (x.matches) x.addEventListener('change', fn)
      console.log(x.matches)
    }
    if (breakpoint == 'tab-port') {
      x = window.matchMedia('(min-width: 48em) ') //768px
      if (x.matches) x.addEventListener('change', fn)
      console.log(x.matches)
    }
    if (breakpoint == 'tab-land') {
      x = window.matchMedia('(min-width: 64em) ') //1024px
      if (x.matches) x.addEventListener('change', fn)
      console.log(x.matches)
    }
    if (breakpoint == 'desktop') {
      x = window.matchMedia('(min-width: 75em) ') //1280px
      if (x.matches) x.addEventListener('change', fn)
      console.log(x.matches)
    }
    if (breakpoint == 'big-desktop') {
      x = window.matchMedia('(min-width: 96em)') //1536px
      if (x.matches) x.addEventListener('change', fn)
      console.log(x.matches)
    }
  }

  watch(windowWidth, (newWidth, oldWidth) => {
    console.log(newWidth, 'new')

    console.log(oldWidth, 'old')
  })
  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  })
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  return {
    newWidth,
  }
}
