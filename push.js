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

let sub = {}

push.sendNotification(sub, `test message`)