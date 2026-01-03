import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';
import headshot from '../images/headshot.jpg';

// File system structure
const FILE_SYSTEM = {
  '~': {
    type: 'dir',
    children: {
      'about.txt': {
        type: 'file',
        content: `ETHAN CHILD
===========

Senior at Dartmouth College (graduating June 2026)
Double major: Computer Science & Economics
GPA: 3.74/4.0 | ACT: 35

Key Coursework:
- Algorithms
- Object Oriented Programming
- Databases
- Game Theory
- ML & Statistical Analysis
- UI/UX
- Cybersecurity

Contact:
- Email: ethanvchild@gmail.com
- LinkedIn: linkedin.com/in/ethan-child
- GitHub: github.com/Ebop14`
      },
      'skills.txt': {
        type: 'file',
        content: `TECHNICAL SKILLS
================

Languages:
- MySQL
- C
- Python
- TypeScript
- ReactJS

Tools:
- Figma
- GitHub
- Salesforce
- Jira
- MongoDB

Specialties:
- Financial Modeling
- Business Analysis

Certifications:
- Agentforce (Certified Specialist)
- MCP`
      },
      'experience': {
        type: 'dir',
        children: {
          'ramp-pm.txt': {
            type: 'file',
            content: `RAMP - Product Management / Product Operations Intern
=====================================================
September 2025 - December 2025

Ramp is a $22.5B startup, ranked #6 on the Forbes Cloud 100

- Worked on AI and Procurement teams
- PM'd LLM-enabled Smarter Bill Pay OCR, greatly improving OCR accuracy
  - Presented at Ramp all-hands, used in demo video for Bill Pay agents
- PM'd Document Versioning for procurement
  - Helped win multiple deals with enterprise customers in P2P space
- Audited UX of 100+ invoices to plan LLM improvements for line item accuracy
- PM'd agentic AI follow-up drafter
  - Saved AE team ~1000 hrs/week and Ramp ~$3M yearly
- Wrote product spec, iterated, launched to alpha group
- Third ever Product intern, first to work as actual PM
- Became "blueprint" for future product interns`
          },
          'ramp-growth.txt': {
            type: 'file',
            content: `RAMP - Growth Intern
====================
June 2025 - September 2025

- Fastest intern to hit Summer quota (halfway through Summer)
- Closed most deals of any intern: 2 for $3K profit
- Cultivated customer pipeline via outreach emails, cold calls, internal AI tools
- Strong performance led to product internship proposal (accepted)
- Work inspired Talent Team to create product internship`
          },
          'battery-intern.txt': {
            type: 'file',
            content: `BATTERY VENTURES - Venture Capital / Growth Equity Intern
==========================================================
December 2023 - September 2024

Battery Ventures: $13B AUM Venture Capital Firm

Investment Work:
- Marketing Mix Modeling (MMM) Sector:
  - Ran customer interviews, created ARR waterfalls
  - Passed on investment, provided strategic advice to CEO

- Physical Security Sector:
  - Fielded customer calls to evaluate PMF
  - Built data pack with market opportunity analysis

- Ticketing Sector:
  - Built market diligence deck analyzing growth and risks
  - Convinced management to pass given Ticketmaster monopoly

Key Results:
- >20 proprietary deals generated
- 100+ companies sourced weekly
- Managed 50-student Externship program
- Taught 16 VC lessons
- 2,000 companies sourced, 17 diligence projects
- Interviewed 600+ Extern applicants`
          },
          'battery-extern.txt': {
            type: 'file',
            content: `BATTERY VENTURES - Venture Capital / Growth Equity Extern
==========================================================
May 2022 - May 2023

- 1 of 6 externs invited back from pool of 253
- Sourced 100+ venture and growth-stage B2B SaaS companies
- Focus: application layer solutions
- Led due diligence on food manufacturing software
- Identified and recommended 5 key investment targets`
          }
        }
      },
      'projects': {
        type: 'dir',
        children: {
          'sdrai.txt': {
            type: 'file',
            content: `SDRai - RampHacks 2025
======================
Role: Product Manager

Chrome-native AI sales coach for Google Meets and Orum

Features:
- Real-time custom questions for cold calls
- Note-taking and conversation summarization
- Personalized follow-up email drafting

Leadership:
- Managed 2 SWE interns
- Ran user interviews
- Set product features
- Built pain/solution presentation

Result: Top 3 out of 50+ teams
(Lost to 10-person team with 5 senior/staff SWEs)`
          },
          'fundraising.txt': {
            type: 'file',
            content: `FUNDRAISING CONSULTANT
======================

AI YC Startup:
- Assisted $2M Seed raise at $20M post
- Coached pitches
- Connected with top investors

AI Healthcare Startup:
- Advised on raising $25K
- Refined pitch deck
- Connected with angels
- Coached presentations`
          },
          'ai-customer-service.txt': {
            type: 'file',
            content: `AI CUSTOMER SERVICE COACHING AGENT
===================================
Role: Full-Stack Developer

Built for fast-growing e-Commerce company during US-China tariffs

Technical:
- AI agent pulling 4K+ tickets from CS reps
- Generates performance reviews with in-text references
- Dynamic chunking by context window

Impact:
- Reduced review time from ~3 hours/week to minutes
- Enabled more frequent reviews
- Better visibility into team dynamics`
          },
          'need1.txt': {
            type: 'file',
            content: `NEED 1 - Campus Pong Matchmaking App
=====================================
Role: Full-Stack Developer / Product Manager

- Managed 5 full-stack devs across 5 months
- Used Jira and Git for project management

Tech Stack:
- Bun
- MongoDB
- TypeScript
- Axios

Features:
- Easy game building
- Four-player ELO score algorithm`
          },
          'work-hard-play-hard.txt': {
            type: 'file',
            content: `WORK HARD PLAY HARD
===================
Role: UI/UX Designer

Social wellness app prototype for college students

Process:
- 10+ user interviews for feedback
- Iterative UI/UX optimization

Recognition:
- Received citation from professor for
  "a profound level of dedication to the field of UI/UX"`
          },
          'hacklab.txt': {
            type: 'file',
            content: `HACKLAB CTFs - Cybersecurity Binary Analysis
=============================================
Role: Cybersecurity Analyst

Techniques Used:
- Brute force
- Integer/buffer overflow
- ROP chains
- Format specifier exploits

Achievements:
- 1 of 4 students to find difficult CTF flag
- Only student to find/use unintended server exploit`
          },
          'nuggets.txt': {
            type: 'file',
            content: `NUGGETS - Multi-Player Game
============================
Role: Backend Developer / Product Manager

- Managed 3 developers
- Integrated server-client communication for multiplayer game in C
- Implemented ray-tracing algorithm for visibility checking
- Ensured smooth client-server interaction`
          }
        }
      },
      'extracurricular': {
        type: 'dir',
        children: {
          'rugby.txt': {
            type: 'file',
            content: `DARTMOUTH MEN'S RUGBY TEAM
==========================

- All-American (Academic) - 2024-25 recognition
- Practiced 5 times/week
- Top 10 finish in NCR D1
- Reviewed application essays for 10+ prospective athletes
- Assisted with admissions standards

Note: Self-taught - walked onto team with zero experience`
          },
          'other.txt': {
            type: 'file',
            content: `OTHER ACTIVITIES
================

- Korean Student Association (Mentor)
- Boxing Club (Member)
- Sigma Nu (Member)`
          }
        }
      }
    }
  }
};

