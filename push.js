const push = require(`web-push`)

let vapidKeys = {
    publicKey: 'BCWMdVrYf-FHo3bsbgJLu1F05xB5oqLSsHykPVn1XrRt-_Pfebis_mgz8IoP_oVCGMDgU3wmqJEg_zdPk2Q39YI',
    privateKey: 'KZwHUsZOXF5WfayZ269-Jrg0ggW-_WYeeRu0OijfBtU'
}

push.setVapidDetails(
    `mailto:test@code.co.id`,
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

let sub = {
    endpoint:"https://wns2-sg2p.notify.windows.com/w/?token=BQYAAADGl%2bjahoIUeLs3AAeZFNg8gOoAD9RkjwwTaeM%2fl7oEvWq7Dkpg1PYXgLAaD%2bfeEA64J%2fOXP%2bBYDyHdnak22PQmbJC%2b%2b3cLqgZ%2fqBjB2vDtHFnGGlyCtrR3%2fu%2fQi3akULB2QsJbJ6B0kS7kcqbOL9%2bhrfBojaCAKoclXO7AIdOLI4Gw952Lxq375kWw%2fNXXVG%2bZoHfvl5x5UP8hkx74YBoSrD6Cltxf%2fHKpvmh5uQVF6PbA9sK9mqGKDWV1DNSKxiFNBelLCad2a4to8FgpV5jowLGp1qKmmzNEBq%2fvB6uk11dXxK0wdE2yXEhX%2bJaav7IUHjA6P8PCbFHNqdfFoi5jox5vsdOxpc4r68wYMTaR8w%3d%3d",
    expirationTime: null,
    keys:
    {
        p256dh:"BGi8F2d-9zynouGzioDqZSw8ffVlUvhvOQdXVRvOKVe8-JubTRSULfalIX5X20KpHsj4qAsTC2OwohcOYl32Cq8",
        auth:"_MmzAnwRWWhCmEO0yU6big"
    }
}

push.sendNotification(sub, `test message`)