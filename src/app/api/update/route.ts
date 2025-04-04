import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Verify update key
    if (data.key !== process.env.UPDATE_SCORE_KEY) {
      return NextResponse.json(
        { error: 'Invalid update key' },
        { status: 401 }
      );
    }

    // Validate required fields
    if (!data.email || !data.score) {
      return NextResponse.json(
        { error: 'Email and score are required' },
        { status: 400 }
      );
    }

    // Validate score is a number
    const score = parseInt(data.score);
    if (isNaN(score)) {
      return NextResponse.json(
        { error: 'Score must be a number' },
        { status: 400 }
      );
    }

    // Read CSV file
    const filePath = path.join(process.cwd(), 'public', 'leaderboard.csv');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Parse CSV content
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    });

    // Find existing entry
    let updated = false;
    const updatedRecords = records.map((record: any) => {
      if (record.Email === data.email) {
        updated = true;
        return {
          ...record,
          Score: parseInt(record.Score) + score
        };
      }
      return record;
    });

    // If email not found, add new entry
    if (!updated) {
      updatedRecords.push({
        Id: updatedRecords.length + 1,
        Email: data.email,
        Score: score
      });
    }

    // Convert back to CSV
    const csvContent = stringify(updatedRecords, {
      header: true,
      columns: ['Id', 'Email', 'Score']
    });

    // Write back to file
    await fs.writeFile(filePath, csvContent);

    return NextResponse.json({
      success: true,
      message: updated ? 'Score updated' : 'New entry created'
    });

  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}