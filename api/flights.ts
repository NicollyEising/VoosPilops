import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';

interface Flight {
  id: string;
  flightData?: { balance?: number; [key: string]: any };
  [key: string]: any;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const flight = JSON.parse(fs.readFileSync('flightHistory.json', 'utf8'));
  const flightsArray = flight.flights;

  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedFlights = flightsArray.slice(startIndex, endIndex);

  res.status(200).json({
    page,
    limit,
    total: flightsArray.length,
    pages: Math.ceil(flightsArray.length / limit),
    data: paginatedFlights,
  });
}
