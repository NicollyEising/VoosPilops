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

  const totalBalance = flight.flights.reduce((acc: number, f: Flight) => {
    const bal = typeof f.flightData?.balance === 'number' ? f.flightData.balance : 0;
    return acc + bal;
  }, 0);

  res.status(200).json({ totalBalance });
}
