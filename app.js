
const subsButton = document.querySelector(`#subs`)


// create a service worker
addEventListener(`load`, async () => 
{
    let sw = await navigator.serviceWorker.register(`./sw.js`)
    console.log(sw)
})

// subcribe function on button
subsButton.onclick = async () => 
{
    let sw = await navigator.serviceWorker.ready
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BCWMdVrYf-FHo3bsbgJLu1F05xB5oqLSsHykPVn1XrRt-_Pfebis_mgz8IoP_oVCGMDgU3wmqJEg_zdPk2Q39YI',
    })
    console.log(JSON.stringify(push))
}