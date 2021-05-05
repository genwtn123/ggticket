import axios from 'axios';

const buyticket = 'http://localhost:12000/ticket/booking';

class TicketService {
    static async buyticket(form) {
        return  await axios.post(buyticket,form)
    }

}
export default TicketService
