import client from './client'

const send = async (message, listingId) => (
    client.post('/messages', { 
        message,
        listingId,
    })
)

export default {
    send
}