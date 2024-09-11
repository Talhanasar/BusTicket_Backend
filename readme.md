# Bus Ticket API

Welcome to the Bus Ticket API! This API provides endpoints for retrieving information about available buses and booked tickets for your bus booking system. Data is managed and stored using MongoDB.

## API Endpoints

### Get Available Buses

Retrieve all available buses for a specific date and route.

**Endpoint:**

GET https://bus-ticket-api.vercel.app/api/{apiKey}/availablebus/way={route}%20date={date}

**Parameters:**

- `{apiKey}`: Your API key (contact the creator for an API key).
- `{route}`: The route between cities (e.g., `chittagong-dhaka`).
- `{date}`: The date in `YYYY-MM-DD` format (e.g., `2024-08-29`).

**Example Request:**

GET https://bus-ticket-api.vercel.app/api/yourApiKey/availablebus/way=chittagong-dhaka%20date=2024-08-29


**Response:**

Returns a list of available buses for the specified route and date.

### Get Booked Tickets

Retrieve all booked tickets for buses or get tickets for a specific bus.

**Endpoint:**

GET https://bus-ticket-api.vercel.app/api/{apiKey}/bookedTicket/


**Parameters:**

- `{apiKey}`: Your API key (contact the creator for an API key).

**Example Request:**

GET https://bus-ticket-api.vercel.app/api/yourApiKey/bookedTicket/


**Response:**

Returns a list of all booked tickets.

### Get Booked Tickets for a Specific Bus

Retrieve booked tickets for a specific bus by its ID.

**Endpoint:**

GET https://bus-ticket-api.vercel.app/api/{apiKey}/bookedTicket/{id}


**Parameters:**

- `{apiKey}`: Your API key (contact the creator for an API key).
- `{id}`: The ID of the specific bus.

**Example Request:**

GET https://bus-ticket-api.vercel.app/api/yourApiKey/bookedTicket/12345

**Response:**

Returns a list of booked tickets for the specified bus.

## Data Management

This API uses MongoDB for data storage and management. MongoDB is utilized to handle the following:

- **Available Buses**: Information about buses, including their schedules and availability.
- **Booked Tickets**: Details of booked tickets, including bus IDs and customer information.

## Contact

For an API key or any other inquiries, please contact:

- **Email**: [talhabinnasar7@gmail.com](mailto:talhabinnasar7@gmail.com)
- **LinkedIn**: [Talha's LinkedIn Profile](https://www.linkedin.com/in/talha-7642a1264/)

---

Happy coding! 🚍