// AI Context for /ai mode
const ETHAN_CONTEXT = `
You are an AI assistant on Ethan Child's personal portfolio website. Your role is to answer questions about Ethan in a helpful, friendly, and professional manner. You have access to the following information about Ethan:

## Basic Information
- Name: Ethan Child
- Education: Senior at Dartmouth College (graduating June 2026), double majoring in Computer Science and Economics
- GPA: 3.74/4.0, ACT: 35
- Email: ethanvchild@gmail.com
- LinkedIn: https://www.linkedin.com/in/ethan-child/
- GitHub: https://github.com/Ebop14
- Key Coursework: Algorithms, Object Oriented Programming, Databases, Game Theory, ML & Statistical Analysis, UI/UX, Cybersecurity

## Professional Experience

### Ramp - Product Management / Product Operations Intern (September 2025 - December 2025)
- Ramp is a $22.5B startup, ranked #6 on the Forbes Cloud 100
- Worked on AI and Procurement teams
- PM'd LLM-enabled Smarter Bill Pay OCR, greatly improving OCR accuracy - was presented at the Ramp all-hands and used in a demo video to demonstrate Bill Pay's agents
- PM'd Document Versioning for procurement, helping win multiple deals with enterprise customers in the P2P space
- Audited the UX of 100+ invoices to intuit how old OCR logic failed and plan how an LLM can improve line item accuracy - was presented at the Ramp all-hands
- PM'd an agentic AI follow-up drafter, saving the AE team ~1000 hrs/week and Ramp ~$3 Million yearly
- Wrote a product spec, iterated, launched to an alpha group, and ran onboarding meetings to pitch/enable AEs with the product
- Third ever Product intern, and first ever intern to work as a Product Manager, becoming the "blueprint" for future product interns

### Ramp - Growth Intern (June 2025 - September 2025)
- Fastest intern to hit Summer quota, hitting halfway through the Summer
- Closed most deals of any intern, 2 for a profit of $3K
- Cultivated a customer pipeline by drafting outreach emails, making cold calls, and building internal AI tools to enhance growth
- After strong performance taking on product work (in addition to SDR work), wrote a proposal for a product internship which was accepted
- Work and proposal inspired the Talent Team to create an internship in product

### Battery Ventures - Venture Capital / Growth Equity Intern (December 2023 - September 2024)
- Battery Ventures is a $13B AUM Venture Capital Firm
- Potential Early-Stage Investment in the Marketing Mix Modeling (MMM) Sector:
  - Ran customer interviews to build user empathy, created ARR waterfalls to evaluate startup's financial viability
  - Built domain expertise in the MMM space to analyze market forces and evaluate investment
  - Passed on investment and provided product/strategic advice to CEO including rationale
- Potential Early-Stage Investment in the Physical Security Sector:
  - Fielded customer calls to evaluate product market fit and estimate the size of the pain point addressed
  - Built a data pack with an in-depth analysis of the company's market opportunity/financial metrics
- Potential Early-Stage Investment in the Ticketing Sector:
  - Built a market diligence deck and data pack with in-depth analysis of company growth and risks
  - After diligence, convinced management to pass given Ticketmaster's monopoly and market power over the industry
- Developed an analyst-level investment pipeline, sourced companies, drafted outreach emails, fielded initial CEO calls, executed market diligence, and pitched top companies to leadership unsupervised
- Work resulted in >20 proprietary deals, including leading sourcing/diligence work in physical security, ticketing, gaming payments, and marketing mix modeling spaces
- Maintained a weekly sourcing output of 100+ companies
- Managed the 50-student Externship program, taught 16 VC lessons, yielding ~2,000 companies sourced and 17 diligence projects
- Interviewed over 600 Extern applicants, assessing investing insight, technology knowledge, and leadership potential

### Battery Ventures - Venture Capital / Growth Equity Extern (May 2022 - May 2023)
- Recognized for sourcing/diligence performance and offered a full-time internship - 1 of 6 externs invited back from a pool of 253
- Sourced over 100 venture and growth-stage B2B SaaS companies, focusing on application layer solutions
- Led due diligence on food manufacturing software, identifying and recommending 5 key investment targets

## Projects
1. SDRai (RampHacks 2025) - Chrome-native AI sales coach, placed top 3 out of 50+ teams
2. Fundraising Consultant - Helped AI YC startup raise $2M Seed at $20M post
3. AI Customer Service Agent - Reduced review time from 3 hours/week to minutes
4. Need 1 - Campus pong matchmaking app with 5 developers
5. Work Hard Play Hard - UI/UX prototype, received citation from professor
6. Hacklab CTFs - 1 of 4 students to find difficult flag
7. Nuggets - Multiplayer game with ray-tracing algorithm

## Extracurricular
- Dartmouth Men's Rugby Team - Academic All-American, Top 10 NCR D1, self-taught
- Korean Student Association (Mentor), Boxing Club (Member), Sigma Nu (Member)

## Technical Skills
- Languages: MySQL, C, Python, TypeScript, ReactJS
- Tools: Figma, GitHub, Salesforce, Jira, MongoDB
- Certifications: Agentforce (Certified Specialist), MCP

When answering questions:
1. Be conversational and friendly
2. Provide specific details and numbers when available
3. If asked about something not covered above, politely explain you only have information about Ethan's professional background and projects
4. For contact requests, provide the relevant contact information
5. If asked what Ethan looks like, mention that his headshot is displayed on the terminal interface
`;

