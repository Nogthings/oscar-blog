import { useState, useEffect, useCallback, useRef } from 'react'

interface UseInfiniteScrollProps<T> {
  items: T[]
  itemsPerPage?: number
  hasMore?: boolean
  onLoadMore?: () => void
}

export function useInfiniteScroll<T>({ 
  items, 
  itemsPerPage = 12, 
  hasMore = true,
  onLoadMore 
}: UseInfiniteScrollProps<T>) {
  const [displayedItems, setDisplayedItems] = useState<T[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadingRef = useRef<HTMLDivElement | null>(null)

  // Initialize displayed items
  useEffect(() => {
    const initialItems = items.slice(0, itemsPerPage) as T[]
    setDisplayedItems(initialItems)
    setPage(1)
  }, [items, itemsPerPage])

  // Load more items
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    
    // Simulate network delay for smooth UX
    setTimeout(() => {
      const nextPage = page + 1
      const startIndex = page * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const newItems = items.slice(startIndex, endIndex) as T[]
      
      if (newItems.length > 0) {
        setDisplayedItems(prev => [...prev, ...newItems])
        setPage(nextPage)
        onLoadMore?.()
      }
      
      setIsLoading(false)
    }, 300)
  }, [items, page, itemsPerPage, isLoading, hasMore, onLoadMore])

  // Set up intersection observer
  useEffect(() => {
    const currentLoadingRef = loadingRef.current
    
    if (!currentLoadingRef) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && hasMore && displayedItems.length < items.length) {
          loadMore()
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    )

    observerRef.current.observe(currentLoadingRef)

    return () => {
      if (observerRef.current && currentLoadingRef) {
        observerRef.current.unobserve(currentLoadingRef)
      }
    }
  }, [loadMore, hasMore, displayedItems.length, items.length])

  // Clean up observer
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const hasMoreItems = displayedItems.length < items.length
  const progress = items.length > 0 ? (displayedItems.length / items.length) * 100 : 0

  return {
    displayedItems,
    isLoading,
    hasMoreItems,
    progress,
    loadingRef,
    loadMore
  }
}