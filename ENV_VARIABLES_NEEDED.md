# 🔐 Environment Variables - wearewacky-com

> **Copy these to `.env.local` in your project root**

## Required Variables

```env
# ===================
# SUPABASE
# ===================
NEXT_PUBLIC_SUPABASE_URL=https://hbxwezacuwoehnacgkqv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhieHdlemFjdXdvZWhuYWNna3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NjMxNDgsImV4cCI6MjA4MDMzOTE0OH0.0oo0iZSzJDxRIjL_l43fv4Xeocqn0rVHcTbAuOmf4w8

# ===================
# APP CONFIG  
# ===================
NEXT_PUBLIC_APP_URL=https://wearewacky-com.vercel.app
NEXT_PUBLIC_APP_VERSION=0.1.0
```

## Where to Get These

| Variable | Source |
|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | [Supabase Dashboard](https://supabase.com/dashboard/project/hbxwezacuwoehnacgkqv/settings/api) → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Same page → `anon` public key |

## Vercel Setup

Add these same variables to Vercel:
1. Go to [Vercel Project Settings](https://vercel.com/wackyworksdigital/wearewacky-com/settings/environment-variables)
2. Add each variable
3. Redeploy

---

**Last Updated:** December 2025

