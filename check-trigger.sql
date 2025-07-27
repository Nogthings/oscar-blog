-- Check if trigger exists
SELECT * FROM information_schema.triggers 
WHERE trigger_name = 'on_auth_user_created';

-- Check if function exists
SELECT * FROM information_schema.routines 
WHERE routine_name = 'handle_new_user';