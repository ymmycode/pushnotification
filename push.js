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
    endpoint:"https://wns2-sg2p.notify.windows.com/w/?token=BQYAAACed0ygVvGYDnw2XAdxNvcLtJoG5CVQw5ExcERJYWCwfbjVtvDngNPw5d0HFt%2f4ASQZsuvO6P2r3IRFFaxNX42GajcKr3daa2pD%2fsiWAbTlKWsGJBRIPyrUsW8ebVZ7IfJE6REo1d5qSAfs4PPZbr2zFzyZ6AkPg38gOfmS8sKyS0uK5PcjCCxqdVQRVovetKwtIsI04%2byvc4QCBSVTTP8G6550oKgbm1upDgulPS5JMUqU4DSxNR%2fgA2x0%2bXBfQlNPBmVtjuLUCqZttFCJGJZb0xyHt4%2bJXAfjXCvjrzGJ4kfCFE2rMv9bdTBZvfgzCyRX%2fpBme2EcLaoUTB%2bU9k%2fc",
    expirationTime: null,
    keys:
    {
        p256dh:"BCZXeGUHd8vc6qjxDNXPorL2QJc5qpmI3xWzwVbQFF8f8Zt3hjdOX7L0FOXclgiOnvxu25lASZ5q06EZjXQSSPQ",
        auth:"UMd55Xh3FT_GYjbJcFqqkQ"
    }

    // endpoint:"https://fcm.googleapis.com/fcm/send/dHaaJJkYUQM:APA91bEdPgHg9pI8Y5KLGjC0HhYROPcd7r1gPRyFGJK4NOdactWyKn2IUqaE7ULBCobesk6SZ6wqtFon0hA0ngJjY3d7Cn4gpiki3lKzT7UsPcxRFBvmhtR-iGaPaNUeHz-Uk_gRla_L",
    // expirationTime:null,
    // keys:{
    //     "p256dh":"BJj1wEz6VagRjc5jvV7xMgs1Ej3lUEvHQ1NZ48DtxredhdskJxeryog1OvL6nNWK4i-qyKJVndTwnVMpCpuGLks",
    //     "auth":"ThZTKctknZnZb8ruqXZ-cA"
    // }
}

push.sendNotification(sub, `test message`)