import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

type Post = {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  author_id: string
  published: boolean
  created_at: string
  updated_at: string
  profiles?: {
    full_name: string
    username: string
  }
}

type PostInsert = {
  id?: string
  title: string
  content: string
  excerpt: string
  slug: string
  author_id: string
  published?: boolean
  created_at?: string
  updated_at?: string
}

type PostUpdate = {
  id?: string
  title?: string
  content?: string
  excerpt?: string
  slug?: string
  author_id?: string
  published?: boolean
  created_at?: string
  updated_at?: string
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          profiles (
            full_name,
            username
          )
        `)
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) throw error

      setPosts(data || [])
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error fetching posts')
    } finally {
      setLoading(false)
    }
  }

  const fetchUserPosts = async () => {
    if (!user) return

    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          profiles (
            full_name,
            username
          )
        `)
        .eq('author_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error

      setPosts(data || [])
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error fetching user posts')
    } finally {
      setLoading(false)
    }
  }

  const createPost = async (postData: Omit<PostInsert, 'author_id'>) => {
    if (!user) throw new Error('User not authenticated')

    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          ...postData,
          author_id: user.id,
        },
      ])
      .select(`
        *,
        profiles (
          full_name,
          username
        )
      `)
      .single()

    if (error) throw error

    setPosts((prev) => [data, ...prev])
    return data
  }

  const updatePost = async (id: string, postData: PostUpdate) => {
    const { data, error } = await supabase
      .from('posts')
      .update(postData)
      .eq('id', id)
      .select(`
        *,
        profiles (
          full_name,
          username
        )
      `)
      .single()

    if (error) throw error

    setPosts((prev) =>
      prev.map((post) => (post.id === id ? data : post))
    )
    return data
  }

  const deletePost = async (id: string) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    if (error) throw error

    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  const getPostBySlug = async (slug: string) => {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        profiles (
          full_name,
          username
        )
      `)
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error) throw error

    return data
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return {
    posts,
    loading,
    error,
    fetchPosts,
    fetchUserPosts,
    createPost,
    updatePost,
    deletePost,
    getPostBySlug,
  }
}