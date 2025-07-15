// env/server.ts

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

console.log('ENV CHECK START');
console.log({
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  TAVILY_API_KEY: process.env.TAVILY_API_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  SCIRA_API_KEY: process.env.SCIRA_API_KEY,
});

export const serverEnv = createEnv({
  server: {
    // Core AI Models
    OPENAI_API_KEY: z.string().min(1),
    ANTHROPIC_API_KEY: z.string().optional().default(''),
    GROQ_API_KEY: z.string().optional().default(''),
    XAI_API_KEY: z.string().optional().default(''),
    GOOGLE_GENERATIVE_AI_API_KEY: z.string().optional().default(''),
    DAYTONA_API_KEY: z.string().optional().default(''),

    // Required Services
    DATABASE_URL: z.string().min(1),
    TAVILY_API_KEY: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),
    SCIRA_API_KEY: z.string().min(1),

    // Auth (leave blank if unused)
    GITHUB_CLIENT_ID: z.string().optional().default(''),
    GITHUB_CLIENT_SECRET: z.string().optional().default(''),
    GOOGLE_CLIENT_ID: z.string().optional().default(''),
    GOOGLE_CLIENT_SECRET: z.string().optional().default(''),
    TWITTER_CLIENT_ID: z.string().optional().default(''),
    TWITTER_CLIENT_SECRET: z.string().optional().default(''),

    // Optional External Tools (safe to leave blank)
    REDIS_URL: z.string().optional().default(''),
    ELEVENLABS_API_KEY: z.string().optional().default(''),
    EXA_API_KEY: z.string().optional().default(''),
    TMDB_API_KEY: z.string().optional().default(''),
    YT_ENDPOINT: z.string().optional().default(''),
    FIRECRAWL_API_KEY: z.string().optional().default(''),
    OPENWEATHER_API_KEY: z.string().optional().default(''),
    GOOGLE_MAPS_API_KEY: z.string().optional().default(''),
    MAPBOX_ACCESS_TOKEN: z.string().optional().default(''),
    CRON_SECRET: z.string().optional().default(''),
    BLOB_READ_WRITE_TOKEN: z.string().optional().default(''),
    MEM0_API_KEY: z.string().optional().default(''),
    MEM0_ORG_ID: z.string().optional().default(''),
    MEM0_PROJECT_ID: z.string().optional().default(''),
    SMITHERY_API_KEY: z.string().optional().default(''),
    COINGECKO_API_KEY: z.string().optional().default(''),
    NEXT_PUBLIC_MAPBOX_TOKEN: z.string().optional().default(''),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional().default(''),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional().default('http://localhost:3000'),
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().optional().default(''),
  },

  experimental__runtimeEnv: process.env,
})