function Terminal() {
  const [messages, setMessages] = useState([
    { type: 'system', content: 'Welcome to Ethan Child\'s Portfolio Terminal' },
    { type: 'system', content: 'Type "help" for available commands, or "/ai" to chat with AI.' },
  ]);
  const [input, setInput] = useState('');
  const [currentPath, setCurrentPath] = useState('~');
  const [isLoading, setIsLoading] = useState(false);
  const [currentThinking, setCurrentThinking] = useState('');
  const [showThinking, setShowThinking] = useState(true);
  const [aiMode, setAiMode] = useState(false);
  const [aiHistory, setAiHistory] = useState([]); // Tracks conversation for API
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentThinking]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Get directory at path
  const getNodeAtPath = (path) => {
    if (path === '~') return FILE_SYSTEM['~'];

    const parts = path.split('/').filter(p => p && p !== '~');
    let current = FILE_SYSTEM['~'];

    for (const part of parts) {
      if (current.type !== 'dir' || !current.children[part]) {
        return null;
      }
      current = current.children[part];
    }
    return current;
  };

  // Resolve relative path
  const resolvePath = (relativePath) => {
    if (relativePath === '~' || relativePath === '/') return '~';
    if (relativePath.startsWith('~/')) return relativePath;

    let parts = currentPath === '~' ? [] : currentPath.replace('~/', '').split('/');

    const relParts = relativePath.split('/');
    for (const part of relParts) {
      if (part === '..') {
        parts.pop();
      } else if (part !== '.' && part !== '') {
        parts.push(part);
      }
    }

    return parts.length === 0 ? '~' : '~/' + parts.join('/');
  };

  // Command handlers
  const handleCommand = (cmd) => {
    const parts = cmd.trim().split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (command) {
      case 'help':
        return {
          type: 'output',
          content: `Available commands:
  ls [dir]      List directory contents
  cd <dir>      Change directory
  cat <file>    Display file contents
  pwd           Print working directory
  clear         Clear terminal
  /ai           Enter AI chat mode
  /exit         Exit AI chat mode
  help          Show this help message

Directories:
  ~/experience     Work experience
  ~/projects       Project portfolio
  ~/extracurricular Activities`
        };

      case 'pwd':
        return { type: 'output', content: currentPath };

      case 'ls': {
        const targetPath = args[0] ? resolvePath(args[0]) : currentPath;
        const node = getNodeAtPath(targetPath);

        if (!node) {
          return { type: 'error', content: `ls: ${args[0]}: No such file or directory` };
        }
        if (node.type !== 'dir') {
          return { type: 'output', content: args[0] };
        }

        const items = Object.entries(node.children).map(([name, item]) => {
          return item.type === 'dir' ? name + '/' : name;
        });
        return { type: 'output', content: items.join('  ') };
      }

      case 'cd': {
        if (!args[0] || args[0] === '~') {
          setCurrentPath('~');
          return null;
        }

        const targetPath = resolvePath(args[0]);
        const node = getNodeAtPath(targetPath);

        if (!node) {
          return { type: 'error', content: `cd: ${args[0]}: No such file or directory` };
        }
        if (node.type !== 'dir') {
          return { type: 'error', content: `cd: ${args[0]}: Not a directory` };
        }

        setCurrentPath(targetPath);
        return null;
      }

      case 'cat': {
        if (!args[0]) {
          return { type: 'error', content: 'cat: missing file operand' };
        }

        const targetPath = resolvePath(args[0]);
        const node = getNodeAtPath(targetPath);

        if (!node) {
          return { type: 'error', content: `cat: ${args[0]}: No such file or directory` };
        }
        if (node.type === 'dir') {
          return { type: 'error', content: `cat: ${args[0]}: Is a directory` };
        }

        return { type: 'output', content: node.content };
      }

      case 'clear':
        setMessages([]);
        return null;

      case '/ai':
        setAiMode(true);
        return { type: 'system', content: 'Entering AI chat mode. Ask me anything about Ethan. Type "/exit" to return to terminal.' };

      case '/exit':
        if (aiMode) {
          setAiMode(false);
          return { type: 'system', content: 'Exited AI chat mode. Type "help" for commands.' };
        }
        return { type: 'error', content: 'Not in AI mode' };

      default:
        if (command.startsWith('/')) {
          return { type: 'error', content: `Unknown command: ${command}. Type "help" for available commands.` };
        }
        return { type: 'error', content: `${command}: command not found. Type "help" for available commands.` };
    }
  };

  // AI Chat handler
  const handleAiChat = async (message) => {
    setIsLoading(true);
    setCurrentThinking('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          context: ETHAN_CONTEXT,
          history: aiHistory
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let thinkingContent = '';
      let responseContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.type === 'thinking') {
                thinkingContent += data.content;
                setCurrentThinking(thinkingContent);
              } else if (data.type === 'text') {
                responseContent += data.content;
              }
            } catch (e) {}
          }
        }
      }

      const newMessages = [];
      if (thinkingContent && showThinking) {
        newMessages.push({ type: 'thinking', content: thinkingContent });
      }
      newMessages.push({ type: 'assistant', content: responseContent || 'I couldn\'t generate a response.' });

      setMessages(prev => [...prev, ...newMessages]);

      // Update AI history for context (user message + assistant response)
      setAiHistory(prev => [
        ...prev,
        { role: 'user', content: message },
        { role: 'assistant', content: responseContent }
      ]);
    } catch (error) {
      setMessages(prev => [...prev, { type: 'error', content: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
      setCurrentThinking('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userInput = input.trim();
    setInput('');

    // Add user input to messages
    setMessages(prev => [...prev, { type: 'user', content: userInput, path: currentPath }]);

    // Check for mode switch commands even in AI mode
    if (userInput.toLowerCase() === '/exit' && aiMode) {
      setAiMode(false);
      setAiHistory([]); // Clear conversation history
      setMessages(prev => [...prev, { type: 'system', content: 'Exited AI chat mode. Type "help" for commands.' }]);
      return;
    }

    if (userInput.toLowerCase() === '/ai' && !aiMode) {
      setAiMode(true);
      setMessages(prev => [...prev, { type: 'system', content: 'Entering AI chat mode. Ask me anything about Ethan. Type "/exit" to return to terminal.' }]);
      return;
    }

    if (aiMode) {
      await handleAiChat(userInput);
    } else {
      const result = handleCommand(userInput);
      if (result) {
        setMessages(prev => [...prev, result]);
      }
    }
  };

  const getPromptPath = () => {
    if (currentPath === '~') return '~';
    return currentPath.replace('~/', '');
  };

  return (
    <div className="terminal-container">
      <div className="terminal-sidebar">
        <div className="headshot-container">
          <img src={headshot} alt="Ethan Child" className="headshot" />
        </div>
        <div className="sidebar-info">
          <h2>Ethan Child</h2>
          <p>Dartmouth '26</p>
          <p>Economics & CS</p>
          <div className="sidebar-links">
            <a href="mailto:ethanvchild@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://www.linkedin.com/in/ethan-child/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Ebop14" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="thinking-toggle">
          <label>
            <input
              type="checkbox"
              checked={showThinking}
              onChange={(e) => setShowThinking(e.target.checked)}
            />
            <span>Show AI Thinking</span>
          </label>
        </div>
      </div>

      <div className="terminal-main">
        <div className="terminal-header">
          <span className="terminal-title">ethan@portfolio:{getPromptPath()}{aiMode ? ' [AI]' : ''}</span>
        </div>

        <div className="terminal-body">
          <div className="terminal-messages">
            <div className="terminal-messages-inner">
              {messages.map((msg, idx) => (
                <div key={idx} className={`terminal-message ${msg.type}`}>
                  {msg.type === 'user' && (
                    <span className="prompt">
                      <span className="prompt-path">{msg.path || currentPath}</span>
                      <span className="prompt-symbol">$</span>
                    </span>
                  )}
                  {msg.type === 'thinking' && (
                    <div className="thinking-block">
                      <div className="thinking-header">[ AI Thinking ]</div>
                      <div className="thinking-content">{msg.content}</div>
                    </div>
                  )}
                  {msg.type !== 'thinking' && (
                    <span className="message-content">{msg.content}</span>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="terminal-message loading">
                  {currentThinking && showThinking ? (
                    <div className="thinking-block active">
                      <div className="thinking-header">[ AI Thinking... ]</div>
                      <div className="thinking-content">{currentThinking}</div>
                    </div>
                  ) : (
                    <span className="loading-dots">Processing<span>.</span><span>.</span><span>.</span></span>
                  )}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="terminal-input-form">
            <span className="input-prompt">
              <span className="prompt-path">{getPromptPath()}</span>
              <span className="prompt-symbol">$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={aiMode ? "Ask about Ethan..." : "Type a command..."}
              disabled={isLoading}
              className="terminal-input"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
