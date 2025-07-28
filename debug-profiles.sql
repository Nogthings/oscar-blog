-- Query to check existing profiles
SELECT 
  p.id,
  p.username,
  p.full_name,
  p.created_at,
  au.email,
  au.raw_user_meta_data
FROM profiles p
LEFT JOIN auth.users au ON p.id = au.id
ORDER BY p.created_at DESC;

-- Query to check posts with their authors
SELECT 
  po.id,
  po.title,
  po.author_id,
  p.full_name as author_name,
  p.username as author_username
FROM posts po
LEFT JOIN profiles p ON po.author_id = p.id
ORDER BY po.created_at DESC;