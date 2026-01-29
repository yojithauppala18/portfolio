

## Add Real-Time Portfolio Views Counter

### Summary
Add a real-time views counter next to the resume icon in the profile sidebar. This will track how many people have visited your portfolio and display the count with a live indicator.

---

### Architecture Overview

```text
┌─────────────────────────────────────────────────────────────────┐
│                    Profile Sidebar                              │
│                                                                 │
│   [GitHub] [LinkedIn] [Resume]  👁 1,234 views                 │
│                                      ↑                          │
│                           Real-time counter                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    ┌─────────────────┐
                    │    Supabase     │
                    │  ┌───────────┐  │
                    │  │   views   │  │
                    │  │  table    │  │
                    │  └───────────┘  │
                    └─────────────────┘
```

---

### Implementation Steps

#### 1. Connect Supabase to the Project

We'll need to connect Supabase to enable database storage for view counts. This will prompt you to either:
- Create a new Supabase project (Lovable Cloud), or
- Connect an existing Supabase project

#### 2. Create Database Table

Create a `page_views` table to store view counts:

```sql
create table public.page_views (
  id uuid primary key default gen_random_uuid(),
  page_name text unique not null,
  view_count bigint default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Insert initial row for portfolio
insert into public.page_views (page_name, view_count)
values ('portfolio', 0);

-- Enable RLS
alter table public.page_views enable row level security;

-- Allow anyone to read view counts (public portfolio)
create policy "Anyone can view page counts"
  on public.page_views for select
  using (true);

-- Allow anonymous users to increment views
create policy "Anyone can update view counts"
  on public.page_views for update
  using (true);
```

#### 3. Create ViewCounter Component

**New file: `src/components/portfolio/ViewCounter.tsx`**

A component that:
- Fetches the current view count on mount
- Increments the count once per session (to avoid inflating numbers)
- Subscribes to real-time updates using Supabase Realtime
- Displays the count with a subtle "live" indicator

```tsx
const ViewCounter = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    // Check if already counted this session
    const hasViewed = sessionStorage.getItem('portfolio_viewed');
    
    // Fetch current count
    fetchViewCount();
    
    // Increment if not already viewed
    if (!hasViewed) {
      incrementViewCount();
      sessionStorage.setItem('portfolio_viewed', 'true');
    }
    
    // Subscribe to real-time updates
    const subscription = supabase
      .channel('page_views')
      .on('postgres_changes', ...)
      .subscribe();
      
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 ...">
      <Eye className="w-4 h-4" />
      <span>{viewCount?.toLocaleString() ?? '...'}</span>
    </div>
  );
};
```

#### 4. Update ProfileSidebar

**File: `src/components/portfolio/ProfileSidebar.tsx`**

Add the ViewCounter component next to the social links:

```tsx
{/* Social Links */}
<div className="flex justify-center items-center gap-3">
  {socialLinks.map(...)}
  <ResumeModal />
  <ViewCounter />
</div>
```

---

### UI Design

The view counter will display as:
- A pill-shaped badge next to the resume icon
- Shows an eye icon with the view count
- Matches the existing design (rounded, uses secondary background with gold border)
- Numbers formatted with commas (e.g., "1,234")

---

### Files to Create/Modify

| File | Action |
|------|--------|
| Supabase Connection | Enable Supabase integration |
| Database Migration | Create `page_views` table with RLS policies |
| `src/components/portfolio/ViewCounter.tsx` | New component for real-time views |
| `src/components/portfolio/ProfileSidebar.tsx` | Add ViewCounter next to social links |

---

### Real-Time Behavior

- When someone visits the portfolio, the view count increments
- All visitors see the count update live (via Supabase Realtime)
- Session storage prevents the same visitor from inflating counts on refresh
- The counter shows "..." while loading, then animates to the actual number

---

### Technical Notes

- **Session-based tracking**: Uses `sessionStorage` to count unique sessions, not page loads
- **Real-time updates**: Leverages Supabase's real-time subscriptions for live updates
- **Public access**: RLS policies allow anyone to read/update (appropriate for a public portfolio)
- **Graceful fallback**: Shows loading state if Supabase connection fails

