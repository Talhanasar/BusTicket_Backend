# Bus Ticket API

Welcome to the Bus Ticket API! This API provides endpoints for retrieving information about available buses and booked tickets for your bus booking system.

## API Endpoints

### Get Available Buses

Retrieve all available buses for a specific date and route.

**Endpoint:**

GET https://bus-ticket-api.vercel.app/api/{apiKey}/availablebus/way={route}%20date={date}

markdown
Copy code

**Parameters:**

- `{apiKey}`: Your API key (contact the creator for an API key).
- `{route}`: The route between cities (e.g., `chittagong-dhaka`).
- `{date}`: The date in `YYYY-MM-DD` format (e.g., `2024-08-29`).

**Example Request:**

GET https://bus-ticket-api.vercel.app/api/yourApiKey/availablebus/way=chittagong-dhaka%20date=2024-08-29

sql
Copy code

**Response:**

Returns a list of available buses for the specified route and date.

### Get Booked Tickets

Retrieve all booked tickets for buses or get tickets for a specific bus.

**Endpoint:**

GET https://bus-ticket-api.vercel.app/api/{apiKey}/bookedTicket/

markdown
Copy code

**Parameters:**

- `{apiKey}`: Your API key (contact the creator for an API key).

**Example Request:**

GET https://bus-ticket-api.vercel.app/api/yourApiKey/bookedTicket/

sql
Copy code

**Response:**

Returns a list of all booked tickets.

### Get Booked Tickets for a Specific Bus

Retrieve booked tickets for a specific bus by its ID.

**Endpoint:**

GET https://bus-ticket-api.vercel.app/api/{apiKey}/bookedTicket/{id}

markdown
Copy code

**Parameters:**

- `{apiKey}`: Your API key (contact the creator for an API key).
- `{id}`: The ID of the specific bus.

**Example Request:**

GET https://bus-ticket-api.vercel.app/api/yourApiKey/bookedTicket/12345

yaml
Copy code

**Response:**

Returns a list of booked tickets for the specified bus.

## Contact

For an API key or any other inquiries, please contact the creator of the API.

---

Happy coding! 🚍