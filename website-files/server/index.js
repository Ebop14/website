require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, '../build')));

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Max conversation history to keep (in message pairs)
const MAX_HISTORY_PAIRS = 10;

// Chat endpoint with streaming and extended thinking
app.post('/api/chat', async (req, res) => {
  const { message, context, history = [] } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY is not configured' });
  }

  // Set headers for Server-Sent Events
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Build messages array with history (capped)
  const recentHistory = history.slice(-MAX_HISTORY_PAIRS * 2);
  const messages = [
    ...recentHistory,
    { role: 'user', content: message },
  ];

  try {
    // Use streaming with extended thinking
    const stream = await anthropic.messages.stream({
      model: 'claude-haiku-4-20250414',
      max_tokens: 8000,
      system: context,
      messages,
    });

    // Process the stream
    for await (const event of stream) {
      if (event.type === 'content_block_start') {
        // Content block starting - could be thinking or text
        if (event.content_block?.type === 'thinking') {
          // Thinking block started
        } else if (event.content_block?.type === 'text') {
          // Text block started
        }
      } else if (event.type === 'content_block_delta') {
        if (event.delta?.type === 'thinking_delta') {
          // Stream thinking content
          res.write(`data: ${JSON.stringify({ type: 'thinking', content: event.delta.thinking })}\n\n`);
        } else if (event.delta?.type === 'text_delta') {
          // Stream text content
          res.write(`data: ${JSON.stringify({ type: 'text', content: event.delta.text })}\n\n`);
        }
      } else if (event.type === 'message_stop') {
        // Message complete
        res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
      }
    }

    res.end();
  } catch (error) {
    console.error('Anthropic API error:', error);
    res.write(`data: ${JSON.stringify({ type: 'error', content: error.message })}\n\n`);
    res.end();
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/chat`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('Warning: ANTHROPIC_API_KEY environment variable is not set');
  }
});
