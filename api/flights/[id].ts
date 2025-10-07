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

  const { id } = req.query;
  const flight = JSON.parse(fs.readFileSync('flightHistory.json', 'utf8'));

  const key = flight.flights.find((f: Flight) => f.id === id);

  if (key) {
    res.status(200).json(key);
  } else {
    res.status(404).json({ message: 'Voo não encontrado' });
  }
}
