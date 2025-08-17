import React from "react"
import CategoryCard from "@/components/molecules/CategoryCard"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"

const CategoriesGrid = ({ categories, loading, error }) => {
  if (loading) return <Loading />
  if (error) return <Error message={error} />
  if (!categories || categories.length === 0) {
    return <Empty title="Geen categorieën gevonden" message="Er zijn momenteel geen help categorieën beschikbaar" />
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.Id} category={category} />
      ))}
    </div>
  )
}

export default CategoriesGrid